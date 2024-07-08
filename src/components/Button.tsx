import { IButton, IconPositionButton } from "../types/types";

const Button = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: IButton) => {

    return (
        <button
            className={`flex gap-2 justify-center items-center ${otherClasses} cursor-pointer`}
            onClick={handleClick}
        >
            {position === IconPositionButton.LEFT && icon}
            {title}
            {position === IconPositionButton.RIGHT && icon}
        </button>
    );
};

export default Button;