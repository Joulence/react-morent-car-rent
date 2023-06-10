import { Fragment } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const ErrorPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          <section>
            <h2>Ooops.... Error occured!</h2>
            <p>
              The page you're looking for may have been moved, deleted, or it
              could simply be a mistyped URL.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
