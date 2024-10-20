/**
 * variant:filled,transparent
 * size:xs,sm,md
 * onClick
 */

import { FC } from "react"

interface IButtonProps {
    variant?: "filled" | "transparent"
    size?: "sm" | "md" | "lg"
    onClick?: () => void
    radius?: "sm" | "md" | "lg" | "full"
    children: React.ReactNode
}

const variantTypes: Record<string, string> = {
    transparent: "tw-bg-transparent",
    filled: "tw-bg-blue-400",
}

const sizeTypes: Record<string, string> = {
    sm: "tw-p-0.5 tw-text-lg",
    md: "tw-p-1 tw-text-lg",
    lg: "tw-p-1.5 tw-text-lg",
}

const radiusTypes: Record<string, string> = {
    sm: "tw-rounded-sm",
    md: "tw-rounded-md",
    lg: "tw-rounded-lg",
    full: "tw-rounded-full",
}

export const Button: FC<IButtonProps> = ({ variant = "filled", size = "sm", radius = "xs", children, onClick }) => {
    return (
        <button className={`${variantTypes[variant]} ${sizeTypes[size]} ${radiusTypes[radius]}`} onClick={onClick}>
            {children}
        </button>
    )
}
