import BlogItem from "./BlogItem";
import { blogs } from "./blogData";
import classes from "./Blog.module.css";

const BlogList = (props) => {
  return (
    <>
      <div className={classes.blog_container}>
        <BlogItem
          img={blogs[0].img}
          imgAlt={blogs[0].imgAlt}
          imgInfo={blogs[0].imgInfo}
          description={blogs[0].description}
          author={blogs[0].author}
          date={blogs[0].date}
        ></BlogItem>
        <BlogItem
          img={blogs[1].img}
          imgAlt={blogs[1].imgAlt}
          imgInfo={blogs[1].imgInfo}
          description={blogs[0].description}
          author={blogs[0].author}
          date={blogs[0].date}
        ></BlogItem>
        <BlogItem
          img={blogs[2].img}
          imgAlt={blogs[2].imgAlt}
          imgInfo={blogs[2].imgInfo}
          description={blogs[0].description}
          author={blogs[0].author}
          date={blogs[0].date}
        ></BlogItem>
        <BlogItem
          img={blogs[3].img}
          imgAlt={blogs[3].imgAlt}
          imgInfo={blogs[3].imgInfo}
          description={blogs[0].description}
          author={blogs[0].author}
          date={blogs[0].date}
        ></BlogItem>
        <BlogItem
          img={blogs[4].img}
          imgAlt={blogs[4].imgAlt}
          imgInfo={blogs[4].imgInfo}
          description={blogs[0].description}
          author={blogs[0].author}
          date={blogs[0].date}
        ></BlogItem>
        <BlogItem
          img={blogs[5].img}
          imgAlt={blogs[5].imgAlt}
          imgInfo={blogs[5].imgInfo}
          description={blogs[0].description}
          author={blogs[0].author}
          date={blogs[0].date}
        ></BlogItem>
      </div>
    </>
  );
};

export default BlogList;
