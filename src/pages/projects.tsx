import styles from '../styles/projects/index.module.scss'
import Head from 'next/head'
import Card from '../components/ProjectCards/Card'

function Projects() {
    return (
        <>
            <Head>
                <title>Luci Lua | Projects</title>
            </Head>
            <div className={styles.pages} id="projetos-subpagina">
                <div className={styles.titleProjectsContainer}>
                    <h2>Projetos</h2>
                </div>
                <div className={styles.sectionProjectsOtherPage}>
                    <div className={styles.projectCard}>
                        <Card titleApp="Podcastr" descriptionApp="Aplicação desenvolvida com o framework Next.js" githubHref="https://github.com/LuciLua/NLW5-Podcastr" directLinkHrefApp="https://www.podcastr.ga/" shortTitle="Projeto Podcast" mainImgSrc="/proj/podcastr.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="To Do List" descriptionApp="Lista ToDo" githubHref="https://github.com/LuciLua/todo" directLinkHrefApp="https://todo-lucilua.vercel.app/" shortTitle="To Do" mainImgSrc="/proj/todo.png" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Valorant Tricks" descriptionApp="Aplicação em desenvolvimento (React.js + Next.js)" githubHref="https://github.com/LuciLua/ValorantTricks" directLinkHrefApp="https://valorant-tricks.vercel.app/" shortTitle="Projeto Valorant Tricks" mainImgSrc="/proj/valorant.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Log Sys: Local Storage" descriptionApp="Aplicação focada no uso do Local Storage" githubHref="https://github.com/LuciLua/localStorage" directLinkHrefApp="https://local-storage-azure.vercel.app/" shortTitle="Projeto Sistema Login com Local Storage" mainImgSrc="/proj/login.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Social Music" descriptionApp="Rede social de música em desenvolvimento" githubHref="https://github.com/LuciLua/socialMusic" directLinkHrefApp="https://socialmusic.vercel.app/" shortTitle="Projeto Sistema Login com Local Storage" mainImgSrc="/proj/music.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Galeria" descriptionApp="Projeto galeria desenvolvido durante o curso de web moderno" githubHref="https://github.com/LuciLua/ProjetoGaleria" directLinkHrefApp="https://projeto-galeria-weld.vercel.app/" shortTitle="Projeto Galeria" mainImgSrc="/proj/galeria.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Monty Hall" descriptionApp="Monty Hall (Vue.js) desenvolvido durante o curso web moderno" githubHref="https://github.com/LuciLua/montyhall-vuejs" directLinkHrefApp="https://montyhall-vuejs.vercel.app/" shortTitle="Projeto Monty Hall" mainImgSrc="/proj/monty.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Most Used Words" descriptionApp="Most Used Words (Electron + Vue.js)" githubHref="https://github.com/LuciLua/most-used-words" directLinkHrefApp={false} shortTitle="Projeto Most Used Words" mainImgSrc="/proj/most.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Audiovisual | Neutrum" descriptionApp="Cenários e Edição da animação Neutrum" githubHref={false} directLinkHrefApp="https://www.youtube.com/watch?v=VrI2ILQvzAw" shortTitle="Projeto Neutrum" mainImgSrc="/proj/neutrum.webp" />
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
                        <Card titleApp="Calculadora" descriptionApp="Protótipo de uma calculadora com JavaScript" githubHref="https://github.com/LuciLua/calculadora" directLinkHrefApp="https://www.jscalculadora.tk/" shortTitle="Projeto Calculator" mainImgSrc="/proj/calculadora.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Rock-Papper-Scissors" descriptionApp="Jogo pedra papel tesousa em JavaScript" githubHref="https://github.com/LuciLua/Rock-paper-and-scissors" directLinkHrefApp="https://www.gamejs-rps.tk/" shortTitle="Projeto Rock and Scissors" mainImgSrc="/proj/rock.webp" />
                    </div>
                    <div className={styles.projectCard}>
                        <Card titleApp="Audiovisual | 3D" descriptionApp="Curta de animação em 3D feito no Blender" githubHref={false} directLinkHrefApp="https://www.youtube.com/watch?v=d1iIKCi0Gvc" shortTitle="Projeto A Vingança da Pomba" mainImgSrc="/proj/pomba.webp" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects