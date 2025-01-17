import { DashboardLayout } from "@/Layout/DashboardLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Template from "@/pages/Template";

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
        path:"home",
        element:<Template/>
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  };
}
