import { QueryClientProvider } from '@tanstack/react-query';
import { apiQueryClient } from '../api/client';
import { Root } from './routes/root';

export const App = () => {
  return (
    <QueryClientProvider client={apiQueryClient}>
      <Root />
    </QueryClientProvider>
  );
};
