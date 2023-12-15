import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Link from "next/link";
import classes from "./Blog.module.css";
// import { blogs } from "../../components/Blog/blogData";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        "https://my-portfolio-padam-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json"
      );
      const responseData = await response.json();
      const loadedBlogs = [];

      Object.entries(responseData).forEach(([key, value]) => {
        loadedBlogs.push({
          id: key,
          img: value.img,
          imgAlt: value.imgAlt,
          imgInfo: value.imgInfo,
          description: value.description,
          author: value.author,
          date: value.date,
          url: value.url,
          work: value.work,
          embed: value.embed,
        });
      });
      setBlogs(loadedBlogs);
    };
    fetchBlogs();
  }, []);

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
