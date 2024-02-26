import { createBrowserRouter } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";

// `createBrowserRouter` takes an array of objects
// each object represents a route (a URL & the element to render at that URL)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blue",
        element: <Blue />,
      },
      {
        path: "/red",
        element: <Red />,
      },
    ],
  },
]);

export default router;
