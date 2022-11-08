import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  const router = useRouter();

  // function showDetailHandler() {
  //   router.push("https://youtu.be/yfpL1xYVpM4", "_blank");
  // }
  return (
    <>
      <Card className={classes.card}>
        <Link
          href={props.url}
          // onClick={showDetailHandler}
          // className={classes.card_btn}
        >
          <a target="_blank" rel="noopener noreferrer">
            <div className={classes.img_size}>
              <Image
                className={classes.blog_img}
                src={props.img}
                alt={props.imgAlt}
                width={400}
                height={250}
              ></Image>
            </div>
          </a>
        </Link>
        <div className={classes.blog_container}>
          <Link href={props.url}>
            <a
              className={`${classes.btn} ${classes["btn-4"]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the video
            </a>
          </Link>
          <br />
          <div className={classes.blog_title}>
            <Link href="/">
              <a>
                {props.imgInfo.length > 70
                  ? `${props.imgInfo.substring(0, 70)}...`
                  : props.imgInfo}
              </a>
            </Link>
          </div>
          <p>
            {props.description.length > 115
              ? `${props.description.substring(0, 115)}...`
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
