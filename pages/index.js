import { Fragment } from "react";
import Introduction from "../components/Introduction";
import Reviews from "../components/Reviews";
import Work from "../components/Work";
import Form from "../components/Form";
import Blog from "../components/Blog/Blog";

const HomePage = () => {
  return (
    <Fragment>
      <Introduction />
      <Work />
      <Reviews />
      <Blog />
      <Form />
    </Fragment>
  );
};

export default HomePage;
