import { useCallback, useEffect, useState } from 'react';

const PHANTOM_TOKENS_BASE = `https://api.phantom.app/token-data/`;

export interface PhantomAssetsResponse {
  page: number;
  perPage: number;
  total: number; // total assets available for pagination
  records: PhantomTokenRecord[];
}
export interface PhantomTokenRecord {
  mintAddress: string;
  tokenAccountAddress: string;
  amount: string;
  type: string;
  name: string;
  symbol: string; // usually uppercase
  imageUrl: string;
}
export interface CoinGeckoPricesResponse {
  // lowercase tokenSymbol
  [tokenSymbol: string]: CoinGeckoPrice;
}
export interface CoinGeckoPrice {
  usd: number | undefined;
  usd_24h_change: number | undefined | null;
}

const fetchCoinGecko = (): Promise<CoinGeckoPricesResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        enviro: {
          usd: 5.392e-11,
          usd_24h_change: null,
        },
        jungle: {
          usd: 0.061249,
          usd_24h_change: -0.7804463656312244,
        },
        solana: {
          usd: 39.78,
          usd_24h_change: 2.543453479749187,
        },
        msol: {
          usd: 3900000000000.78,
          usd_24h_change: 2.543453479749187,
        },
        sol: {
          usd: 39.78,
          usd_24h_change: 2.543453479749187,
        },
      });
    }, 50);
  });
};

export const usePhantomAssets = () => {
  const [data, setData] = useState<any>();

  const endpoint = `${PHANTOM_TOKENS_BASE}?publicKey=7XdanWCMkgkwtn7fYvgkhv3bu8cL31QrKQpmhdZ4EfvS&page=1&perPage=100`;

  const fetchTokens = useCallback(async () => {
    const response = await fetch(endpoint);
    const data = (await response.json()) as PhantomAssetsResponse;
    setData(data);
  }, []);

  useEffect(() => {
    fetchTokens();
  }, []);

  return data;
};

export const usePhantomPrices = (tokens: string[]) => {
  const [data, setData] = useState<any>();

  const endpoint = `https://api.coingecko.com/api/v3/simple/price?include_24hr_change=true&vs_currencies=usd&ids=${constructTokenList(
    tokens,
  )}`;

  const fetchTokens = useCallback(async () => {
    const response = await fetchCoinGecko();
    setData(response);
  }, [endpoint]);

  useEffect(() => {
    if (tokens && tokens.length > 0) {
      fetchTokens();
    }
  }, [tokens, endpoint]);

  return data;
};

const constructTokenList = (tokens: string[]) => {
  return tokens?.join(',');
};
