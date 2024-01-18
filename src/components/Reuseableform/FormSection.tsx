import {  useContext } from "react";
import { FormContext } from ".";
import cn from "../../utils/cn";
import { TForm } from "../../types";

export const FormSection = ({children}:TForm) => {

    const {double}= useContext(FormContext) as TForm
    return (
        <div className={cn(' grid grid-cols-1 justify-items-center gap-4', {
            'md:grid-cols-2': double,
        })}>
            {children}
        </div>
    );
};

