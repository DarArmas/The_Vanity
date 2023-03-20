import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsContextProvider } from "./context/productsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ProductsContextProvider>
      <App/>
    </ProductsContextProvider>
  </>
);

