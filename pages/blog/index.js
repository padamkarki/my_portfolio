import BlogDescription from "../../components/Blog/BlogDescription";
import BlogList from "../../components/Blog/BlogList";
import classes from "./projects.module.css";
import style from "../../components/Blog/Blog.module.css";
import Form from "../../components/Form";

const BlogPage = () => {
  return (
    <>
      <div className={classes.center}>
        <h1 className={classes.hero_title}>My Blogs</h1>
        <div className={style.h2_hero_desc2}>
          <BlogDescription />
        </div>
      </div>
      <BlogList />
      <Form />
    </>
  );
};

export default BlogPage;
