import classNames from 'classnames'
import styles from '../styles/home/index.module.scss'

function Arts() {

  
  // var modal = document.getElementById('janelaModal');

  // var btnClose = document.getElementsByClassName("fechar")[0];


  // function clique(img){

  //     var modal = document.getElementById('janelaModal');
  //     var modalImg = document.getElementById("imgModal");

  //     modal.style.display="flex";
  //     modalImg.src=img.src;
  //     modalImg.alt=img.alt;
  // }

  // btnClose.onClick=function(){
  //     modal.style.display="none";
  // }

  function btnClose(){
    console.log('fechada')
  }

  return (
    <>
 <div className={classNames(styles.pages)} id="projetos-subpagina">
        <div className={styles.pInit}>
            <h2>Artes</h2>
        </div>
    </div> 
    <div className={styles.b3d}>
      <h1 id="b3d">3D</h1>
      <p>O 3D me conquistou logo de primeira, antes mesmo de ter contato com ele na faculdade, eu já estava pesquisando o que era aquele mundo que tanto me atraía, mesmo depois das aulas eu continuei completamente fissurada a fazer personagens, cenários, texuras, animações e experimentos em 3D. Eu utilizo desde sempre o 
        software que considero o melhor, por ser gratuito e muito completo,o Blender, que me possibilita explorar minha criatividade e avançar com a técnica.</p>
    </div>
      
      <div className={classNames(styles.pages, styles.artes)} id="artes">
    <div className={styles.artG}>
      <div className={styles.o}>
        <img src="./dim/d_a.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_a.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_b.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_b.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_c.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_c.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_d.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_d.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_f.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_f.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_g.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_g.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_h.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_n.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_i.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_i.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_j.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_j.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_l.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_l.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_m.webp" onClick="clique(this)" alt="Arte" title="View Art"/>
        <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_m.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.o}>
        <img src="./dim/d_n.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_n.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./dim/d_o.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_o.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./dim/d_p.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_p.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./dim/d_q.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_q.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./dim/d_r.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./dim/d_r.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
      <div className={styles.b3d}>

        <div className={styles.line}></div>

        <h1 id="b2d" className={styles.b2d}>2D</h1>
        <p>Minha história com a arte 2D começou de uma forma engraçada e um pouco triste. Bem, estava eu em uma das aulas de Imagem Digital 3D, o professor se aproximnou e ao ver a forma com que eu lidava com a Arte 3D me falou sobre um projeto de Animação, bem, fiquei interessada, porém ele fez a seguinte pergunta: "Lúcia, você sabe desenhar?". E depois disso, quis aprender, senti que fazer um curso de Artes e não saber desenhar era algo que me deixava com um sentimento estranho e de não pertencimento, por mais que eu mesma discorde disso, acabei aprendendo a desenhar.</p>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_a.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_a.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_b.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_b.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_c.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_c.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_d.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_d.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_e.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_e.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_f.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_f.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_h.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_h.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_i.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_i.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_j.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_j.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_k.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_k.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_l.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_l.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>

      <div className={styles.o}>
        <img src="./port img/o_m.webp" onClick="clique(this)" alt="Arte" title="View Art" id="imgModal"/>
       <img src="./eye.svg" className={styles.eye} alt="Arte" title="View Art"/>
        <div id="janelaModal" className={styles.modalVisual}>
          <div className={styles.div}>
            <img className={styles.modalConteudo} id="imgModal" src="./port img/o_m.webp"/>
            <span className={styles.fechar} onClick={btnClose}>x</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </>
  )
}
    {/* <script>
        var modal = document.getElementById('janelaModal');

        var btnClose = document.getElementsByClassNameName("fechar")[0];


        function clique(img){
            var modal = document.getElementById('janelaModal');
            var modalImg = document.getElementById("imgModal");

            modal.style.display="flex";
            modalImg.src=img.src;
            modalImg.alt=img.alt;
        }

        btnClose.onClick=function(){
            modal.style.display="none";
        }
    </script> */}

    export default Arts