import { Project } from "../../../components/Sections/ProjectsSection/Project"
import { TitleHomeSections } from "../../../components/TitleHomeSections"

export default function projects() {
  return (
    <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
      <TitleHomeSections section="projects" />
      <div className="my-[40px] flex w-full justify-center gap-12 flex-wrap transform perspective-3d">
        <Project
          key={"hidrofobia"}
          name={"Hidrofobia"}
          img={"/assets/projects/hidrofobia.png"}
          url={"https://curtahidrofobia.com/"}
          stack={["reactJS", "nextJS", "tailwindcss"]}
          description="Hidrofobia is a website developed with the purpose of promoting the film that I produced and directed. Not just publicizing, but being a means of raising funds for the film's production through a personalized and exclusive form integrated with Google Forms. In this project there is also a gallery of behind-the-scenes photos from the recording days."
        />
        <Project
          key={"Somuuh"}
          name={"Somuuh"}
          img={"/assets/projects/somuuh.png"}
          url={"https://somuuh.vercel.app/"}
          stack={[
            "reactJS",
            "nextJS",
            "tailwindcss",
            "next-auth",
            "typescript",
          ]}
          description="Somuuh is a social network project focused on working with authentication and design. Exploring references such as Instagram, Twitter and Spotify."
        />
        <Project
          key={"Notein"}
          name={"NoteIn"}
          img={"/assets/projects/notein.png"}
          url={"https://notein.vercel.app/"}
          stack={[
            "reactJS",
            "nextJS",
            "sass",
            "mongoDB",
            "typescript",
            "axios",
          ]}
          description="NoteIn is a project in which I focused on working with authentication with a non-real database (mongoDB)"
        />
        <Project
          key={"Pokedex"}
          name={"Pokedex"}
          img={"/assets/projects/pokedex.png"}
          url={"https://pokedeex.vercel.app/"}
          stack={["reactJS", "nextJS", "sass"]}
          description="Pokedex is a project that aims to bring together all the pokemons in one place, with their information, such as abilities (in bars) and images"
        />
        <Project
          key={"ToDo"}
          name={"ToDo"}
          img={"/assets/projects/todo.png"}
          url={"https://todo-lucilua.vercel.app/"}
          stack={["reactJS", "nextJS", "sass", "typescript", "localStorage"]}
          description="ToDo is a web application that seeks to store items defined by the user in the browser, mark them as completed or even remove them. React, Next.js, LocalStorage, Typescript and SASS were used."
        />
        <Project
          key={"Compare"}
          name={"Compare"}
          img={"/assets/projects/compare.png"}
          url={"https://compare-orpin.vercel.app/"}
          stack={["reactJS", "nextJS", "sass", "typescript", "axios"]}
          description="Compare is an application that compares a list of followers of a user on github with the list of people that this user follows, generating two other lists: that of users that the current user follows but does not follow him back, and that of users that the current user does not follow but follow him. Generating a link for each user profile in these two lists, allowing you to follow or unfollow users."
        />
      </div>
    </div>
  )
}
