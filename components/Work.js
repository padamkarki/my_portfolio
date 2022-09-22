import Link from "next/link";
import Image from "next/future/image";
import Card from "./UI/Card";
import padam from "../assets/padam.png";
import classes from "./Work.module.css";

const Work = () => {
  return (
    <div>
      <h2>Latest Works</h2>
      <p>
        I show only my best works built completely with passion, simplicity, and
        creativity!
      </p>
      <Card>
        <div className={classes.container}>
          <Image src={padam} alt="Padam" width={300} height={400}></Image>
          <div className={classes.overlay}>1st Work</div>
        </div>
      </Card>
    </div>
  );
};

export default Work;
