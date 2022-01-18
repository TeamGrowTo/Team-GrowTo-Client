import Footer from "components/main/Footer";
import React from "react";

import NavBar from "./NavBar";
interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
