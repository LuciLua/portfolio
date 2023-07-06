import Image from 'next/image'
import styles from '../styles/home/index.module.scss'
import Head from 'next/head';
import MainCard from '../components/maincard/MainCard';

import Skillcardcontainer from '../components/skillcardcontainer/Skillcardcontainer';

import Journeycardcontainer from '../components/journeycardcontainer/Journeycardcontainer';

import Maincardprojectscontainer from '../components/maincardprojectscontainer/Maincardprojectscontainer';

import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

function Home() {
  function next() {
    document.getElementById('sectionProjects').scrollLeft += 390;
  };

  function prev() {
    document.getElementById('sectionProjects').scrollLeft -= 390;
  };

  return (
    <>
      <div className='pages'>

        <Head>
          <title>Luci Lua | Portfólio</title>
        </Head>
        <div className={styles.initMask}></div>
        <div className={styles.init} spellCheck="false">
          <div className={styles.title}>
            <h1><span>Portfólio</span>.Luci</h1>
            <h2>Im developer. Im Designer</h2>
            <div className={styles.gradient}></div>
            <a href="#cardme" id='start'>Explore</a>
            <a target={'_blank'} href="https://lucilua-film-portfolio.vercel.app/projetos" rel="noreferrer">discover my audiovisual works
            </a>
          </div>
        </div>
        <MainCard id='cardme' />
        <div className={styles.journeyAndSkillsWrap}>
          <div className={styles.journeySection}>
            <h1>Journey</h1>
            <Journeycardcontainer />
          </div>
          <div className={styles.skillsSection}>
            <h1>Skills</h1>
            <Skillcardcontainer />
          </div>
        </div>
        <div className='line'></div>
        <div className={`${styles.mainProjectsSection}`} id="projetosP">
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
            <Link href="./projects">
              <a>
                <button
                  // alt="Mais projetos" 
                  title="Mais projetos">Mais projetos</button>
              </a>
            </Link>
          </div>
        </div>
        <br />
        <div className={'line'}></div>
        <div className={styles.artsSectionContainer}>
          <div className={styles.titleArt}>
            <h1>Arts.</h1>
          </div>
          <div className={styles.artsSectionContainerWrapTypes}>

            <div className={styles.typeArtCardContainer}>
              <Link href="./arts#b3d">
                <a
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
              </Link>
              <p className={styles.descriptionOfArtCardType}>3D Artes | Personagens, cenários, animações</p>
            </div>
            <div className={styles.typeArtCardContainer}>
              <Link href="./arts#b2d">
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
              </Link>
              <p className={styles.descriptionOfArtCardType}>2D Artes | Pinturas, Desenhos, Personagens</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
