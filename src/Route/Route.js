import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/home",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login />
      },
      ]
    },
  ]);