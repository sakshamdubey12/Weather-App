import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavouritesProvider } from "./context/FavouritesContext";

ReactDOM.render(
  <React.StrictMode>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
