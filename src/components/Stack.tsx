/**
 * justify:space-between,fle-start,flex-end,center
 * items:center
 * gap
 */
import { FC } from "react"
import { useMyContext } from "../context/MyProvider.tsx"

interface IStackProps {
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
    items?: "flex-start" | "flex-end" | "center"
    gap?: "xs" | "sm" | "md" | "lg" | "xl"
    children: React.ReactNode
}

const justifyTypes: Record<string, string> = {
    "flex-start": "tw-justify-items-start",
    "flex-end": "tw-justify-items-end",
    center: "tw-justify-center",
    "space-between": "tw-justify-between",
    "space-around": "tw-justify-around",
}

const itemsTypes: Record<string, string> = {
    "flex-start": "tw-items-start",
    "flex-end": "tw-items-end",
    center: "tw-items-center",
}

const gapTypes: Record<string, string> = {
    xs: "tw-gap-1",
    sm: "tw-gap-2",
    md: "tw-gap-3",
    lg: "tw-gap-4",
    xl: "tw-gap-5",
}

export const Stack: FC<IStackProps> = ({ justify = "flex-start", items = "flex-start", gap = "xs", children }) => {
    useMyContext()

    return (
        <div className={`tw-flex tw-flex-col ${justifyTypes[justify]} ${itemsTypes[items]} ${gapTypes[gap]}`}>
            {children}
        </div>
    )
}
