import Image from 'next/image'
import styles from '../styles/home/index.module.scss'
import classNames from 'classnames'
import Head from 'next/head';

function Home() {

function next(){
    document.getElementById('quad').scrollLeft += 390;
};

function prev(){
    document.getElementById('quad').scrollLeft -= 390;
};

  return (
    <>
    <Head>
      <title>Luci Lua | Portfólio</title>
    </Head>
      <div className={classNames(styles.pages, styles.init)} id="init" spellCheck="false">
        <div className={styles.title}>
          <h1><span>Portfólio</span>.Luci</h1>
          <h2>I'm developer. I'm Designer</h2>
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
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuciLua">
                  <Image height={60} width={60} layout='responsive' src="/github.svg" alt="GitHub"
                  title="GitHub" /></a>
              </div>
              <div className={styles.ico}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"><Image
                  src="/linkedin.svg" alt="Linkedi
                  n" height={60} width={60} title="Linkedin" /></a>
              </div>
              <div className={styles.ico}>
                <a target="_blank" rel="noopener noreferrer" href="https://br.pinterest.com/lucilua81">
                  <Image height={60} width={60} src="/pinterest.svg"
                  alt="Pinterest" title="Pinterest" /></a>
              </div>
            </div>
            <p>Artista e Programadora</p>
            <div className={styles.aboutContact}>
              <a href="./about.html"><button id="cardAbout" className={styles.cardAbout} title="About Me">About me</button></a>
              <a href="./contact.html"><button id="cardContact" className={styles.cardContact} title="Contact Me">Contact me</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pages} id="paragraph">
        <div className={styles.contactAlign}>
          <div className={styles.left}>
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
          <div className={styles.right}>
            <h1>Skills</h1>
            <div className={styles.p}>
              <div className={styles.item}>
                <Image width={60} height={60} src="/html.svg" alt="HTML" title="HTML" />
                <span>HTML</span>
              </div>
              <div className={styles.item}>
                <Image width={60} height={60} src="/css.svg" alt="CSS" title="CSS" />
                <span>CSS</span>
              </div>
              <div className={styles.item}>
                <Image width={60} height={60} src="/javascript.svg" alt="JavaScrip" title="JavaScrip" />
                <span>JavaScript</span>
              </div>
              <div className={styles.item}>
                <Image width={60} height={60} src="/python.svg" alt="Python" title="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={classNames(styles.projetosP, styles.pages)} id="projetos-p">
        <h2>Projetos em <span>destaque</span></h2>
        <div className={styles.btnNp}>
          <button alt="Anterior" title="Anterior" onClick={prev}>left</button>
          <button alt="Próxima" title="Próxima" onClick={next}>right</button>
        </div>
        <div className={styles.quad} id="quad">
          <div className={styles.qA}>
            <div className={styles.content}>
              <h2>Podcastr</h2>
              <p>Aplicação desenvolvida com o framework Next.js</p>
            </div>
            <div className={styles.btnH}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuciLua/NLW5-Podcastr" className={styles.git}>
                <Image layout='fill' src="/gitgo.svg" title="Github" alt="Github" />
                <button>GitHub</button>
                </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.podcastr.ga/" className={styles.acc}>
                <Image layout='fill' src="/go.svg" alt="Acessar" title="Acessar" />
                <button>Acessar</button>
                </a>
            </div>
            <Image layout='fill' src="/proj/podcastr.webp" alt="Projeto" />
          </div>
          <div className={styles.qA}>
            <div className={styles.content}>
              <h2>Audiovisual | Neutrum</h2>
              <p>Cenários e Edição da animação Neutrum</p>
            </div>
            <div className={styles.btnH}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=VrI2ILQvzAw" className={styles.acc}><Image layout='fill'
              src="/go.svg" alt="Acessar" title="Acessar" /><button>Acessar</button></a>
            </div>
            <Image layout='fill' src="/proj/neutrum.webp" alt="Projeto" />
          </div>
          <div className={styles.qA}>
            <div className={styles.content}>
              <h2>Snake Game</h2>
              <p>Jogo para navegador utilizando Javascript</p>
            </div>
            <div className={styles.btnH}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuciLua/snakegame" className={styles.git}><Image layout='fill'
              src="/gitgo.svg" title="Github" alt="Github" /><button>GitHub</button></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.gamesnake.tk/" className={styles.acc}><Image layout='fill' src="/go.svg"
                alt="Acessar" title="Acessar" /><button>Acessar</button></a>
            </div>
            <Image layout='fill' src="/proj/snake.webp" alt="Projeto" />
          </div>
          <div className={styles.qA}>
            <div className={styles.content}>
              <h2>Editor Rich Text</h2>
              <p>Editor de texto Rich Text para navegador</p>
            </div>
            <div className={styles.btnH}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuciLua/RichTextEditor" className={styles.git}><Image layout='fill'
              src="/gitgo.svg" title="Github" alt="Github" /><button>GitHub</button></a>
              <a target="_blank" rel="noopener noreferrer" href="https://rich-text-editor.vercel.app/" className={styles.acc}><Image layout='fill'
              src="/go.svg" alt="Acessar" title="Acessar" /><button>Acessar</button></a>
            </div>
            <Image layout='fill' src="/proj/rick.webp" alt="Projeto" />
          </div>
          <div className={styles.qA}>
            <div className={styles.content}>
              <h2>Calendário</h2>
              <p>Aplicação em desenvolvimento utilizando o framework Next.js</p>
            </div>
            <div className={styles.btnH}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuciLua/calendar" className={styles.git}><Image layout='fill'
              src="/gitgo.svg" title="Github" alt="Github" /><button>GitHub</button></a>
              <a target="_blank" rel="noopener noreferrer" href="http://calendar-blond.vercel.app/" className={styles.acc}><Image layout='fill' src="/go.svg"
                alt="Acessar" title="Acessar" /><button>Acessar</button></a>
            </div>
            <Image layout='fill' src="/proj/calender.webp" alt="Projeto" />
          </div>
          <div className={styles.qA}>
            <div className={styles.content}>
              <h2>Audiovisual | Moda</h2>
              <p>Produção audiovisual de moda e ensaio fotográfico</p>
            </div>
            <div className={styles.btnH}>
              <a target="_blank" rel="noopener noreferrer" href="https://dialogosfuturismo1.wixsite.com/futurismo/video"
                className={styles.acc}><Image layout='fill' src="/go.svg" alt="Acessar" title="Acessar" /><button>Acessar</button></a>
            </div>
            <Image layout='fill' src="/proj/dialogo.webp" alt="Projeto" />
          </div>
        </div>
        <div className={styles.morePp}>
          <a href="./projects"><button alt="Mais projetos" title="Mais projetos">Mais projetos</button></a>
        </div>
      </div>
      <br />
      <div className={styles.line}></div>
      <div className={styles.titleArt}>
        <h1>Arts.</h1>
      </div>

      <div className={styles.tA}>
        <div className={styles.iCa}>
          <a href="./arts.html#b3d" alt="Artes em 3D" title="Artes em 3D">
            <div className={styles.cA}>
              <div className={styles.a2d}>
                <Image layout='fill' src="/cube.svg" alt="Artes em 3D" title="Artes em 3D" />
              </div>
            </div>
          </a>
          <p>3D Artes | Personagens, cenários, animações</p>
        </div>
        <div className={styles.iCa}>
          <a href="./arts.html#b2d" alt="Artes em 2D" title="Artes em 2D">
            <div className={styles.cA}>
              <div className={styles.a3d}>
                <Image layout='fill' src="/galery.svg" alt="Artes em 2D" title="Artes em 2D" />
              </div>
            </div>
          </a>
          <p>2D Artes | Pinturas, Desenhos, Personagens</p>
        </div>
      </div>
    </>
  )
}

export default Home
