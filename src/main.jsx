import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CardsPage from "./pages/Cards-page/Cards.jsx";
import AddCardPage from "./pages/Add-Card/AddCard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CardsPage />,
      },

      {
        path: "/addCard",
        element: <AddCardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
{/*      <App />  <-- already rendered in "/" path */ }
    </RouterProvider>
  </React.StrictMode>
);
