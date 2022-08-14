import Card from "../../../components/ProjectCards/Card"
import styles from "./mainCardProjectsContainer.module.scss"

function MainCardProjectsContainer() {
    return (
        <>
            <div className={styles.projectCard}>
                <Card
                    titleApp="Podcastr"
                    descriptionApp="Aplicação desenvolvida com o framework Next.js"
                    githubHref="https://github.com/LuciLua/NLW5-Podcastr" directLinkHrefApp="https://www.podcastr.ga/"
                    shortTitle="Projeto Podcast"
                    mainImgSrc="/proj/podcastr.webp" />
            </div>
            <div className={styles.projectCard}>
                <Card
                    titleApp="Audiovisual | Neutrum"
                    descriptionApp="Cenários e Edição da animação Neutrum"
                    githubHref="/" directLinkHrefApp="https://www.youtube.com/watch?v=VrI2ILQvzAw"
                    shortTitle="Projeto Neutrum"
                    mainImgSrc="/proj/neutrum.webp" />
            </div>
            <div className={styles.projectCard}>
                <Card
                    titleApp="Snake Game"
                    descriptionApp="Jogo para navegador utilizando Javascript"
                    githubHref="https://github.com/LuciLua/snakegame" directLinkHrefApp="https://www.gamesnake.tk/"
                    shortTitle="Projeto Snake Game"
                    mainImgSrc="/proj/snake.webp" />
            </div>
            <div className={styles.projectCard}>
                <Card
                    titleApp="Editor Rich Text"
                    descriptionApp="Editor de texto Rich Text para navegador"
                    githubHref="https://github.com/LuciLua/RichTextEditor" directLinkHrefApp="https://rich-text-editor.vercel.app/"
                    shortTitle="Projeto RichText Editor"
                    mainImgSrc="/proj/rick.webp" />
            </div>
            <div className={styles.projectCard}>
                <Card
                    titleApp="Calendário"
                    descriptionApp="Aplicação em desenvolvimento utilizando o framework Next.js"
                    githubHref="https://github.com/LuciLua/calendar" directLinkHrefApp="http://calendar-blond.vercel.app/"
                    shortTitle="Projeto Calender"
                    mainImgSrc="/proj/calender.webp" />
            </div>
            <div className={styles.projectCard}>
                <Card
                    titleApp="Audiovisual | Moda"
                    descriptionApp="Produção audiovisual de moda e ensaio fotográfico"
                    githubHref={false} directLinkHrefApp="https://dialogosfuturismo1.wixsite.com/futurismo/video"
                    shortTitle="Projeto Dialogos Entre Moda e Arte"
                    mainImgSrc="/proj/dialogo.webp" />
            </div>
            <div className={styles.projectCard}>
                <Card
                    titleApp="To Do List"
                    descriptionApp="Lista ToDo"
                    githubHref="https://github.com/LuciLua/todo" directLinkHrefApp="https://todo-lucilua.vercel.app/"
                    shortTitle="To Do"
                    mainImgSrc="/proj/todo.png" />
            </div>
        </>
    )
}

export default MainCardProjectsContainer