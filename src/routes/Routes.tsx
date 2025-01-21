import { DashboardLayout } from "@/Layout/DashboardLayout";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Home from "@/pages/Home";
import Template from "@/pages/Template";
// import path from "path";

export default function Routes() {
  return {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Template />,
       
      },
      {
        path:"/home/resume",
        element:<Resume/>
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  };
}
