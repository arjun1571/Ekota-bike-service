import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import SingnUp from "../component/SignUp/SingnUp";
import CheakOut from "../component/CheakOut/CheakOut";
import Orders from "../component/Orders/Orders";
import PrivateRoute from "../PrivvateRoute/PrivateRoute";


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
        {
          path:"/signup",
          element:<SingnUp />
        },
        {
          path:"/cheakout/:id",
          element:<PrivateRoute><CheakOut></CheakOut></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/orders",
          element:<Orders></Orders>
        },
      ]
    },
  ]);