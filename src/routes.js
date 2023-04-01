import { useState, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Homepage from "./pages/Homepage";
import AddPost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";


export default function Router() {
    const [routes, setRoutes] = useState([]);
  useEffect(() => {
     
      setRoutes([
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/create",
          element: <AddPost />,
        },
        {
          path: "/edit",
          element: <EditPost/>,
        },
        
      ]);

   
  }, [ ]);

  return useRoutes(routes);
}
