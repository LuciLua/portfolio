import styles from '../styles/about/index.module.scss'
import Image from 'next/image'
import Head from "next/head"

function About() {
  return (
    <>
      <Head>
        <title>Luci Lua | About</title>
      </Head>
      <div className={`${styles.pages} ${styles.aboutSubpagina}`} id="about-subpagina">
        <div className={styles.titleAboutContainer}>
          <h2>About me</h2>
        </div>

        <div className={styles.contentAbout}>
          <div
            className={styles.photo}
            // alt="Luci" 
            title="Luci">
            <Image src="/l.jpg" alt="Luci" layout='fill' quality={50} priority />
          </div>
          <div className={styles.ballName}>
            <h1>Luci.</h1>
          </div>
          <p>
            Olá! Sou Luci, estudante de artes da Universidade Federal de Juiz de Fora e estusiasta da tecnologia. Minha grande paixão é a novidade, a possibilidade de mudança e, para mim, mudar é
            o primeiro grande passo para evoluir. Atualmente tenho 19 anos e minha jornada na programação começou de fato à 1 ano atrás durante um longo período de férias, desde então aprendi diversas ferramentas e meios para levar aos outros algo legal para ver, interagir ou até mesmo aprender.
          </p>
        </div>
      </div>
    </>
  )
}

export default About