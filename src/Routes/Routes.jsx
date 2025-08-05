import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import HeroPage from "../Pages/HeroPage";
import AboutusPage from "../Pages/AboutusPage";
import ContactPage from "../Pages/ContactPage";
import ServicesPage from "../Pages/ServicesPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import ErrorPage from "../Pages/ErrorPage";

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
                path: "about",
                element: <AboutusPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "policy",
                element: <PrivacyPolicy />
            },
            {
                path: "terms",
                element: <TermsAndConditions />
            }
        ]
    },
    {
        path: "/log",
        element: <LoginPage />
    },
    {
        path: "/sign",
        element: <SignupPage />
    },
    {
        path: "/forgot",
        element: <ForgotPassword />
    },
    {
        path: "/reset",
        element: <ResetPassword />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])

export default routes