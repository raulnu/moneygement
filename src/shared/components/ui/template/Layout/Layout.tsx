import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./layout.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };
  return (
    <div className="layout">
      <Header
        isHamburgerActive={isHamburgerActive}
        toggleHamburger={toggleHamburger}
      />
      <Navigation
        isHamburgerActive={isHamburgerActive}
        toggleHamburger={toggleHamburger}
      />
      <main className="layout__main">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
