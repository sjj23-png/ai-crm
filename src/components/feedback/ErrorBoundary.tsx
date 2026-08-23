import React from "react";


interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;

  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Application Error", error);

    console.error(info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-100 p-8 dark:bg-neutral-950">
          <div className="w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h1 className="text-2xl font-bold">
              Something went wrong
            </h1>

            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              An unexpected error occurred while rendering the application.
            </p>

            <button
              onClick={this.handleReload}
              className="mt-8 rounded-xl bg-primary-600 px-5 py-3 text-white transition hover:bg-primary-700"
            >
              Reload Application
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}