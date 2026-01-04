import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";

// Mark successful startup for GitHub Pages diagnostics (see index.html)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).__APP_BOOTED__ = true;

createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);


