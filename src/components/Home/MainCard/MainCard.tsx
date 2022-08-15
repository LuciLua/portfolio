import Image from "next/image";
import styles from "./MainCard.module.scss";

function MainCard() {
  return (
    <div className={styles.containerMainCard}>
      <div className={styles.cardWrap}>
        <br />
        <div className={styles.img}>
          <Image
            width={100}
            height={100}
            layout="responsive"
            src="/luci.webp"
            alt="myface"
          />
        </div>
        <div className={styles.icons}>
          <div className={styles.ico}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/LuciLua"
            >
              <Image
                height={60}
                width={60}
                layout="responsive"
                src="/github.svg"
                alt="GitHub"
                title="GitHub"
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
                height={60}
                width={60}
                title="Linkedin"
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
                height={60}
                width={60}
                src="/pinterest.svg"
                alt="Pinterest"
                title="Pinterest"
              />
            </a>
          </div>
        </div>
        <p>Artista e Programadora</p>
        <div className={styles.aboutContact}>
          <a href="./about">
            <button
              id="cardAbout"
              className={styles.cardAbout}
              title="About Me"
            >
              About me
            </button>
          </a>
          <a href="./contact">
            <button
              id="cardContact"
              className={styles.cardContact}
              title="Contact Me"
            >
              Contact me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
