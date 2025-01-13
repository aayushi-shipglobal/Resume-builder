import { DashboardLayout } from "@/Layout/DashboardLayout";
import Home from "@/pages/Home";
// import { Outlet } from "react-router-dom";


export default function Routes() {
  return {
    path:"/",
    element:<DashboardLayout/>,
    children:[
        {
            path:"/",
            element:<Home/>
        }
    ]
  }
}
