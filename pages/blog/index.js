import BlogDescription from "../../components/Blog/BlogDescription";
import BlogList from "../../components/Blog/BlogList";
import classes from "./projects.module.css";
import style from "../../components/Blog/Blog.module.css";
import Form from "../../components/Form/Form";
import HeroTitle from "../../components/UI/HeroTitle";
import HeroDesc from "../../components/UI/HeroDesc";

const BlogPage = () => {
  return (
    <>
      <div className={classes.center}>
        <HeroTitle>Blog</HeroTitle>
        <HeroDesc>
          <BlogDescription />
        </HeroDesc>
      </div>
      <BlogList />
      {/* <Form /> */}
    </>
  );
};

export default BlogPage;
