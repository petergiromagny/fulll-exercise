import "./Avatar.css";

interface IAvatarProps {
    src?: string;
}

const DEFAULT_SRC = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png";

export const Avatar = ({ src = DEFAULT_SRC }: IAvatarProps) => {
    return <img src={src} alt="user's avatar" className="avatar__img" data-testid="avatar-img"/>;
}