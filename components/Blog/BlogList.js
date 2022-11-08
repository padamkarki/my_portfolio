import BlogItem from "./BlogItem";
import Link from "next/link";
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
          url={blogs[0].url}
        ></BlogItem>
        <BlogItem
          img={blogs[1].img}
          imgAlt={blogs[1].imgAlt}
          imgInfo={blogs[1].imgInfo}
          description={blogs[1].description}
          author={blogs[1].author}
          date={blogs[1].date}
          url={blogs[1].url}
        ></BlogItem>
        <BlogItem
          img={blogs[2].img}
          imgAlt={blogs[2].imgAlt}
          imgInfo={blogs[2].imgInfo}
          description={blogs[2].description}
          author={blogs[2].author}
          date={blogs[2].date}
          url={blogs[2].url}
        ></BlogItem>
        <BlogItem
          img={blogs[3].img}
          imgAlt={blogs[3].imgAlt}
          imgInfo={blogs[3].imgInfo}
          description={blogs[3].description}
          author={blogs[3].author}
          date={blogs[3].date}
          url={blogs[3].url}
        ></BlogItem>
        <BlogItem
          img={blogs[4].img}
          imgAlt={blogs[4].imgAlt}
          imgInfo={blogs[4].imgInfo}
          description={blogs[4].description}
          author={blogs[4].author}
          date={blogs[4].date}
          url={blogs[4].url}
        ></BlogItem>
        <BlogItem
          img={blogs[5].img}
          imgAlt={blogs[5].imgAlt}
          imgInfo={blogs[5].imgInfo}
          description={blogs[5].description}
          author={blogs[5].author}
          date={blogs[5].date}
          url={blogs[5].url}
        ></BlogItem>
      </div>
      <div className={classes.button}>
        <Link href="https://www.youtube.com/KKBPictures">
          <a
            className={`${classes.btn} ${classes["btn-4"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Channel
          </a>
        </Link>
      </div>
    </>
  );
};

export default BlogList;
