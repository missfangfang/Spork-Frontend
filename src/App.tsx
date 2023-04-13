import React from 'react';
import './App.css';
import './LoginForm/LoginForm';
import LoginForm from "./LoginForm/LoginForm";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import SignUpForm from "./SignUpForm/SignUpForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <SignUpForm />
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
