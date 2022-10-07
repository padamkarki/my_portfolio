import { Fragment } from "react";
import Introduction from "../components/Introduction";
import Reviews from "../components/Reviews";
import Work from "../components/Work";
import Form from "../components/Form";

const HomePage = () => {
  return (
    <Fragment>
      <Introduction />
      <Work />
      <Reviews />
      <Form />
    </Fragment>
  );
};

export default HomePage;
