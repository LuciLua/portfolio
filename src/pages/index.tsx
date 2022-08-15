import Image from 'next/image'
import styles from '../styles/home/index.module.scss'
import Head from 'next/head';
import MainCard from '../components/maincard/MainCard';

import Skillcardcontainer from '../components/skillcardcontainer/Skillcardcontainer';

import Journeycardcontainer from '../components/journeycardcontainer/Journeycardcontainer';

import Maincardprojectscontainer from '../components/maincardprojectscontainer/Maincardprojectscontainer';

import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

function Home() {

  function next() {
    document.getElementById('sectionProjects').scrollLeft += 390;
  };

  function prev() {
    document.getElementById('sectionProjects').scrollLeft -= 390;
  };

  return (
    <>
      <Head>
        <title>Luci Lua | Portfólio</title>
      </Head>
      <div className={`${styles.pages} ${styles.init}`} id="init" spellCheck="false">
        <div className={styles.title}>
          <h1><span>Portfólio</span>.Luci</h1>
          <h2>Im developer. Im Designer</h2>
          <div className={styles.gradient}></div>
          <a href="#cardme"><button id="start">Explore</button></a>
        </div>
      </div>

      <div className={styles.pages} id="cardme">
        <MainCard />
      </div>


      <div className={styles.pages} id="paragraph">
        <div className={styles.journeyAndSkillsWrap}>
          <div className={styles.journeySection}>
            <h1>Journey</h1>
            <Journeycardcontainer />
          </div>
          <div className={styles.skillsContainer}>
            <h1>Skills</h1>
            <Skillcardcontainer />
          </div>
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={`${styles.mainProjectsSection} ${styles.pages}`} id="projetosP">
        <h2 className={styles.titleMainProjectsSection}>
          Projetos em <span className={styles.higthlight}>destaque</span>
        </h2>
        <div className={styles.btnCollectionForMoveCards}>
          <button
            // alt="Anterior"
            title="Anterior"
            onClick={prev}>
            <AiOutlineLeftCircle />
          </button>
          <button
            // alt="Próxima"
            title="Próxima"
            onClick={next}>
            <AiOutlineRightCircle />
          </button>
        </div>
        <div className={styles.sectionProjects} id="sectionProjects">
          <Maincardprojectscontainer />
        </div>
        <div className={styles.morePp}>
          <a href="./projects">
            <button
              // alt="Mais projetos" 
              title="Mais projetos">Mais projetos</button></a>
        </div>
      </div>

      <br />
      <div className={styles.line}></div>

      <div className={styles.titleArt}>
        <h1>Arts.</h1>
      </div>

      <div className={styles.artsSectionContainer}>
        <div className={styles.typeArtCardContainer}>
          <a
            href="./arts#b3d"
            // alt="Artes em 3D"
            title="Artes em 3D">
            <div className={styles.circleArtContainer}>
              <div className={styles.imgContainerArt2D}>
                <Image
                  layout='fill'
                  src="/cube.svg"
                  alt="Artes em 3D"
                  title="Artes em 3D" />
              </div>
            </div>
          </a>
          <p className={styles.descriptionOfArtCardType}>3D Artes | Personagens, cenários, animações</p>
        </div>
        <div className={styles.typeArtCardContainer}>
          <a
            href="./arts#b2d"
            // alt="Artes em 2D"
            title="Artes em 2D">
            <div className={styles.circleArtContainer}>
              <div className={styles.imgContainerArt3D}>
                <Image
                  layout='fill'
                  src="/galery.svg"
                  alt="Artes em 2D"
                  title="Artes em 2D" />
              </div>
            </div>
          </a>
          <p className={styles.descriptionOfArtCardType}>2D Artes | Pinturas, Desenhos, Personagens</p>
        </div>
      </div>
    </>
  )
}

export default Home
