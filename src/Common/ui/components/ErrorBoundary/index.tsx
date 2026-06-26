import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Fallback } from './StyledComponents'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <Fallback>This section failed to load.</Fallback>
    }
    return this.props.children
  }
}

export default ErrorBoundary