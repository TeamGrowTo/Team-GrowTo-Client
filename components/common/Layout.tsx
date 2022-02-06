import Footer from "components/main/Footer";
import { useRouter } from "next/router";
import React from "react";

import NavBar from "./NavBar";
interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const isProcess =
    router.pathname === ("/processTag" || "/processTime" || "processTime") ? true : false;

  return (
    <>
      <NavBar />
      {children}
      {isProcess ? <></> : <Footer />}
    </>
  );
}

export default Layout;
