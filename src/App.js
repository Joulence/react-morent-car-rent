import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { Suspense, lazy } from "react";
import DetailsPage from "./pages/Details";

const FavouritesPage = lazy(() => import("./pages/Favourites"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const NotificationsPage = lazy(() => import("./pages/Notifications"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "favourites",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <FavouritesPage />
          </Suspense>
        ),
        loader: () => import("./pages/Favourites"),
      },
      {
        path: "notifications",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <NotificationsPage />
          </Suspense>
        ),
        loader: () => import("./pages/Notifications"),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SettingsPage />
          </Suspense>
        ),
        loader: () => import("./pages/Settings"),
      },
      {
        path: "cars/:carId",
        id: "car-detail",
        children: [
          {
            index: true,
            element: <DetailsPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
