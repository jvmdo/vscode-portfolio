import Link from "next/link";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>WEB</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h6 className={styles.bio}>Bem-vindo(a), eu me chamo</h6>
            <h1 className={styles.name}>João Oliveira</h1>
            <Link href="/projects">
              <button className={styles.button}>Ver projetos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contate-me</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
