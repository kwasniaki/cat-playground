import { ApiError } from '../types';
import '@tanstack/react-query';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ApiError;
  }
}
