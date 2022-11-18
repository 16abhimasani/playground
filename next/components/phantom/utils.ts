import {
  QueryClient,
  useQuery as useQuery_,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

export const queryClient = new QueryClient();

// Same as useQuery but defaults TError to Error
export function useQuery<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData>,
): UseQueryResult<TData, TError> {
  return useQuery_(options);
}
