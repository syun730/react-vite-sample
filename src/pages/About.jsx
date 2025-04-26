import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>会社概要 | 会社名</title>
        <meta name="description" content="こちらは会社概要ページです。" />
      </Helmet>
      <Header />
      <main>
        <h2>会社概要</h2>
        <p>会社名は2000年に設立され、技術と誠実を大切にしています。</p>
      </main>
      <Footer />
    </>
  );
};

export default About;
