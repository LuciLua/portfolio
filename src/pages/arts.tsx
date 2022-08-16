import styles from "../styles/arts/index.module.scss";
import Artcard from "../components/artcards/Artcard";
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
          <Artcard id={card} />
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
      <div className='pages' id="projetos-subpagina">
        <div className={styles.titleArtsContainer}>
          <h2>Arts</h2>
        </div>

        <div className={`${styles.artSection}`} id="artes">
          <div className={styles.artCollection}>
            <h1 id="b3d">3D</h1>
            <p>
              3D won me over right away, even before I had contact
              with him in college, I was already researching what that
              world that attracted me so much, even after classes I continued
              completely obsessed with making characters, scenarios, textures,
              3D animations and experiments. I have always used the software
              which I consider the best, for being free and very complete, the
              Blender, which allows me to explore my creativity and advance
              with the technique.
            </p>
          </div>
          {/* .artCardsCollection will be created here */}
          {generateArtCards3D()}
        </div>

        <div className={`${styles.artSection}`} id="artes">
          <div className={styles.artCollection}>
            <div className='line'></div>
            <h1 id="b2d">2D</h1>
            <p>
              My story with 2D art started in a funny way and a
              little sad. Well, I was in one of the Digital Imaging classes
              3D, the teacher approached and seeing the way I was dealing
              with 3D Art told me about an Animation project, well, I was
              interested, but he asked the following question: Lucia, do you know
              to draw?. And after that, I wanted to learn, I felt that taking a course
              of Arts and not knowing how to draw was something that left me with a
              strange feeling of not belonging, even though I
              disagree with that, I ended up learning to draw.
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
