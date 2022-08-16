import styles from "../styles/about/index.module.scss";
import Image from "next/image";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Luci Lua | About</title>
      </Head>
      <div
        className={`pages ${styles.aboutSubpagina}`}
        id="about-subpagina"
      >
        <div className={styles.titleAboutContainer}>
          <h2>About me</h2>
        </div>

        <div className={styles.contentAbout}>
          <div
            className={styles.photo}
            // alt="Luci"
            title="Luci"
          >
            <Image
              src="/l.jpg"
              alt="Luci"
              layout="fill"
              quality={50}
              priority
            />
          </div>
          <div className={styles.ballName}>
            <h1>Luci.</h1>
          </div>
          <p>
            Hi, I&apos;m Luci.
            I grew up in front of a computer and I really love it, programming has always been something that caught my attention, movies that showed hackers made my eyes shine and today I seek to develop applications and tools to make people&apos;s lives easier.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
