/**
 * checked
 * onChange
 * size
 * label:string
 */
import { FC } from "react"
import { useMyContext } from "../context/MyProvider.tsx"

import { v4 as uuidv4 } from "uuid"

interface ICheckboxProps {
    checked?: boolean
    size?: "sm" | "md" | "lg"
    label?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const sizeTypes: Record<string, string> = {
    sm: "tw-w-4 tw-h-4",
    md: "tw-w-6 tw-h-6",
    lg: "tw-w-8 tw-h-8",
}

export const Checkbox: FC<ICheckboxProps> = ({ checked, size = "sm", label, onChange }) => {
    useMyContext()
    const id: string = uuidv4()

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input id={id} type="checkbox" checked={checked} className={`${sizeTypes[size]}`} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
