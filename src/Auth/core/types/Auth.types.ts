export interface Credentials {
    email: string
    password: string
  }
  
  export interface Session {
    email: string
    token: string
    issuedAt: number
  }
  
  export type LoginResult =
    | { success: true }
    | { success: false; error: string }
  
  export interface AuthContextValue {
    isAuthenticated: boolean
    user: Session | null
    login: (credentials: Credentials) => LoginResult
    logout: () => void
  }