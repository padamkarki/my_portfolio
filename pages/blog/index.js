import BlogDescription from "../../components/Blog/BlogDescription";
import BlogList from "../../components/Blog/BlogList";
import classes from "./projects.module.css";
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
    </>
  );
};

export default BlogPage;
