import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";

// Mark successful startup for GitHub Pages diagnostics (see index.html)
// NOTE: set this to true ONLY after React mounts successfully; otherwise the fallback
// message in index.html will never show.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).__APP_BOOTED__ = false;

// Surface startup errors (helps debug blank pages on static hosts)
window.addEventListener("error", (event) => {
  // eslint-disable-next-line no-console
  console.error("Global error:", event.error || event.message);
});
window.addEventListener("unhandledrejection", (event) => {
  // eslint-disable-next-line no-console
  console.error("Unhandled promise rejection:", event.reason);
});

try {
  createRoot(document.getElementById("root")!).render(
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__APP_BOOTED__ = true;
} catch (err) {
  // eslint-disable-next-line no-console
  console.error("Boot render failed:", err);
  // keep __APP_BOOTED__ = false so index.html fallback message shows
}


