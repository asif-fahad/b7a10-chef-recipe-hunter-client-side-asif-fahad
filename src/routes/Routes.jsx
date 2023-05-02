import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import ChefsDetails from "../pages/Chefs/ChefsDetails/ChefsDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefsDetails/:id',
                element: <ChefsDetails></ChefsDetails>,
                loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-asif-fahad-asif-fahad.vercel.app/chefs/${params.id}`)
            }
        ]
    },
]);

export default router;