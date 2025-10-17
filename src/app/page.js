import Image from "next/image";
import styles from "./page.module.css";
import esulogo from "../../public/esu1.jpeg";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src={esulogo} width={800} height={500} alt={"esu1"} />
        <h2>Coming Soon</h2>
        <h1>Eduardo Strauch Art</h1>
        <Button />
        <h3>Site Under construction</h3>
        <h5>Contact: </h5>
        <h5>pstrauch@gmail.com</h5>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
