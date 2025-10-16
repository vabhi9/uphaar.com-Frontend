import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { VisibilityProvider } from "./utils/Visibilitycontext.jsx";
// import Sign from "./Signin.jsx/Sign.jsx";
import ProductLayout from "./ProductLayout/ProductLayout.jsx";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrolltoTop.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Blog from "./Blog/Blog.jsx";
import Refund from "./Policy/Refund.jsx";
import Privacy from "./Policy/Privacy.jsx";
import TermsCons from "./Policy/TermsCons.jsx";
import ProDesc from "./ProductLayout/ProductDescription/ProDesc.jsx";
import { CartProvider } from "./Cart/CartContext.jsx";
import ToastWrapper from "./utils/ToastWrapper.jsx";
// import Sin from "./Signin/Sin.jsx";
import Welcome from "./utils/Verified.jsx";
import SigninWithEmail from "./Signin/Sign.jsx";
import WhyUs from "./Body/WhyUs.jsx";
import Profile from "./Signin/Profile.jsx";
import Cart from "./Cart/Cart.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

// import Welcome from "./Signin.jsx/Welcome.jsx";
// import AuthHandler from "./Signin.jsx/AuthHandler.jsx";

// Layout Component to Wrap Routes with ScrollToTop
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

const Routes = createBrowserRouter([
  {
    element: <Layout />, // Wrap all routes inside Layout to apply ScrollToTop globally
    children: [
      { path: "/signin", element: <SigninWithEmail /> },
      {
        path: "/profile",
        element: (
          <>
            <VisibilityProvider>
              <Navbar />
              <Profile />
            </VisibilityProvider>
          </>
        ),
      },
      {
        path: "/Home",
        element: <App />,
      },
      // { path: "/user/:username", element: <App /> },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/api/product/:category",
        element: (
          <VisibilityProvider>
            <Navbar />
            <ProductLayout />
          </VisibilityProvider>
        ),
      },
      {
        path: "/api/blog",
        element: (
          <VisibilityProvider>
            <Navbar />
            <Blog />
          </VisibilityProvider>
        ),
      },
      {
        path: "/cart",
        element: (
          <>
            <VisibilityProvider>
              <Navbar />
              <Cart />
            </VisibilityProvider>
          </>
        ),
      },
      { path: "/return&refundpolicies", element: <Refund /> },
      { path: "/&&privacypolicy", element: <Privacy /> },
      { path: "/terms&&conditions", element: <TermsCons /> },
      { path: "/welcome", element: <Welcome /> },
      { path: "/product", element: <ProDesc /> },
      { path: "/why_us", element: <WhyUs /> },
      // { path: "/prods", element: <Cart /> },
      // { path: "/verifiedSuccessfully", element: <VerifiedSuccessfully /> },
      // { path: "/welcome", element: <Welcome /> },
      // { path: "/__/auth/handler", element: <AuthHandler /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <UserContextProvider>
        <CartProvider>
          <ToastWrapper />
          <RouterProvider router={Routes} />
        </CartProvider>
      </UserContextProvider>
  </StrictMode>
);
