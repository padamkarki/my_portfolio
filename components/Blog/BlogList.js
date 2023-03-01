import BlogItem from "./BlogItem";
import Link from "next/link";
import classes from "./Blog.module.css";
import { blogs } from "../../components/Blog/blogData";

const BlogList = () => {
  // const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  // const showOnlyTwoItems = screenWidth <= 640;

  // const filteredBlogs = showOnlyTwoItems
  //   ? blogs.slice(0, 2)
  //   : blogs.slice(0, 3);

  return (
    <>
      <div className={classes.blog_container}>
        {blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            img={blog.img}
            imgAlt={blog.imgAlt}
            imgInfo={blog.imgInfo}
            description={blog.description}
            author={blog.author}
            date={blog.date}
            url={blog.url}
            work={blog.work}
            embed={blog.embed}
          />
        ))}
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
