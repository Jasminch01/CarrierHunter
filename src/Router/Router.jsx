import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Components/Home/Home";
import JobsDetails from "../Components/JobsDetails/JobsDetails";

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
            path : '/applyed-jobs',
            element : <div>Applyed jobs</div>
        },
        {
            path : '/blogs',
            element : <div>Blogs</div>
        },
        {
            path : '/jobs-details/:id',
            element: <JobsDetails></JobsDetails>,
            loader : ()=> fetch('/jobs.json')
        }
    ]
  },
]);

export default router;
