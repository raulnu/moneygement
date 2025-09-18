import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./modules/dashboard/pages/page.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
);
