import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import { componentRoutes, type IRoute } from "./shared/constants/routes.ts";
import Layout from "./shared/components/ui/template/Layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Layout>
        <Routes>
          {componentRoutes.map(({ path, component }: IRoute) => {
            const Component = component;
            return <Route path={path} element={<Component />} />;
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  </>,
);
