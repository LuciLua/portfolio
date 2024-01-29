import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export function TalkToMeSectionSeparator() {
    return (
        <p className="xl:text-[18px] text-nowrap text-sm w-full h-fit flex justify-center items-center font-[500] py-4 bg-black text-[#fff]">
            <span className="underline mr-1 flex gap-2 justify-center items-center">
                <IoChatbubbleEllipsesOutline /> Talk to me
            </span>{" "}
            and I can tell you about my{" "}
            <span className="bg-[#121212] text-[#fff]  ml-1 px-1 rounded-[3px]">
                soft skills!
            </span>
        </p>
    )
}