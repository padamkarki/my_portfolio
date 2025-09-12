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
        {/* <p className={classes.hero_desc}>
          <strong>Frontend Developer</strong> and{" "}
          <strong>Digital Artist</strong>, blending creativity and code to
          create captivating user experiences. With an eye for aesthetics and a
          passion for problem-solving, I excel in crafting visually stunning
          websites that seamlessly blend form and function.
        </p> */}
        <p className={classes.hero_desc}>
          Welcome to my portfolio! I’m a{" "}
          <strong>Video editor and VFX artist</strong> with a creative edge from
          my VFX background, skilled in storytelling, cinematic editing, and
          visual effects.
          <p>
            I’m also a <strong>Front-end Developer</strong>, proficient in
            React.js, Next.js, and modern web design, and certified with Meta
            Front-End Developer and ITPEC-FE. I create compelling videos and
            build interactive web experiences, combining creativity with
            technical skill
          </p>
          {/* technical skill. Welcome to my portfolio! I am a web developer with a
          creative edge from my background in visual effects, passionate about
          crafting dynamic, user-friendly applications. Skilled in{" "}
          <strong>React.js, Next.js, JavaScript, and Python</strong>{" "}
          <p>
            I hold the <strong>ITPEC</strong> - Fundamental Information
            Technology Engineer certification and Meta Front-End Developer
            Professional Certificate, showcasing my expertise in IT and modern
            web development
          </p>
          <p>
            From building full-stack movie databases to interactive restaurant
            apps, my projects highlight my skills in RESTful APIs, state
            management, and real-time updates. Lets connect and create something
            extraordinary together!
          </p> */}
        </p>
        <a
          className={`${classes.btn} ${classes["btn-4"]}`}
          target="_blank"
          href="https://in.linkedin.com/in/padam-karki-a7258a99"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
        {/* <Link href="/projects">
          <a className={`${classes.btn} ${classes["btn-4"]}`}>See my work</a>
        </Link> */}
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
