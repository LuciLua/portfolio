import { ReactNode } from "react";

export function HomepageWrap({ children, type, classNames, id }:
    { children: ReactNode, type: 'full' | 'strict', classNames?: string, id?: string }) {

    if (type == 'strict') {
        return (
            <div id={id} className={`flex flex-col mx-auto w-full max-w-[1300px] py-[20px] px-[10px] ${classNames}`}>
                {children}
            </div>
        )
    }

    else if (type == "full") {
        return (
            <div id={id} className={`mx-auto w-full  py-[20px] px-[10px] flex justify-center items-center h-fit relative ${classNames}`}>
                {children}
            </div>
        )
    }
}