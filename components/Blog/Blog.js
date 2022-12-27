import Link from "next/link";

import BlogTitle from "./BlogTitle";
import BlogDescription from "./BlogDescription";
import BlogListHome from "./BlogListHome";

import classes from "../Work/Work.module.css";
import style from "../Blog/Blog.module.css";

const Blog = () => {
  return (
    <>
      <section className={classes.body}>
        <BlogTitle />
        <div className={classes.button}></div>
        <div className={classes.h2_hero_desc}>
          <BlogDescription />
        </div>
        <div className={classes.limit}>
          <BlogListHome />
        </div>
        <div className={style.btn_center}>
          <Link href="/blog">
            <a className={`${style.btn} ${style["btn-4"]}`}>View All</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
