import React from "react";
//import CustomCursor from "../atom/CustomCursor";

interface Prop {
  children: React.ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <main className="app relative">
      {/* <CustomCursor /> */}
      {children}
    </main>
  );
};

export default Layout;
