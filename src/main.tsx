import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./modules/dashboard/pages/page.tsx";
import Expenses from "./modules/expenses/Expenses.tsx";
import Categories from "./modules/categories/Categories.tsx";
import Statistics from "./modules/statistics/Statistics.tsx";
import Settings from "./modules/settings/Settings.tsx";
import NotFound from "./modules/notFound/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
