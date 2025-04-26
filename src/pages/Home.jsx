import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ホーム | 会社名</title>
        <meta name="description" content="こちらはホームページです。" />
      </Helmet>
      <Header />
      <main>
        <h2>ホーム</h2>
        <p>ここはコーポレートサイトのトップページです。</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
