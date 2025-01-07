import Image from "next/future/image";
import Link from "next/link";

import padam from "../../assets/padam_about.jpg";
import classes from "./About.module.css";
import HeroTitle from "../UI/HeroTitle";

const About = () => {
  return (
    <>
      <section className={classes.about_body}>
        <HeroTitle className={classes.about_heading}>About</HeroTitle>

        <p className={`${classes.about_text} ${classes.bold}`}>
          Front-End Developer | Digital Artist
        </p>
        <div className={classes.about_text}>
          <div>
            Welcome! I’m a web developer with a background in visual effects,
            passionate about crafting modern, user-friendly applications.
            Skilled in React.js, Next.js, and Python, I’m ITPEC and
            Meta-certified. Explore my projects, from full-stack apps to dynamic
            SPAs
          </div>
          <ul>
            <li>
              <div className={classes.bold}>
                <Link href="https://github.com/padamkarki/food_app">
                  Github
                </Link>
              </div>
              Designed and built dynamic web application. Technology Stack:
              React.js, Next.js JavaScript, HTML, CSS, Firebase Realtime
              Database
            </li>
            <br />

            <li>
              <div className={classes.bold}>
                <Link href="https://www.imdb.com/name/nm10526703/">IMDb</Link>
              </div>
              Worked on various feature films as Digital Artist including Oscar
              Winning 1917 (2019) for Visual Effects, Worked with MPC Film on
              Top Gun: Maverick (2022), Prehistoric Planet (2022), 1917 (2019),
              Aquaman (2018), X-Men: Dark Phoenix (2019), Underwater (2020), The
              Call of the Wild (2020), Sonic the Hedgehog (2020), Maleficent:
              Mistress of Evil (2019) and more. Also worked with Prime Focus for
              Stereo(3D) Conversion for feature films like Wonder Woman (2017),
              Kong: Skull Island (2017) and more
            </li>
          </ul>
        </div>
        <div className={classes.container}>
          <Image
            className={classes.about_image}
            src={padam}
            alt="Padam"
            width={1152}
            height={648}
          ></Image>
        </div>
      </section>
    </>
  );
};

export default About;
