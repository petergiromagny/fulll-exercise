import "./Card.css";

interface ICardProps {
    children: JSX.Element | Array<JSX.Element>;
}

export const Card = ({ children }: ICardProps) => {
    return <div className="card" data-testid="card-container">{children}</div>
}