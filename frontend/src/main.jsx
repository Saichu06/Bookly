import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: '#1e293b',
      color: '#fff',
    },
  }}
/>
    <App />
  </BrowserRouter>
);