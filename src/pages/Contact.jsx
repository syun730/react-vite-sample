import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>お問い合わせ | 会社名</title>
        <meta name="description" content="こちらはお問い合わせページです。" />
      </Helmet>
      <Header />
      <main>
        <h2>お問い合わせ</h2>
        <p>ご不明点やご依頼はこちらのフォームからお問い合わせください。</p>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
