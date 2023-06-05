import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
// import NotificationsPage from "./pages/Notifications";
// import SettingsPage from "./pages/Settings";
import ErrorPage from "./pages/Error";
import { Suspense, lazy } from "react";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
