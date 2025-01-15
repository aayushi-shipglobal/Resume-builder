import { DashboardLayout } from "@/Layout/DashboardLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";

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
        path: "about",
        element: <About />,
      },
    ],
  };
}
