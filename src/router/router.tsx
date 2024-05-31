import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Layout from "../components/layout/Layout";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import Signin from "../pages/Signin";
import Books from "../pages/Books";

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
]);