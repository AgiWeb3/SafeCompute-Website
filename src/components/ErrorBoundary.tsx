import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SafeCompute ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080B14] flex items-center justify-center p-6 text-white">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#0F1626] border border-blue-900/50 shadow-2xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h2 className="text-xl font-bold font-display">
              {this.props.fallbackTitle || '页面遇到临时渲染异常'}
            </h2>

            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              {this.state.error?.message || 'A client-side exception occurred during render.'}
            </p>

            <button
              onClick={this.handleReload}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-sky-200 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>重新加载页面</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
