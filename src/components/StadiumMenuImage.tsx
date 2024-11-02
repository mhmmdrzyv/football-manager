import { cn } from "@/vercel/lib/utils.ts"
import { FC } from "react"

interface StadiumMenuImageProps {}

export const StadiumMenuImage: FC<StadiumMenuImageProps> = ({}) => {
    return (
        <div
            className={`group origin-top-left bg-green-600 relative rounded w-32 aspect-[2/3] p-1`}
        >
            <div
                className={
                    "relative border-2 border-white rounded w-full h-full flex justify-center"
                }
            >
                <div className={"absolute inset-0"}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            className={cn("h-[14px] w-full opacity-50", {
                                "bg-green-600": i % 2 === 0,
                                "bg-green-700": i % 2 === 1,
                            })}
                        ></div>
                    ))}
                </div>
                <div
                    className={
                        "absolute top-0 w-8 h-4 border-2 border-white border-t-0"
                    }
                ></div>
                <div
                    className={
                        "absolute top-0 w-16 h-8 border-2 border-white border-t-0"
                    }
                ></div>
                <div
                    className={
                        "absolute top-8 h-1 w-8 overflow-hidden flex justify-center"
                    }
                >
                    <div
                        className={
                            "rounded-full absolute bottom-0 border-2 border-white w-20 h-20 "
                        }
                    ></div>
                </div>
                <div
                    className={
                        "border-t-2 border-white absolute left-0 right-0 h-1 top-[92px] -translate-y-[50%]"
                    }
                ></div>
                <div
                    className={
                        "rounded-full border-2 border-white w-8 h-8 absolute top-[91px] -translate-y-[50%]"
                    }
                ></div>

                <div className={"absolute inset-0"}>
                    <div
                        className={cn(
                            "transition absolute rounded-full shadow-lg bg-white/70 w-3 h-3",
                            "top-5 left-24",
                            "group-hover:-translate-x-3 group-hover:-translate-y-2",
                        )}
                    ></div>
                    <div
                        className={cn(
                            "transition absolute rounded-full shadow-lg bg-black/50 w-3 h-3",
                            "top-12 left-4",
                            "group-hover:translate-x-4 group-hover:-translate-y-2",
                        )}
                    ></div>
                    <div
                        className={cn(
                            "transition absolute rounded-full shadow-lg bg-white/70 w-3 h-3",
                            "top-8 left-8",
                            "group-hover:translate-x-1.5 group-hover:-translate-y-4",
                        )}
                    ></div>
                    <div
                        className={cn(
                            "transition absolute rounded-full shadow-lg bg-black/50 w-3 h-3",
                            "top-10 left-20",
                            "group-hover:-translate-x-3 group-hover:-translate-y-2",
                        )}
                    ></div>
                    <div
                        className={cn(
                            "transition absolute rounded-full shadow-lg bg-white/70 w-3 h-3",
                            "top-24 left-4",
                            "group-hover:translate-x-1.5 group-hover:-translate-y-4",
                        )}
                    ></div>
                    <div
                        className={cn(
                            "transition absolute rounded-full shadow-lg bg-white/70 w-3 h-3",
                            "top-16 left-16",
                            "group-hover:-translate-x-1.5 group-hover:-translate-y-4",
                        )}
                    ></div>
                </div>
            </div>
        </div>
    )
}
