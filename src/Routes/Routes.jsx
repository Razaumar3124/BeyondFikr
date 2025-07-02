import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import HomePage from "../Pages/HomePage";
import HeroPage from "../Pages/HeroPage";
import AboutusPage from "../Pages/AboutusPage";
import ContactPage from "../Pages/ContactPage";
import ServicesPage from "../Pages/ServicesPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

let routes = createBrowserRouter([
    {
        path: "/",
        element: <HeroPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "services",
                element: <ServicesPage />
            },
            {
                path: "aboutus",
                element: <AboutusPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "policy",
                element: <PrivacyPolicy />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
])

export default routes