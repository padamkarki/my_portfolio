import Link from "next/link";
import BlogTitle from "./BlogTitle";
import BlogList from "./BlogList";
import BlogDescription from "./BlogDescription";
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
          <BlogList />
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
