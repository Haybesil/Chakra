import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing/>,
    },
    {
        path: '/connect-wallet',
        element: <Home/>
        
    },
])


function AppRoutes() {
    return <RouterProvider router={router}/>
}

export default AppRoutes