import styles from '../styles/home/index.module.scss'
import ProjectCard from '../components/projectcards/cards'
import Head from 'next/head'

function Projects() {
    return (
        <>
            <Head>
                <title>Luci Lua | Projects</title>
            </Head>
            <div className={styles.pages} id="projetos-subpagina">
                <div className={styles.pInit}>
                    <h2>Projetos</h2>
                </div>
                <div className={styles.sectionProjectsOtherPage}>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Podcastr" descriptionApp="Aplicação desenvolvida com o framework Next.js" githubHref="https://github.com/LuciLua/NLW5-Podcastr" directLinkHrefApp="https://www.podcastr.ga/" shortTitle="Projeto Podcast" mainImgSrc="/proj/podcastr.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Audiovisual | Neutrum" descriptionApp="Cenários e Edição da animação Neutrum" githubHref={false} directLinkHrefApp="https://www.youtube.com/watch?v=VrI2ILQvzAw" shortTitle="Projeto Neutrum" mainImgSrc="/proj/neutrum.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Snake Game" descriptionApp="Jogo para navegador utilizando Javascript" githubHref="https://github.com/LuciLua/snakegame" directLinkHrefApp="https://www.gamesnake.tk/" shortTitle="Projeto Snake Game" mainImgSrc="/proj/snake.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Editor Rich Text" descriptionApp="Editor de texto Rich Text para navegador" githubHref="https://github.com/LuciLua/RichTextEditor" directLinkHrefApp="https://rich-text-editor.vercel.app/" shortTitle="Projeto RichText Editor" mainImgSrc="/proj/rick.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Calendário" descriptionApp="Aplicação em desenvolvimento utilizando o framework Next.js" githubHref="https://github.com/LuciLua/calendar" directLinkHrefApp="http://calendar-blond.vercel.app/" shortTitle="Projeto Calender" mainImgSrc="/proj/calender.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Audiovisual | Moda" descriptionApp="Produção audiovisual de moda e ensaio fotográfico" githubHref={false} directLinkHrefApp="https://dialogosfuturismo1.wixsite.com/futurismo/video" shortTitle="Projeto Dialogos Entre Moda e Arte" mainImgSrc="/proj/dialogo.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Calculadora" descriptionApp="Protótipo de uma calculadora com JavaScript" githubHref="https://github.com/LuciLua/calculadora" directLinkHrefApp="https://www.jscalculadora.tk/" shortTitle="Projeto Calculator" mainImgSrc="/proj/calculadora.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Rock-Papper-Scissors" descriptionApp="Jogo pedra papel tesousa em JavaScript" githubHref="https://github.com/LuciLua/Rock-paper-and-scissors" directLinkHrefApp="https://www.gamejs-rps.tk/" shortTitle="Projeto Rock and Scissors" mainImgSrc="/proj/rock.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard titleApp="Audiovisual | 3D" descriptionApp="Curta de animação em 3D feito no Blender" githubHref={false} directLinkHrefApp="https://www.youtube.com/watch?v=d1iIKCi0Gvc" shortTitle="Projeto A Vingança da Pomba" mainImgSrc="/proj/pomba.webp" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects