import Link from "next/link";

const Index = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    padding: "1rem"

  };
  return (
    <div style={styles}>
        <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </div>
  );
};

export default Index;
