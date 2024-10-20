/**
 * value
 * onChange
 * size
 * placeholder
 * label:string
 */
import { FC } from "react"

interface ITextInputProps {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    size?: "sm" | "md" | "lg"
    radius?: "sm" | "md" | "lg" | "full"
    placeholder?: string
    label?: string
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

export const TextInput: FC<ITextInputProps> = ({ value, size = "sm", placeholder, radius = "xs", label, onChange }) => {
    return (
        <div>
            <label htmlFor={"input"}>{label}</label>
            <input
                id={"input"}
                type={"text"}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className={`${sizeTypes[size]} ${radiusTypes[radius]} tw-border-2 tw-border-black`}
            />
        </div>
    )
}
