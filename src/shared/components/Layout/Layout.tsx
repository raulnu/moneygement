import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
