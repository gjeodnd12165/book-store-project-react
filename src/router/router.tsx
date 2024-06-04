import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Layout from "../components/layout/Layout";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import Signin from "../pages/Signin";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import Cart from "../pages/Cart";
import Order from "../pages/Order";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>
  },
  {
    path: '/users/signup',
    element: <Layout><Signup /></Layout>
  },
  {
    path: '/users/reset',
    element: <Layout><ResetPassword /></Layout>
  },
  {
    path: '/users/signin',
    element: <Layout><Signin /></Layout>
  },
  {
    path: '/books',
    element: <Layout><Books /></Layout>
  },
  {
    path: '/books/:bookId',
    element: <Layout><BookDetail /></Layout>
  },
  {
    path: '/cart',
    element: <Layout><Cart /></Layout>
  },
  {
    path: '/order',
    element: <Layout><Order /></Layout>
  },
]);