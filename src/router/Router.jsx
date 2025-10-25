import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/LogIn";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Authlayout from "../layouts/Authlayout";
import ToyDetails from "../pages/ToyDetails";
import Private from "../provider/Private";
import ForgetPassword from "../pages/ForgetPassword";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/profile',
                element:<MyProfile></MyProfile>
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
        element:<Private><ToyDetails></ToyDetails></Private>,
        loader:()=>fetch('/Toys.json')

    },
    {
        path:'/forget',
        element:<ForgetPassword></ForgetPassword>
    },
    {
            path:'/*',
            element:<ErrorPage></ErrorPage>
        }
])
export default router;