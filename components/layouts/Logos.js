import Image from "next/future/image";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

import classes from "./MainNavigation.module.css";

const Logos = () => {
  return (
    <>
      <div>
        <ul className={classes.naviconlinks}>
          <li className={classes.icon}>
            <a
              target="_blank"
              href="https://github.com/padamkarki"
              rel="noopener noreferrer"
            >
              <Image src={github} width={20} height={20} alt="github icon" />
            </a>
          </li>
          <li className={classes.icon}>
            <a
              target="_blank"
              href="https://in.linkedin.com/in/padam-karki-a7258a99"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedin}
                width={20}
                height={20}
                alt="linkedin icon"
              />
            </a>
          </li>
          <li className={classes.icon}>
            <a
              target="_blank"
              href="https://www.instagram.com/padamkarki23/"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                width={20}
                height={20}
                alt="instagram icon"
              />
            </a>
          </li>
          <li className={classes.icon}>
            <a
              target="_blank"
              href="https://www.youtube.com/KKBPictures"
              rel="noopener noreferrer"
            >
              <Image src={youtube} width={20} height={20} alt="youtube icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Logos;
