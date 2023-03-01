import BlogItem from "./BlogItem";
import classes from "./Blog.module.css";
import { blogs } from "../../components/Blog/blogData";

const BlogListHome = () => {
  return (
    <>
      <div className={classes.blog_container}>
        {blogs.slice(0, 3).map((blog) => (
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
    </>
  );
};

export default BlogListHome;
