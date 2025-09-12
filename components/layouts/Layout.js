import classes from "./Layout.module.css";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="/my_portfolio/favicon.ico" />
      </Head>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
