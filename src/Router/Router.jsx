import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch('/jobs.json')
        },
        {
            path : '/jobs',
            element : <div>Job</div>
        },
        {
            path : '/applyed-jobs',
            element : <div>Applyed jobs</div>
        },
        {
            path : '/blogs',
            element : <div>Blogs</div>
        }
    ]
  },
]);

export default router;
