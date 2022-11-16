import Layout from "../components/layouts/Layout";
import MainNavigation from "../components/layouts/MainNavigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MainNavigation />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
