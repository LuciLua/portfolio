import Image from 'next/image'
import styles from '../styles/home/index.module.scss'
import Head from 'next/head';
import Card from '../components/ProjectCards/Card';

function Home() {

  function next() {
    // document.getElementById('sectionProjects').scrollLeft += 390;
  };

  function prev() {
    // document.getElementById('sectionProjects').scrollLeft -= 390;
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
        <div className={styles.galery}>
          <div className={styles.cards}>
            <br />
            <div className={styles.img}>
              <Image width={100} height={100} layout='responsive' src="/luci.webp" alt="myface" />
            </div>
            <div className={styles.icons}>
              <div className={styles.ico}>
                <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua">
                  <Image height={60} width={60} layout='responsive' src="/github.svg" alt="GitHub"
                    title="GitHub" /></a>
              </div>
              <div className={styles.ico}>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"><Image
                  src="/linkedin.svg" alt="Linkedi
                  n" height={60} width={60} title="Linkedin" /></a>
              </div>
              <div className={styles.ico}>
                <a target="_blank" rel="noreferrer" href="https://br.pinterest.com/lucilua81">
                  <Image height={60} width={60} src="/pinterest.svg"
                    alt="Pinterest" title="Pinterest" /></a>
              </div>
            </div>
            <p>Artista e Programadora</p>
            <div className={styles.aboutContact}>
              <a href="./about"><button id="cardAbout" className={styles.cardAbout} title="About Me">About me</button></a>
              <a href="./contact"><button id="cardContact" className={styles.cardContact} title="Contact Me">Contact me</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pages} id="paragraph">
        <div className={styles.journeyAndSkillsWrap}>
          <div className={styles.journeySection}>
            <h1>Journey</h1>
            <p>
              Comecei a programar mesmo em 2020, quando tive a
              oportunidade de estar fazendo a matéria Multimídia Instrumental
              dentro do curso de artes da UFJF, onde estudo até hoje.
              Logo após me apaixonar por isso, voltei a estudar python , minha primeira linguaguem
              de programação, além de continuar me aprofundando em desenvolvimento web, aprendendo
              NodeJS, NextJS entre outros. Uma das tecnologias que mais gostei e uso sempre que posso é o site da Vercel,
              onde faço deploy dos meus projetos para acesso público.

            </p>
          </div>
          <div className={styles.skillsContainer}>
            <h1>Skills</h1>
            <div className={styles.skillsItemContainer}>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/html.svg" alt="HTML" title="HTML" />
                <span>HTML</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/css.svg" alt="CSS" title="CSS" />
                <span>CSS</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/javascript.svg" alt="JavaScrip" title="JavaScrip" />
                <span>JavaScript</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/python.svg" alt="Python" title="Python" />
                <span>Python</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/typescript.png" alt="Typescript" title="Typescript" />
                <span>Typescript</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/vue.png" alt="VueJs" title="VueJs" />
                <span>VueJs</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/node.png" alt="NodeJs" title="NodeJs" />
                <span>NodeJs</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/react.png" alt="React" title="React" />
                <span>React</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/sass.png" alt="Sass" title="Sass" />
                <span>Sass</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/next.png" alt="NextJs" title="NextJs" />
                <span>NextJs</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/batch.png" alt="Batch Scripts" title="Batch Scripts" />
                <span>Batch Scripts</span>
              </div>
              <div className={styles.item}>
                <Image objectFit='contain' width={60} height={60} src="/mysql.png" alt="MySql" title="MySql" />
                <span>MySql</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.projetosP} ${styles.pages}`} id="projetos-p">
        <h2>Projetos em <span>destaque</span></h2>
        <div className={styles.btnNp}>
          <button
            // alt="Anterior"
            title="Anterior"
            onClick={prev}>left</button>
          <button
            // alt="Próxima"
            title="Próxima"
            onClick={next}>right</button>
        </div>
        <div className={styles.sectionProjects} id="sectionProjects">
          <div className={styles.projectCard}>
            <Card titleApp="Podcastr" descriptionApp="Aplicação desenvolvida com o framework Next.js" githubHref="https://github.com/LuciLua/NLW5-Podcastr" directLinkHrefApp="https://www.podcastr.ga/" shortTitle="Projeto Podcast" mainImgSrc="/proj/podcastr.webp" />
          </div>
          <div className={styles.projectCard}>
            <Card titleApp="Audiovisual | Neutrum" descriptionApp="Cenários e Edição da animação Neutrum" githubHref="/" directLinkHrefApp="https://www.youtube.com/watch?v=VrI2ILQvzAw" shortTitle="Projeto Neutrum" mainImgSrc="/proj/neutrum.webp" />
          </div>
          <div className={styles.projectCard}>
            <Card titleApp="Snake Game" descriptionApp="Jogo para navegador utilizando Javascript" githubHref="https://github.com/LuciLua/snakegame" directLinkHrefApp="https://www.gamesnake.tk/" shortTitle="Projeto Snake Game" mainImgSrc="/proj/snake.webp" />
          </div>
          <div className={styles.projectCard}>
            <Card titleApp="Editor Rich Text" descriptionApp="Editor de texto Rich Text para navegador" githubHref="https://github.com/LuciLua/RichTextEditor" directLinkHrefApp="https://rich-text-editor.vercel.app/" shortTitle="Projeto RichText Editor" mainImgSrc="/proj/rick.webp" />
          </div>
          <div className={styles.projectCard}>
            <Card titleApp="Calendário" descriptionApp="Aplicação em desenvolvimento utilizando o framework Next.js" githubHref="https://github.com/LuciLua/calendar" directLinkHrefApp="http://calendar-blond.vercel.app/" shortTitle="Projeto Calender" mainImgSrc="/proj/calender.webp" />
          </div>
          <div className={styles.projectCard}>
            <Card titleApp="Audiovisual | Moda" descriptionApp="Produção audiovisual de moda e ensaio fotográfico" githubHref={false} directLinkHrefApp="https://dialogosfuturismo1.wixsite.com/futurismo/video" shortTitle="Projeto Dialogos Entre Moda e Arte" mainImgSrc="/proj/dialogo.webp" />
          </div>
          <div className={styles.projectCard}>
            <Card titleApp="To Do List" descriptionApp="Lista ToDo" githubHref="https://github.com/LuciLua/todo" directLinkHrefApp="https://todo-lucilua.vercel.app/" shortTitle="To Do" mainImgSrc="/proj/todo.png" />
          </div>
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
