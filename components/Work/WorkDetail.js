import classes from "./WorkDetail.module.css";

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
        <iframe
          className={classes.video}
          width="1120"
          height="630"
          src={props.embed}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={classes.description_space}>
          <p className={classes.description}>{props.description}...</p>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
