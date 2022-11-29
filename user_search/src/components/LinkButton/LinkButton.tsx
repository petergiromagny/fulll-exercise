import React from "react";
import "./LinkButton.css";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
}

export const LinkButton = ({ label, ...props }: LinkButtonProps) => {
    return(
        <a className="button__link" data-testid="link-button" {...props}>{label}</a>
    )
}