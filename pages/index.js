import { Fragment } from "react";
import Introduction from "../components/Introduction";
import Reviews from "../components/Reviews";
import Work from "../components/Work";

const HomePage = () => {
  return (
    <Fragment>
      <Introduction />
      <Work />
      <Reviews />
    </Fragment>
  );
};

export default HomePage;
