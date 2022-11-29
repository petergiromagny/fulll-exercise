import React from "react";
import "./Input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
    return <input data-testid="input-field" {...props}/>
}