import {
  useQuery as useQuery_,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import {
  Action,
  ClusterWithLocalhost,
  ERR_REQUEST_TIMEOUT_REACHED,
  FetchTransactionsEvaluationKey,
  FetchTransactionsEvaluationType,
  TxnsScanResult,
} from './types';

const BLOWFISH_BASE_URL = 'https://api.blowfish.xyz/solana/v0/mainnet';
const REQUEST_TIMEOUT_LIMIT = 10000;
const REFETCH_INTERVAL_MS = 5000;

export const useFetchBlowfishEvaluation = (
  cluster: ClusterWithLocalhost,
  transactions: string[],
  dappUrl: string,
  userAccount: string | undefined,
  onError: (error: Error) => void,
): TxnsScanResult => {
  const origin = getOrigin(dappUrl) || '';
  const chainId = getChainIDByCluster(cluster);

  const queryKey: FetchTransactionsEvaluationKey = [
    FetchTransactionsEvaluationType,
    { transactions, origin, userAccount },
  ];
  const queryFn = async () => {
    try {
      // For localhost network we cannot simulate so just return an error
      // and let the UI show unable to simulate transaction
      if (cluster == 'localhost') {
        return { error: new Error('Localhost simulation not supported') };
      }

      // Abort request if takes too long
      const controller = new AbortController();
      const signal = controller.signal;
      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT_LIMIT);

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-API-KEY', process.env.REACT_APP_BLOWFISH_API_KEY || '');
      const params = {
        transactions,
        userAccount,
        metadata: {
          origin,
        },
      };
      const init = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
      };

      const endpoint = `${BLOWFISH_BASE_URL}/scan/transactions?language=en&chainId=${chainId}`;
      const request = new Request(endpoint, init);
      const response = await fetch(request, { signal });

      if (response.ok) {
        // Returned success, parse body
        const evaluation = await response.json();
        console.log(evaluation);
        // TODO(fabio): Eventually check the response against a robust schema
        if (
          evaluation.warnings === undefined ||
          evaluation.action === undefined ||
          evaluation.simulationResults === undefined
        ) {
          return {
            error: new Error('Blowfish API response missing required fields'),
          };
        }

        // Put more helpful, technical failure reason in the console for developer users
        const simulationErr = evaluation.simulationResults.error;
        if (simulationErr !== null) {
          // eslint-disable-next-line no-console
          console.log('Simulation error: ', simulationErr.humanReadableError);
        }

        return { evaluation };
      } else {
        const errMessage = await response.json();
        return {
          error: new Error(
            `Blowfish API returned non-200 response: ${
              response.status
            }: ${JSON.stringify(errMessage)}`,
          ),
        };
      }
    } catch (error: any) {
      // Note(fabio): Must lowercase error message b/c in React Native the keyword is capitalized
      // whereas in the browser-ext it isn't
      if (error.message.toLowerCase().includes('aborted')) {
        return { error: ERR_REQUEST_TIMEOUT_REACHED };
      } else {
        // Other error
        return { error };
      }
    }
  };
  const enabled = !!transactions;

  const txnsEvaluationQuery = useQuery({
    queryKey,
    queryFn,
    enabled,
    refetchInterval: REFETCH_INTERVAL_MS,
  });
  const txnsScanResult = useMemo(() => {
    const txnsScanEvaluation = txnsEvaluationQuery.data?.evaluation;
    let computedEvaluation;
    if (txnsScanEvaluation) {
      const simulationErr = txnsScanEvaluation?.simulationResults?.error;
      const isRecentBlockhashExpired =
        txnsScanEvaluation?.simulationResults?.isRecentBlockhashExpired;
      const isBlockRecommended =
        txnsScanEvaluation?.action === Action.Block ||
        txnsScanEvaluation?.action === Action.HardBlock;
      computedEvaluation = {
        isBlockRecommended,
        isRecentBlockhashExpired,
      };
    }
    return {
      isLoading: !txnsEvaluationQuery.isFetched,
      error: txnsEvaluationQuery.data?.error || txnsEvaluationQuery.error,
      evaluation: txnsScanEvaluation,
      computedEvaluation,
    };
  }, [txnsEvaluationQuery]);

  const txnsScanResultError = txnsScanResult.error;
  useEffect(() => {
    if (txnsScanResultError) {
      onError(txnsScanResultError);
    }
  }, [onError, txnsScanResultError]);

  return txnsScanResult;
};

// Same as useQuery but defaults TError to Error
function useQuery<TQueryFnData = unknown, TError = Error, TData = TQueryFnData>(
  options: UseQueryOptions<TQueryFnData, TError, TData>,
): UseQueryResult<TData, TError> {
  return useQuery_(options);
}

/*
Generic helper functions
*/

const getOrigin = (url?: string): string | undefined => {
  if (!url) {
    return undefined;
  }
  try {
    const _url = new URL(url);
    return _url.origin;
  } catch (err) {
    return undefined;
  }
};

/**
 * Gets the token list chain id associated with a cluster
 *
 * 101: mainnet-beta / localhost
 * 102: testnet
 * 103: devnet
 */
export const getChainIDByCluster = (cluster: ClusterWithLocalhost) => {
  switch (cluster) {
    case 'mainnet-beta':
      return 101;
    case 'testnet':
      return 102;
    case 'devnet':
      return 103;
    case 'localhost':
      return 101; // just use the mainnet chain id for localhost
  }
};
