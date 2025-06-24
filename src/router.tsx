import { createBrowserRouter } from "react-router"

import RootLayout from "@/layouts/RootLayout"
import HomePage from "@/pages/HomePage"
import CompanyProfile from "@/pages/CompanyProfile"
import Certifications from "@/pages/Certifications"
import COA from "@/pages/COA"
import PrivacyPolicy from "@/pages/PrivacyPolicy"



export const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
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
    ]
  }
])