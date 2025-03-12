import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/user",
        element: <div>user aaa</div>,
    },
    {
        path: "/tracks",
        element: <div>tracks aaa</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
