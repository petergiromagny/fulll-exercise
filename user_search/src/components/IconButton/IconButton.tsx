import "./IconButton.css";

type IconButtonProps = {
    srcIcon: string;
    altIcon: string;
    isDisabled?: boolean;
    onClick: () => void;
};

export const IconButton = ({ srcIcon, altIcon, isDisabled = false, onClick }: IconButtonProps) => {
    return(
        <div onClick={onClick} className={`icon__button ${isDisabled && "icon__button--disabled"}`} data-testid="icon-button-container">
            <img src={srcIcon} alt={altIcon} className="icon__button--img" data-testid="icon-button-img"/>
        </div>
    );
}