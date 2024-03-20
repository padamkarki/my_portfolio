import About from "../../components/About/About";
import Form from "../../components/Form/Form";
import Head from "next/head";
const AboutPage = () => {
  const desc =
    "Welcome to my About page! Here, you'll get to know the person behind the scenes. Discover my journey, passions, and vision. Let's connect and embark on this creative adventure together.";
  return (
    <>
      <Head>
        <title>About - Padam Karki</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="About - Padam Karki" />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://padamkarki.github.io/my_portfolio/about"
        />
      </Head>
      <About />
      <Form />
    </>
  );
};

export default AboutPage;
