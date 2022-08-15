import styles from "../styles/arts/index.module.scss";
import ArtCard from "../components/artcards/Artcards";
import Head from "next/head";

function Arts() {
  const ids3D = [
    "a",
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "i",
    "j",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
  ];
  const paths3DIMG = ids3D.map((item) => `/dim/d_${item}`);

  const ids2D = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m"];
  const paths2DIMG = ids2D.map((item) => `/port2d/o_${item}`);

  function generateArtCards(choiceAnList) {
    return choiceAnList.map((card) => {
      return (
        <div className={styles.artCardsCollection} key={card}>
          <ArtCard id={card} />
        </div>
      );
    });
  }

  function generateArtCards3D() {
    return generateArtCards(paths3DIMG);
  }
  function generateArtCards2D() {
    return generateArtCards(paths2DIMG);
  }

  return (
    <>
      <Head>
        <title>Luci Lua | Arts</title>
      </Head>
      <div className={styles.pages} id="projetos-subpagina">
        <div className={styles.titleArtsContainer}>
          <h2>Artes</h2>
        </div>

        <div className={`${styles.artSection}`} id="artes">
          <div className={styles.artCollection}>
            <h1 id="b3d">3D</h1>
            <p>
              O 3D me conquistou logo de primeira, antes mesmo de ter contato
              com ele na faculdade, eu já estava pesquisando o que era aquele
              mundo que tanto me atraía, mesmo depois das aulas eu continuei
              completamente fissurada a fazer personagens, cenários, texuras,
              animações e experimentos em 3D. Eu utilizo desde sempre o software
              que considero o melhor, por ser gratuito e muito completo,o
              Blender, que me possibilita explorar minha criatividade e avançar
              com a técnica.
            </p>
          </div>
          {/* .artCardsCollection will be created here */}
          {generateArtCards3D()}
        </div>

        <div className={`${styles.artSection}`} id="artes">
          <div className={styles.artCollection}>
            <div className={styles.line}></div>
            <h1 id="b2d">2D</h1>
            <p>
              Minha história com a arte 2D começou de uma forma engraçada e um
              pouco triste. Bem, estava eu em uma das aulas de Imagem Digital
              3D, o professor se aproximnou e ao ver a forma com que eu lidava
              com a Arte 3D me falou sobre um projeto de Animação, bem, fiquei
              interessada, porém ele fez a seguinte pergunta: Lúcia, você sabe
              desenhar?. E depois disso, quis aprender, senti que fazer um curso
              de Artes e não saber desenhar era algo que me deixava com um
              sentimento estranho e de não pertencimento, por mais que eu mesma
              discorde disso, acabei aprendendo a desenhar.
            </p>
          </div>
          {/* .artCardsCollection will be created here */}
          {generateArtCards2D()}
        </div>
      </div>
    </>
  );
}

export default Arts;
