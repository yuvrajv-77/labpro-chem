import { createBrowserRouter } from "react-router"

import RootLayout from "@/layouts/RootLayout"
import HomePage from "@/pages/HomePage"
import CompanyProfile from "@/pages/CompanyProfile"
import Certifications from "@/pages/Certifications"
import COA from "@/pages/COA"
import PrivacyPolicy from "@/pages/PrivacyPolicy"
import { Gallery } from "./pages/Gallery"
import Search from "./pages/Search"
import ErrorPage from "./pages/ErrorPage"
import Chemicals from "./pages/chemical/Chemicals"
import Contact from "./pages/Contact"
import { Download } from "lucide-react"
import Downloads from "./pages/Downloads"
import ChemicalCategories from "./pages/chemical/Categories"
import ChemicalDetails from "./pages/chemical/ChemicalDetails"

export const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/profile",
        element: <CompanyProfile />
      },
      {
        path: "/downloads",
        element: <Downloads />,
      },
      {
        path: "/events",
        element: <div className="flex items-center justify-center h-screen text-3xl animate-pulse"> This page is in 🧑🏻‍💻development🧑🏻‍💻 </div>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/chemicals",
        element: <Chemicals />
      },
      {
        path: "/chemicals/:chemicalId",
        element: <ChemicalDetails />
      },
      {
        path: "/categories",
        element: <ChemicalCategories />
      },
      {
        path: "/certifications",
        element: <Certifications />
      },
      {
        path: "/CoA",
        element: <COA />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/search",
        element: <Search />
      },
    ]
  }
])