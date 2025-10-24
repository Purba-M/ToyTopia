import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/LogIn";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Authlayout from "../layouts/Authlayout";
import ToyDetails from "../pages/ToyDetails";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/home",
                element:<Home></Home>
            }
        ]
        
    },
    {
        path:'/auth',
        element:<Authlayout></Authlayout>,
        children:[
             {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                }
        ]
    },
    {
        path:'/toy-details/:id',
        element:<ToyDetails></ToyDetails>,
        loader:()=>fetch('/Toys.json')

    },
    {
            path:'/*',
            element:<h2>Error 404</h2>
        }
])
export default router;