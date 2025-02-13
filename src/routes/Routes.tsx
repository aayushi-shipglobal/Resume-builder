import Home from "@/pages/Home";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Template from "@/pages/Template";
import { DashboardLayout } from "@/Layout/DashboardLayout";
import Resume2 from "@/pages/Resume2";
import Resume3 from "@/pages/Resume3";

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
        path: "/home/resume",
        element: <Resume />,
      },
      {
        path: "/home/resume2",
        element:<Resume2/>
      },
      {
        path: "/home/resume3",
        element:<Resume3/>
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  };
}
