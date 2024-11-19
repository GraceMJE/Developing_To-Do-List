import './index.css'; // Global styles
import React from 'react'; // React library
import ReactDOM from 'react-dom/client'; // React 18 rendering API
import App from './App.jsx'; // Main app component
import { TodoProvider } from './context/TodoContext'; // Import the TodoProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the App component with TodoProvider to provide the context
  <TodoProvider>
    <App />
  </TodoProvider>
);
