import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./modules/dashboard/pages/page.tsx";
import Expenses from "./modules/expenses/Expenses.tsx";
import Categories from "./modules/categories/Categories.tsx";
import Statistics from "./modules/statistics/Statistics.tsx";
import Settings from "./modules/settings/Settings.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    <Routes>
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
    <Routes>
      <Route path="/categories" element={<Categories />} />
    </Routes>
    <Routes>
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
    <Routes>
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>,
);
