import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Don't log authentication errors in development
    if (error.message?.includes('Failed to fetch') || 
        error.message?.includes('invalid JWT') ||
        error.name === 'TypeError') {
      return;
    }
    
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Don't show error UI for authentication errors
      if (this.state.error?.message?.includes('Failed to fetch') || 
          this.state.error?.message?.includes('invalid JWT')) {
        return this.props.children;
      }
      
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Något gick fel
            </h2>
            <p className="text-slate-600 mb-6">
              Ett oväntat fel har inträffat. Försök att ladda om sidan.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ladda om sidan
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}