import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/log-in';
import SignUp from './components/sign-up';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/log-in",
        element: <Login/>,
        errorElement: <h1>404</h1>,
    },
    {
        path: "/sign-up",
        element: <SignUp/>,
        errorElement: <h1>404</h1>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);