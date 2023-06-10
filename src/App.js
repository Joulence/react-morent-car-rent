import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const FavouritesPage = lazy(() => import("./pages/Favourites"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const NotificationsPage = lazy(() => import("./pages/Notifications"));
const DetailsPage = lazy(() => import("./pages/Details"));
const LoginPage = lazy(() => import("./pages/Login"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const HowWorksPage = lazy(() => import("./pages/HowWorks"));

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
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <DetailsPage />
              </Suspense>
            ),
            loader: () => import("./pages/Details"),
          },
        ],
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<p>Loading....</p>}>
            <LoginPage />
          </Suspense>
        ),
        loader: () => import("./pages/Login"),
      },
      {
        path: "checkout",
        element: (
          <Suspense>
            <CheckoutPage />
          </Suspense>
        ),
        loader: () => import("./pages/Checkout"),
      },
      {
        path: "how-it-works",
        element: (
          <Suspense>
            <HowWorksPage />
          </Suspense>
        ),
        loader: () => import("./pages/HowWorks"),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
