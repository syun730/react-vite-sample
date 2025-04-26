const Header = () => {
  return (
    <header style={{ backgroundColor: "#eee", padding: "1rem" }}>
      <h1>会社名</h1>
      <nav>
        <a href="/">ホーム</a> | <a href="/about">会社概要</a> |{" "}
        <a href="/contact">お問い合わせ</a>
      </nav>
    </header>
  );
};

export default Header;
