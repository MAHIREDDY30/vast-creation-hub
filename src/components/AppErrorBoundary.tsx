import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  error: Error | null;
  errorInfo?: React.ErrorInfo;
};

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Keep this for debugging blank pages in static hosting.
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: "24px",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
          }}
        >
          <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            The app failed to load
          </h1>
          <p style={{ marginBottom: 16 }}>
            This usually happens due to a runtime error or missing environment variables in
            static hosting.
          </p>
          <div
            style={{
              background: "#111827",
              color: "#F9FAFB",
              borderRadius: 12,
              padding: 16,
              overflow: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Error</div>
            {String(this.state.error)}
            {this.state.errorInfo?.componentStack ? (
              <>
                {"\n\n"}
                <div style={{ fontWeight: 700, margin: "8px 0" }}>Component stack</div>
                {this.state.errorInfo.componentStack}
              </>
            ) : null}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
