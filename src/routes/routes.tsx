import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landing/landing-page";


export const Route = createBrowserRouter([
    {
        path:"*",
        element: <><div>Page Not Found</div></>
    },
    {
        path :"/",
        element : <LandingPage/>
    },
    
])

export function Routing() {
    return <RouterProvider router={Route} />;
  }