import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import ProductPage from "./Pages/Product/ProductPage.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import CartPage from "./Pages/Cart/CartPage.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import About from "./Pages/About/About.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Shipping from "./Pages/Shipping/Shipping.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomePage />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/shipping" element={<Shipping />}></Route>
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
