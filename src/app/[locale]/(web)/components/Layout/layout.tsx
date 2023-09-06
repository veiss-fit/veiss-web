"use client";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function WebLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WebLayoutWrapper;
