import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@/lib/superdev/client";

const rootElement = document.getElementById("root")!;
const isSpaFallback = rootElement.dataset.spaFallback === "true";

if (rootElement.hasChildNodes() && !isSpaFallback) {
  hydrateRoot(rootElement, <App />);
} else {
  if (isSpaFallback) {
    rootElement.replaceChildren();
  }
  createRoot(rootElement).render(<App />);
}
