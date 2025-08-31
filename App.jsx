import { createRoot } from "react-dom/client";
import { Suspense, lazy, StrictMode } from "react";

const Header = lazy(() => import("./header"));
const Sidebar = lazy(() => import("./Sidebar"));
const Content = lazy(() => import("./Content"));
const Footer = lazy(() => import("./Footer"));

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}>
    <StrictMode>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </StrictMode>
  </Suspense>
);
