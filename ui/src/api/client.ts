import createClient from 'openapi-fetch';
import { QueryClient } from '@tanstack/react-query';
import type { paths } from './generated/cat-playground-api';

export const apiClient = createClient<paths>({
  baseUrl: '/api',
});

export const apiQueryClient = new QueryClient();
