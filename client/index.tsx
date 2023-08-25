import { createRoot } from 'react-dom/client'

import App from './components/Layout.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<App />)
})
