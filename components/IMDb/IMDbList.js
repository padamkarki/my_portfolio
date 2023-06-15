import IMDbItem from "./IMDbItem";
import Link from "next/link";
import classes from "./IMDb.module.css";
import { imdbs } from "../IMDb/imdbData";

const IMDbList = () => {
  return (
    <>
      <div className={classes.imdb_container}>
        {imdbs.map((imdb) => (
          <IMDbItem
            key={imdb.id}
            id={imdb.id}
            img={imdb.img}
            imgAlt={imdb.imgAlt}
            imgInfo={imdb.imgInfo}
            author={imdb.role}
            date={imdb.dept}
          />
        ))}
      </div>
      <div className={classes.button}>
        <Link href="https://www.imdb.com/name/nm10526703/">
          <a
            className={`${classes.btn} ${classes["btn-4"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit IMDb
          </a>
        </Link>
      </div>
    </>
  );
};

export default IMDbList;
