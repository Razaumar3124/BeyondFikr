import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Navbar from "../Components/Navbar/Navbar";

let routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/nav",
        element: <Navbar />
    }
])

export default routes