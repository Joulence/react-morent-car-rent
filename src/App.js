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
const FeaturedPage = lazy(() => import("./pages/Featured"));
const PartnershipPage = lazy(() => import("./pages/Partnership"));
const BusinessPage = lazy(() => import("./pages/Business"));
const EventPage = lazy(() => import("./pages/Event"));
const BlogPage = lazy(() => import("./pages/Blog"));
const PodcastPage = lazy(() => import("./pages/Podcast"));
const InvitePage = lazy(() => import("./pages/Invite"));

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
      {
        path: "featured",
        element: (
          <Suspense>
            <FeaturedPage />
          </Suspense>
        ),
        loader: () => import("./pages/Featured"),
      },
      {
        path: "partnership",
        element: (
          <Suspense>
            <PartnershipPage />
          </Suspense>
        ),
        loader: () => import("./pages/Partnership"),
      },
      {
        path: "business",
        element: (
          <Suspense>
            <BusinessPage />
          </Suspense>
        ),
        loader: () => import("./pages/Business"),
      },
      {
        path: "event",
        element: (
          <Suspense>
            <EventPage />
          </Suspense>
        ),
        loader: () => import("./pages/Event"),
      },
      {
        path: "blog",
        element: (
          <Suspense>
            <BlogPage />
          </Suspense>
        ),
        loader: () => import("./pages/Blog"),
      },
      {
        path: "podcast",
        element: (
          <Suspense>
            <PodcastPage />
          </Suspense>
        ),
        loader: () => import("./pages/Podcast"),
      },
      {
        path: "invite",
        element: (
          <Suspense>
            <InvitePage />
          </Suspense>
        ),
        loader: () => import("./pages/Invite"),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
