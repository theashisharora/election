import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Donate = lazy(() => import("../pages/Donate/Donate"));
const Banner = lazy(() => import("../pages/Banner/Banner"));
const Manifesto = lazy(() => import("../pages/Manifesto/Manifesto"));
const Profile = lazy(() => import("../pages/Profile/Profile"));

// list app routes
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/banners",
    element: <Banner />,
  },
  {
    path: "/manifesto",
    element: <Manifesto />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
