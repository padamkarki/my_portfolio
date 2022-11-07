import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  const router = useRouter();

  function showDetailHandler() {
    router.push("https://youtu.be/yfpL1xYVpM4");
  }
  return (
    <>
      <Card className={classes.card}>
        <button onClick={showDetailHandler} className={classes.card_btn}>
          <div className={classes.img_size}>
            <Image
              className={classes.blog_img}
              src={props.img}
              alt={props.imgAlt}
              width={400}
              height={250}
            ></Image>
          </div>
        </button>
        <div className={classes.blog_container}>
          <Link href="https://youtu.be/yfpL1xYVpM4">
            <a className={`${classes.btn} ${classes["btn-4"]}`} target="_blank">
              Visit the video
            </a>
          </Link>
          <br />
          <div className={classes.blog_title}>
            <Link href="/">
              <a>
                {props.imgInfo.length > 80
                  ? `${props.imgInfo.substring(0, 80)}...`
                  : props.imgInfo}
              </a>
            </Link>
          </div>
          <p>
            {props.description.length > 120
              ? `${props.description.substring(0, 120)}...`
              : props.description}
          </p>
          <div className={classes.blog_author}>{props.author}</div>
          <div className={classes.blog_date}>{props.date}</div>
        </div>
      </Card>
    </>
  );
};
export default BlogItem;
