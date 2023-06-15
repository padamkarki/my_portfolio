import Logos from "./Logos";

import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.body}>
      {/* <div className={classes.logos}>
        <Logos />
      </div> */}
      <div className={classes.footer}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/imdb">IMDb</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className={classes.copyright}>
        <p>
          <span className={classes.year}>2023 </span> © Padam Karki.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
