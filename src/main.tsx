import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";

// Surface startup errors (prevents blank pages on static hosts)
window.addEventListener("error", (event) => {
  // eslint-disable-next-line no-console
  console.error("Global error:", event.error || event.message);
});
window.addEventListener("unhandledrejection", (event) => {
  // eslint-disable-next-line no-console
  console.error("Unhandled promise rejection:", event.reason);
});

createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);

