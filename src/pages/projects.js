import styles from '../styles/home/index.module.scss'

function Projects() {
    return (

        <div className={styles.pages} id="projetos-subpagina">
            <div className={styles.pInit}>
                <h2>Projetos</h2>
            </div>
            <div className={styles.quadPag}>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Podcastr</h2>
                        <p>Aplicação desenvolvida com o framework Next.js</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua/NLW5-Podcastr" className={styles.git}><img src="./gitgo.svg" title="Github" alt="Github"/><button>GitHub</button></a>
                        <a target="_blank" rel="noreferrer" href="https://www.podcastr.ga/" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button >Acessar</button></a>
                    </div>
                    <img src="./proj/podcastr.webp" alt="Projeto" />
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Audiovisual | Neutrum</h2>
                        <p>Cenários e Edição da animação Neutrum</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=VrI2ILQvzAw" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button >Acessar</button></a>
                    </div>
                    <img src="./proj/neutrum.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Snake Game</h2>
                        <p>Jogo para navegador utilizando Javascript</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua/snakegame" className={styles.git}><img src="./gitgo.svg" title="Github" alt="Github"/><button >GitHub</button></a>
                        <a target="_blank" rel="noreferrer" href="https://www.gamesnake.tk/" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button>Acessar</button></a>
                    </div>
                    <img src="./proj/snake.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Editor Rich Text</h2>
                        <p>Editor de texto Rich Text para navegador</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua/RichTextEditor" className={styles.git}><img src="./gitgo.svg" title="Github" alt="Github"/><button >GitHub</button></a>
                        <a target="_blank" rel="noreferrer" href="https://rich-text-editor.vercel.app/" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button >Acessar</button></a>
                    </div>
                    <img src="./proj/rick.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Calendário</h2>
                        <p>Aplicação em desenvolvimento utilizando o framework Next.js</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua/calendar" className={styles.git}><img src="./gitgo.svg" title="Github" alt="Github"/><button >GitHub</button></a>
                        <a target="_blank" rel="noreferrer" href="http://calendar-blond.vercel.app/" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button >Acessar</button></a>
                    </div>
                    <img src="./proj/calender.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Audiovisual | Moda</h2>
                        <p>Produção audiovisual de moda e ensaio fotográfico</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://dialogosfuturismo1.wixsite.com/futurismo/video" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button>Acessar</button></a>
                    </div>
                    <img src="./proj/dialogo.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Calculadora</h2>
                        <p>Protótipo de uma calculadora com JavaScript</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua/calculadora" className={styles.git}><img src="./gitgo.svg" title="Github" alt="Github"/><button >GitHub</button></a>
                        <a target="_blank" rel="noreferrer" href="https://www.jscalculadora.tk/" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button >Acessar</button></a>
                    </div>
                    <img src="./proj/calculadora.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Rock-Papper-Scissors</h2>
                        <p>Jogo pedra papel tesousa em JavaScript</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LuciLua/Rock-paper-and-scissors" className={styles.git}><img src="./gitgo.svg" title="Github" alt="Github"/><button >GitHub</button></a>
                        <a target="_blank" rel="noreferrer" href="https://www.gamejs-rps.tk/" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button >Acessar</button></a>
                    </div>
                    <img src="./proj/rock.webp" alt="Projeto"/>
                </div>
                <div className={styles.qA}>
                    <div className={styles.content}>
                        <h2>Audiovisual | 3D</h2>
                        <p>Curta de animação em 3D feito no Blender</p>
                    </div>
                    <div className={styles.btnH}>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=d1iIKCi0Gvc" className={styles.acc}><img src="./go.svg" alt="Acessar" title="Acessar"/><button>Acessar</button></a>
                    </div>
                    <img src="./proj/pomba.webp" alt="Projeto"/>
                </div>
            </div>
        </div>
    )
}

export default Projects