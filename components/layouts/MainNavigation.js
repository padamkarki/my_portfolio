import Logos from "./Logos";

import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";

import classes from "./MainNavigation.module.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

function MainNavigation() {
  const router = useRouter();
  return (
    <header>
      <nav className={classes.nav}>
        {/* <div className={classes.logo}>
          <Link href="/">Portfolio</Link>
          TODO: Fix the layout; Temporarily removed the logo as it was overlapping on Home
        </div> */}
        <div>
          <ul className={classes.navlinks}>
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ? classes.active : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a
                  className={
                    router.pathname == "/projects" ? classes.active : ""
                  }
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={router.pathname == "/blog" ? classes.active : ""}>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={router.pathname == "/about" ? classes.active : ""}
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Logos />
      </nav>
    </header>
  );
}

export default MainNavigation;
