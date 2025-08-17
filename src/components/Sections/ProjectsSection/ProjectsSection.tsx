import { DiscoveryMoreProjects } from "../../Btns/DiscoveyMoreProjects";
import { Project } from "./Project";
import { TitleHomeSections } from "../../TitleHomeSections";
import { HomepageWrap } from "../../Wrap/HomepageWrap";

export function ProjectsSection() {
    return (
        <HomepageWrap type="strict">
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
                        key={"Furia Gamer"}
                        name={"Furia Gamer"}
                        img={"/assets/projects/furiagamer.png"}
                        url={"https://furiagamer.com/"}
                        stack={["reactJS", "nextJS", "typescript", "tailwindcss", "express", "nodeJS"]}
                        description="I developed an innovative website that functions as a sales platform associated with Amazon and Shoppe. With an elegant and intuitive design on the frontend, and robust backend and API, users can explore a wide range of high-quality products, directly from renowned brands. Offering a simplified shopping experience, this project combines cutting-edge technology with convenience to provide customers with a convenient way to find and purchase their favorite products"
                    />
                </div>
                <div className="w-full flex justify-center items-center border-b-[1px] max-w-[1150px] mx-auto pb-[20px]">
                    <DiscoveryMoreProjects />
                </div>
            </div>
        </HomepageWrap>
    )
}
