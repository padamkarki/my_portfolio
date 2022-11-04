import { Fragment } from "react";
import classes from "./Blog.module.css";
import BlogTitle from "./BlogTitle";
import BlogDescription from "./BlogDescription";
import BlogList from "./BlogList";

const Blog = () => {
  return (
    <Fragment>
      <section className={classes.body}>
        <BlogTitle />
        <div className={classes.h2_hero_desc}>
          <BlogDescription />
        </div>
        <BlogList />
      </section>
    </Fragment>
  );
};

export default Blog;
