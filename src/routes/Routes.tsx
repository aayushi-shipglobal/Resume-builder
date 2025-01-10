import Home from "@/pages/Home";
import { Outlet } from "react-router-dom";


export default function Routes() {
  return {
    path:"/",
    element:<Outlet/>,
    children:[
        {
            path:"/",
            element:<Home/>
        }
    ]
  }
}
