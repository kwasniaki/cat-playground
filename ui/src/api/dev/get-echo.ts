import { OperationInputs } from '../../types/utils/extract-operation-parameters';
import { apiClient } from '../client';

export const getEcho = (params: OperationInputs<'echo'>, signal?: AbortSignal) => {
  return apiClient.GET('/echo', {
    params: {
      query: params.parameters.query,
    },
    signal,
  });
};
