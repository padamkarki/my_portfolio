import classes from "./Layout.module.css";
import Footer from "./Footer";
import Head from "next/head";
import favicon from "../../public/favicon_io/favicon.ico";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
