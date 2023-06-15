import Image from "next/future/image";
import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./IMDbItem.module.css";

const IMDbItem = (props) => {
  const router = useRouter();

  function showDetailHandler() {
    // router.push("/blog/");
    window.open("https://www.imdb.com/name/nm10526703/", "_blank");
  }
  return (
    <>
      <Card className={classes.card}>
        <div onClick={showDetailHandler}>
          <div className={classes.img_size}>
            <Image
              priority={true}
              className={classes.imdb_img}
              src={props.img}
              alt={props.imgAlt}
              // height={400}
            ></Image>
          </div>
        </div>
        <div className={classes.imdb_container}>
          {/* <Link href={props.url}>
            <a
              className={`${classes.btn} ${classes["btn-4"]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the video
            </a>
          </Link> */}
          {/* <br /> */}
          <div className={classes.imdb_title}>
            <button
              onClick={showDetailHandler}
              className={classes.imdb_card_title}
            >
              {props.imgInfo.length > 70
                ? `${props.imgInfo.substring(0, 70)}...`
                : props.imgInfo}
            </button>
          </div>
          {/* <p>
            {props.description.length > 115
              ? `${props.description.substring(0, 115)}...`
              : props.description}
          </p> */}
          <div className={classes.imdb_role}>Digital Artist</div>
          <div className={classes.imdb_dept}>Visual Effects</div>
        </div>
      </Card>
    </>
  );
};
export default IMDbItem;
