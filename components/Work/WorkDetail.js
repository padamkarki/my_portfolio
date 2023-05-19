import Image from "next/image";
import classes from "./WorkDetail.module.css";
import Link from "next/link";
import Button from "../UI/Button";

const WorkDetail = (props) => {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.hero_title_space}>
          <h1 className={classes.hero_title}>
            {props.imgInfo?.length > 42
              ? `${props.imgInfo?.substring(0, 42)}...`
              : props.imgInfo}
          </h1>
          <p className={classes.hero_title_desc}>{props.work}</p>
        </div>
        <Link href={props.link}>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              className={classes.work_img}
              priority={true}
              src={props.img}
              alt={props.imgAlt}
              width="1280"
              height="720"
            />
          </a>
        </Link>
        {/* <iframe
          className={classes.video}
          width="1120"
          height="630"
          src={props.embed}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button>Visit Website</Button>
        </a>
        <div className={classes.description_space}>
          <p className={classes.description}>{props.description}...</p>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
