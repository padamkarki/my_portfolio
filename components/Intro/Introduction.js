import classes from "./Introduction.module.css";
import Link from "next/link";
import Image from "next/future/image";
// import padam from "../../assets/padam.png";
import padam1 from "../../assets/padam.jpg";

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
        <a
          className={`${classes.btn} ${classes["btn-4"]}`}
          target="_blank"
          href="https://in.linkedin.com/in/padam-karki-a7258a99"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
        <Link href="/projects">
          <a className={`${classes.btn} ${classes["btn-4"]}`}>See my work</a>
        </Link>
      </div>
      <div className={classes.column_right}>
        <Image
          className={classes.img}
          src={padam1}
          alt="Padam"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
};

export default Introduction;
