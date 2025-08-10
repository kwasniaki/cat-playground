import createClient from 'openapi-fetch';
import type { paths } from './generated/cat-playground-api';

export const apiClient = createClient<paths>({
  baseUrl: 'http://localhost:8080',
});
