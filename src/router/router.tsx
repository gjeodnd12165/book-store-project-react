import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Layout from "../components/layout/Layout";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>
  },
  {
    path: '/books',
    element: <Layout><div>도서 목록</div></Layout>
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>
  },
]);