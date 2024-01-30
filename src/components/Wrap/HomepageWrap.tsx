import { PropsWithChildren, ReactNode, ReactPropTypes } from "react";

export function HomepageWrap({ children, type, className, id }:
    { children: ReactNode, type: 'full' | 'strict', className?: React.ReactNode, id?: string }) {

    if (type == 'strict') {
        return (
            <div id={id} className={`flex justify-center items-center mx-auto w-full max-w-[1300px] py-[20px] px-[10px] ${className}`}>
                {children}
            </div>
        )
    }

    else if (type == "full") {
        return (
            <div id={id} className={`mx-auto w-full  py-[20px] px-[10px] justify-center items-center h-fit relative ${className}`}>
                {children}
            </div>
        )
    }
}