import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure light theme is default
if (typeof document !== 'undefined') {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
