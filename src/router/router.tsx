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
import OrderList from "../pages/OrderList";

const routeList = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users/signup',
    element: <Signup />,
  },
  {
    path: '/users/reset',
    element: <ResetPassword />,
  },
  {
    path: '/users/signin',
    element: <Signin />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/books/:bookId',
    element: <BookDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/orderlist',
    element: <OrderList />,
  },
];

export const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    }
  })
);