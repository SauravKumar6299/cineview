export const AUTH_CREDENTIALS = {
    email: import.meta.env.VITE_ADMIN_EMAIL,
    password: import.meta.env.VITE_ADMIN_PASSWORD,
  } as const
  
  export const SESSION_STORAGE_KEY = 'cineview.session'
  
  export const INVALID_CREDENTIALS_MESSAGE = 'Invalid email or password.'