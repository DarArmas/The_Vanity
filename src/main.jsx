import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavBar } from "./components/NavBar";
import { ProductCard } from "./components/ProductCard";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { ProductsContextProvider } from "./context/productsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ProductsContextProvider>
      <NavBar />
      <App />
      <LandingPage />
    </ProductsContextProvider>
  </>
);
