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
      <Card>
        <button onClick={showDetailHandler} className={classes.card_btn}>
          <Card className={classes.size}>
            <Image
              className={classes.blog_img}
              src={props.img}
              alt={props.imgAlt}
              width={380}
              height={250}
            ></Image>
          </Card>
        </button>
        <Card className={classes.blog_container}>
          <Link href="/">
            <a className={`${classes.btn} ${classes["btn-4"]}`}>
              Visit the channel
            </a>
          </Link>
          <h3>
            {props.imgInfo.length > 80
              ? `${props.imgInfo.substring(0, 80)}...`
              : props.imgInfo}
          </h3>
          <p>
            {props.description.length > 120
              ? `${props.description.substring(0, 120)}...`
              : props.description}
          </p>
          <div>{props.author}</div>
          <div>{props.date}</div>
        </Card>
      </Card>
    </>
  );
};
export default BlogItem;
