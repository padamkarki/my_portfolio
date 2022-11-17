import { Fragment } from "react";
import Introduction from "../components/Intro/Introduction";
import Reviews from "../components/Reviews/Reviews";
import Work from "../components/Work/Work";
import Form from "../components/Form/Form";
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
