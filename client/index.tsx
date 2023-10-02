import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(   
  <Auth0Provider
    domain="matai-simon.au.auth0.com"
    clientId="SmQXUAALnvmE3XVkaKIBdQfkXPmjVKil"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://gym/api',
    }}
    >
        <App />
      </Auth0Provider>)
})
    