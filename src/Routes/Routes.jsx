import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/updateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children :[
        {
            path : '/',
            element : <Home></Home>

        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path :'/addToy',
          element : <AddToy></AddToy>
        },
        {
          path : '/allToys',
          element : <AllToys></AllToys>
        },
        {
          path : '/toy/:id',
          element : <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
        },
        {
          path : '/blogs',
          element : <Blogs></Blogs>
        },
        {
          path : '/myToys',
          element : <MyToys></MyToys>
        },
        {
          path : '/update/:id',
          element : <UpdateToy></UpdateToy>,
          loader : ({params})=> fetch(`https://toy-bazar-server-mauve.vercel.app/toy/${params.id}`)
        }
      ]
    },
  ]);

export default router;