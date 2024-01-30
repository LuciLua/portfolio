import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { HomepageWrap } from "../../Wrap/HomepageWrap"
import { Texts } from "./InitialBoxContents/Texts"
import { MailCopy } from "./InitialBoxContents/MainCopy"
import { Footer } from "./InitialBoxContents/Footer"

export async function InitialBoxSection() {

  // await new Promise(resolve => {setTimeout(resolve, 2000)})

  return (
    <HomepageWrap type="strict" className="xl:min-h-[900px] pt-[120px] justify-center">
      <div className="border-[var(--lines-contrast)] bg-[var(--bg-default)] text-[var(--text-default)] border-[3px] max-w-[1300px] w-full h-fit min-h-[300px] flex flex-col ">
        <div className="flex xl:flex-row flex-col xl:max-h-[508px] xl:h-[508px] w-full relative  shadow-[-12px_0_12px_inset] shadow-[#00000014]">
          <div className="xl:border-r-[3px] xl:border-r-[var(--lines-contrast)] w-full h-full  flex flex-col px-5">
            <Texts />
          </div>
          <div className=" xl:w-full xl:h-full h-[220px] flex relative justify-center pattern-grid-[#7d7e82]/5">
            <img
              className="z-10 top-[-129px] xl:top-[-142px] xl:left-[-25px] xl:max-h-[650px] xl:min-h-[650px]  max-h-[350px] min-h-[350px] object-cover absolute "
              src="assets/outro.svg"
              alt="lucilua"
            />
          </div>
          {/* right strip */}
          <div className="z-20 relative xl:absolute flex flex-row xl:flex-col gap-[20px] w-full h-full xl:w-[60px] xl:h-[calc(100%+80px)] xl:top-[-10px]  bg-[var(--bg-default)] xl:border-x-[3px] border-y-[3px] xl:border-x-[var(--lines-contrast)]  xl:border-y-0 border-y-[var(--lines-contrast)] xl:right-[15px]  xl:pt-[20px] xl:justify-start justify-center items-center py-3 border-b-0">
            <a
              className="cursor-pointer hover:scale-105 transition-[0.3s]"
              href="https://www.linkedin.com/in/lucia-guelber/"
              target="_blank"
              aria-label="access_my_linkedin"
            >
              <AiFillLinkedin className=" text-[var(--text-h1)] text-[36px] w-fit h-fit " />
            </a>
            <a
              className="cursor-pointer hover:scale-105 transition-[0.3s]"
              href="https://github.com/lucilua/"
              target="_blank"
              aria-label="access_my_github"
            >
              <AiFillGithub className=" text-[var(--text-h1)] text-[36px] w-fit h-fit" />
            </a>
            <MailCopy />
          </div>
        </div>
        <Footer />
      </div>
    </HomepageWrap>
  )
}
