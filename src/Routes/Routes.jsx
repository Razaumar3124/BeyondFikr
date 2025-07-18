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
])

export default routes