import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import './LoginForm/LoginForm';
import {ThemeProvider} from "@mui/material";
import theme from "./constants";
import LoginForm from "./LoginForm/LoginForm";

function App() {
  return (

      <LoginForm />
  );
}

export default App;
