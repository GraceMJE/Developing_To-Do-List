import './index.css'; // Global styles
import React from 'react'; // React library
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // React 18 rendering API
import App from './App.jsx'; // Main app component
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);