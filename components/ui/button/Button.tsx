
import type {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import "./Button.css";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    label: string | ReactNode;
};

const Button = ({
    variant = "primary",
    size = "md",
    type = "button",
    disabled = false,
    className = "",
    loading = false,
    label,
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`btn btn-${variant} btn-${size} ${className}`.trim()}
            aria-busy={loading}
        >
            {loading ? "Loading..." : label}
        </button>
    );
};

export default Button;
