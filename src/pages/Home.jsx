import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [axiosPosts, setAxiosPosts] = useState([]);

  useEffect(() => {
    // ページ読み込み時にAPI呼び出し！
    // fetch版
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("エラーが発生しました", error));

    // axios版
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setAxiosPosts(res.data))
      .catch((error) => console.error("axiosエラー:", error));
  }, []); // ← 空配列は「初回レンダリング時だけ動く」という意味

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

        <section>
          <h3>fetchで取得した記事一覧</h3>

          <ul>
            {posts.slice(0, 5).map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>axiosで取得した記事一覧</h3>

          <ul>
            {axiosPosts.slice(0, 5).map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
