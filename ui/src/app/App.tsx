import { QueryClientProvider } from '@tanstack/react-query';
import { Root } from '../routes/root';
import { apiQueryClient } from '../api/client';

export const App = () => {
  return (
    <QueryClientProvider client={apiQueryClient}>
      <Root />
    </QueryClientProvider>
  );
};
