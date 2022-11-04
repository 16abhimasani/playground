import { Cluster, SimulatedTransactionResponse } from '@solana/web3.js';

export type QueryKey<
  K extends string,
  V extends Record<string, any> = Record<string, unknown>,
> = [K, V];
export const ERR_REQUEST_TIMEOUT_REACHED = new Error('Request timeout reached');

export type ClusterWithLocalhost = Cluster | 'localhost';

export enum WarningSeverity {
  Critical = 'CRITICAL',
  Warning = 'WARNING',
}

export interface Warning {
  severity: WarningSeverity;
  message: string;
}

export interface TxnsScanEvaluation {
  action: string;
  warnings: Warning[];
  simulationResults: SimulationResults;
}

export enum Action {
  None = 'NONE',
  Warn = 'WARN',
  Block = 'BLOCK',
  HardBlock = 'HARD_BLOCK',
}

export enum Sign {
  Plus = 'PLUS',
  Minus = 'MINUS',
}

export interface Diff {
  sign: Sign;
  digits: number;
}

export interface SolTransferData {
  symbol: string;
  name: string;
  decimals: number;
  diff: Diff;
}

export interface SplTransferData {
  symbol: string;
  name: string;
  mint: string;
  decimals: number;
  diff: Diff;
}

export interface SplApprovalData {
  delegate: string;
  symbol: string;
  name: string;
  mint: string;
  decimals: number;
  diff: Diff;
}

export interface RawInfo {
  kind: StateChangeKind;
  data: SolTransferData | SplTransferData | SplApprovalData;
}

export interface ExpectedStateChange {
  humanReadableDiff: string;
  rawInfo: RawInfo;
}

export enum StateChangeKind {
  SolTransfer = 'SOL_TRANSFER',
  SplTransfer = 'SPL_TRANSFER',
  SplApproval = 'SPL_APPROVAL',
}

export interface SimulationError {
  humanReadableError: string;
  kind: string;
}

export interface SimulationResults {
  isRecentBlockhashExpired: boolean;
  expectedStateChanges: ExpectedStateChange[];
  error: SimulationError | null;
  raw: SimulatedTransactionResponse;
}

export interface ComputedTxnsScanEvaluation {
  isBlockRecommended: boolean;
  isRecentBlockhashExpired: boolean;
}

export interface TxnsScanResult {
  isLoading: boolean;
  error: Error | null;
  evaluation?: TxnsScanEvaluation;
  computedEvaluation?: ComputedTxnsScanEvaluation;
}

export const FetchTransactionsEvaluationType = 'evaluate-txs';

export type FetchTransactionsEvaluationKey = QueryKey<
  typeof FetchTransactionsEvaluationType,
  {
    transactions: string[];
    origin: string;
    userAccount?: string;
  }
>;
