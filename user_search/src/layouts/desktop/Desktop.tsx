import "./Desktop.css";

type DesktopProps = {
    title: string;
    children: JSX.Element | Array<JSX.Element>;
}

export const Desktop = ({ title, children }: DesktopProps) => {
    return (
        <>
            <div className="desktop__header" data-testid="desktop-header">
                <h1 data-testid="desktop-header-content">{title}</h1>
            </div>
            <div className="desktop__body" data-testid="desktop-body">
                {children}
            </div>
        </>
    )
}