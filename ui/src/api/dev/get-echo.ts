import { queryOptions, useQuery } from '@tanstack/react-query';
import { OperationInputs } from '../../utils/extract-operation-parameters';
import { apiClient } from '../client';
import { QueryConfig } from '../../utils/query-config';
import { unwrapFetchResponse } from '../../utils/unwrap-fetch-response';

export const getEcho = (params: OperationInputs<'echo'>, signal?: AbortSignal) => {
  return apiClient.GET('/echo', {
    params: {
      query: params.parameters.query,
    },
    signal,
  });
};

export const getEchoQueryOptions = (params: OperationInputs<'echo'>) => {
  return queryOptions({
    queryKey: ['echo', params.parameters.query],
    queryFn: async ({ signal }) => unwrapFetchResponse(getEcho(params, signal)),
  });
};

type UseEchoOptions = {
  message: OperationInputs<'echo'>['parameters']['query']['message'];
  queryConfig?: QueryConfig<typeof getEchoQueryOptions>;
};

export const useEcho = ({ message, queryConfig }: UseEchoOptions) => {
  return useQuery({
    ...getEchoQueryOptions({ parameters: { query: { message } } }),
    ...queryConfig,
  });
};
