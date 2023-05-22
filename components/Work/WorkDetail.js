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
        <div className={classes.description_space}>
          <p className={classes.description}>{props.description}</p>
        </div>

        <Link href={props.link}>
          <a target="_blank" rel="noopener noreferrer" className={classes.img}>
            <Image
              priority={true}
              src={props.img}
              alt={props.imgAlt}
              width="1024"
              height="485"
            />
          </a>
        </Link>

        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button>Visit Website</Button>
        </a>
        <div className={classes.description_margin}>
          <p className={classes.description}>
            <b>Instructions:</b> {props.instruction}
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
