
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import AuthForm from "./Components/Form/Form";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard"
import Customers from "./Components/Customers/Customers"

function App() {
  const router = createBrowserRouter([
    {
      path: "/login", element: <AuthForm />
    },
    {
      path: "/", element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "customers", element: <Customers /> },
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
