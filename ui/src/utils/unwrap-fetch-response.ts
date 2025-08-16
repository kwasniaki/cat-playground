import type { FetchResponse } from 'openapi-fetch';

export const unwrapFetchResponse = <
  T extends Record<string | number, unknown>,
  Options,
  Media extends `${string}/${string}`,
>(
  response: Promise<FetchResponse<T, Options, Media>>,
) => {
  return response.then((res) => {
    if (!res.data) {
      throw res.error;
    }
    return res.data;
  });
};
