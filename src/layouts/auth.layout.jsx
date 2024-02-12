import React from 'react'
import { Outlet } from "react-router-dom";
import AuthHeaderLayout from "./auth-header.layout";
import AuthLeftSidebarLayout from "./auth-left-sidebar.layout";
import AuthMainLayout from "./auth-main.layout";

const AuthLayout = () => {
  return (
    <>
      <AuthHeaderLayout />
      <AuthLeftSidebarLayout />
      <AuthMainLayout>
        <Outlet />
      </AuthMainLayout>
    </>
  );
};

export default AuthLayout;
