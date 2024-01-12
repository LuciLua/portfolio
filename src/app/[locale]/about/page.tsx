import { TitleHomeSections } from "../../../components/TitleHomeSections"
import { BtnSendMessage } from "../../../components/Btns/BtnSendMessage"
import { AboutMeTexts } from "../../../components/AboutMeTexts"

export default function about() {
  return (
    <div className="z-10 relative flex justify-center items-center w-fit h-fit gap-14 flex-wrap mx-auto max-w-[1300px] py-[20px] px-[10px]">
      <div className="flex flex-col w-fit justify-center">
        <TitleHomeSections section="about" />
        <div className="mt-10 indent-10 text-justify max-w-[800px] w-full h-fit text-[var(--text-default)] leading-[30px] flex  flex-col gap-4 font-[500]">
          <AboutMeTexts p={1} />
          <AboutMeTexts p={2} />
          <AboutMeTexts p={3} />
          <AboutMeTexts p={4} />
        </div>
      </div>
      <div className="flex justify-center  items-center flex-col text-[var(--text-default)] gap-3 min-w-[250px]">
        <div className="relative z-0 overflow-hidden rounded-full w-[250px] h-[250px]">
          <img
            src="/assets/images/coding1.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col pt-[10px]">
          <h1 className="text-[var(--text-h1)] text-[25px] font-[600]">
            Luci Lua
          </h1>
          <h2 className="text-[var(--text-h2)] pb-4">
            Lúcia Maria Rosa Guelber
          </h2>
          <p>luci.lua81@gmail.com</p>
          <BtnSendMessage />
        </div>
      </div>
    </div>
  )
}
