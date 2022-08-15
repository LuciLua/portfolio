import styles from "./index.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>LuciLua@2021</p>
      <br />
      <div className={styles.icosFooter}>
        <div className={styles.ico}>
          <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua">
            <Image
              src="/github.svg"
              alt="GitHub"
              title="GitHub"
              layout="fill"
            />
          </a>
        </div>
        <div className={styles.ico}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"
          >
            <Image
              src="/linkedin.svg"
              alt="Linkedin"
              title="Linkedin"
              layout="fill"
            />
          </a>
        </div>
        <div className={styles.ico}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://br.pinterest.com/lucilua81"
          >
            <Image
              src="/pinterest.svg"
              alt="Pinterest"
              title="Pinterest"
              layout="fill"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
