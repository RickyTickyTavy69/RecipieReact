type ButtonProps = {
    title: string;
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
    selected?: boolean
}

const Button = ({title, onClick, size, selected = false} : ButtonProps) => {
    return(
        <button onClick={onClick} className={`
        focus:outline-none
        border-black rounded border-4 hover:border-red-800 p-2 my-4 text-red-500
        ${size === "sm" && "w-1/2 text-lg p-1 my-2"}
        ${selected && "border-purple-800"}
        `}>
            {title}
        </button>
    )
}

export default Button;
