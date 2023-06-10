import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Fragment } from "react";
import ScrollToTop from "../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
