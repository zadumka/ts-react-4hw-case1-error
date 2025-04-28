import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Помилка: використання react-query замість @tanstack/react-query
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/App/App.tsx';
import 'modern-normalize';
import './global.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
