import classes from "./Introduction.module.css";
import Link from "next/link";
import Image from "next/image";
import padam from "../assets/padam.png";

const Introduction = () => {
  return (
    <div className={classes.row}>
      <div className={classes.column_left}>
        <h1 className={classes.hero_title}>Hi there, I am Padam Karki</h1>
        <p className={classes.hero_desc}>
          <strong>Frontend Developer</strong> and{" "}
          <strong>Digital Artist</strong> from India. I love creating amazing
          visuals, Amazing websites as a Frontend Engineer and Amazing VFX as a
          VFX Artist. When I am not designing sites, I like to make videos,
          listen to songs and eat like a pro - foodie.
        </p>
        <Link href="/form">
          <a className={`${classes.btn} ${classes["btn-4"]}`}>Get in touch</a>
        </Link>
        <Link href="/projects">
          <a className={`${classes.btn} ${classes["btn-4"]}`}>See my work</a>
        </Link>
      </div>
      <div className={classes.column_right}>
        <div className={classes.img}>
          <Image
            src={padam}
            alt="Padam"
            layout="fixed"
            objectFit="cover"
            width="500"
            height="500"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
