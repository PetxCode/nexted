"use client";

import React, { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./static/Header";

interface iPorp {
  children: ReactNode;
}

const MainLayout: FC<iPorp> = async ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/register" || pathname === "/signin") {
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div>{children}</div>
      </div>
    );
  }
};

export default MainLayout;
