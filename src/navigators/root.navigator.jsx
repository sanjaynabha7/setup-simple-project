import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../consts/route.const";
import AuthNavigator from "./auth.navigator";
import LoginPage from "../pages/login.page";
import HomePage from "../pages/home.page";
import Dashboard from "../pages/dashboard.page";
import ContactPage from "../pages/contact.page";
import BlogPage from '../pages/blog.page';
import ProductDetailsPage from '../pages/productDetails.page';
import ProductListPage from '../pages/productList.page';
import AdminProductListPage from '../pages/admin/productList.page';

const RootNavigator = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.BLOG_PAGE} element={<BlogPage />} />
        <Route path={ROUTES.CONTACT_PAGE} element={<ContactPage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductListPage />} />
        <Route path={`${ROUTES.PRODUCT_DETAILS}/:productId`} element={<ProductDetailsPage />} />

        <Route path={ROUTES.ADMIN_PAGE} element={<AuthNavigator />}>
          <Route path={ROUTES.ADMIN_PAGE} element={<Dashboard />} />
          <Route path={ROUTES.AUTH_LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.PRODUCT_LIST} element={<AdminProductListPage />} />
        </Route>
      </Routes>

    </>
  );
};

export default RootNavigator;
