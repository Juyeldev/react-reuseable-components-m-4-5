import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className=" h-full w-full mx-auto max-w-[1275px] ">
            {children}
        </div>
    );
};

export default Container;