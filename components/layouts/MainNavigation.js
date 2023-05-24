import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logos from "./Logos";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const router = useRouter();
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [isNavopen, setIsNavopen] = useState(false);

  const handleNavOpen = () => {
    setIsNavopen(!isNavopen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsScreenSmall(false);
      } else {
        setIsScreenSmall(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsScreenSmall(!isScreenSmall);
  };

  return (
    <header>
      <div onClick={toggleNav} className={classes.hamburger}>
        {isScreenSmall && <MenuIcon />}
      </div>
      <nav className={isScreenSmall ? classes.navSmall : classes.nav}>
        {!isScreenSmall && ( // <-- Updated condition
          <ul className={classes.navlinks}>
            <div onClick={toggleNav} className={classes.closeIcon}>
              <CloseIcon />
            </div>
            <li>
              <Link href="/">
                <a
                  className={router.pathname == "/" ? classes.active : ""}
                  onClick={handleNavOpen}
                >
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
                  onClick={handleNavOpen}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={router.pathname == "/blog" ? classes.active : ""}
                  onClick={handleNavOpen}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={router.pathname == "/about" ? classes.active : ""}
                  onClick={handleNavOpen}
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        )}
        <Logos />
      </nav>
    </header>
  );
};

export default MainNavigation;
