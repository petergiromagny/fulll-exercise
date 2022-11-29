import React from "react";
import "./Checkbox.css";

export const Checkbox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return(
        <input type="checkbox" readOnly data-testid="checkbox-field" {...props}/>
    )
};
