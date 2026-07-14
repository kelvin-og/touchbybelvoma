/**
 * Static SPA entry point — used only by the GitHub Pages build.
 * (vite.static.config.ts → index.static.html → this file)
 *
 * The normal dev/SSR entry is handled by TanStack Start via vite.config.ts.
 */
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getStaticRouter } from "./router.static";
import "./styles.css";

const router = getStaticRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
