import Home from "@/pages/Home";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Template from "@/pages/Template";
import { DashboardLayout } from "@/Layout/DashboardLayout";

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
        path: "about",
        element: <About />,
      },
    ],
  };
}
