import { cn } from "@/vercel/lib/utils.ts"
import { FC } from "react"

enum EGameResult {
    Win,
    Draw,
    Loss,
}

interface IRow {
    team: string
    logo: string
    games: [EGameResult, EGameResult, EGameResult, EGameResult, EGameResult]
}

export const exampleData: IRow[] = [
    {
        team: "Man. City",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        games: [
            EGameResult.Win,
            EGameResult.Win,
            EGameResult.Loss,
            EGameResult.Loss,
            EGameResult.Loss,
        ],
    },
    {
        team: "Liverpool",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        games: [
            EGameResult.Loss,
            EGameResult.Win,
            EGameResult.Loss,
            EGameResult.Draw,
            EGameResult.Draw,
        ],
    },
    {
        team: "Chelsea",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        games: [
            EGameResult.Draw,
            EGameResult.Win,
            EGameResult.Draw,
            EGameResult.Loss,
            EGameResult.Loss,
        ],
    },
    {
        team: "Arsenal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        games: [
            EGameResult.Loss,
            EGameResult.Win,
            EGameResult.Loss,
            EGameResult.Draw,
            EGameResult.Draw,
        ],
    },
    {
        team: "Tottenham",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        games: [
            EGameResult.Draw,
            EGameResult.Win,
            EGameResult.Draw,
            EGameResult.Loss,
            EGameResult.Loss,
        ],
    },
    {
        team: "Glasgow",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        games: [
            EGameResult.Win,
            EGameResult.Win,
            EGameResult.Loss,
            EGameResult.Loss,
            EGameResult.Loss,
        ],
    },
]

interface ITableRowProps extends IRow {
    position: number
    isHighlighted?: boolean
}

const TableRow: FC<ITableRowProps> = ({
    position,
    team,
    logo,
    isHighlighted,
}) => {
    return (
        <div
            className={cn(
                "bg-white grid grid-cols-[1fr_1fr_4fr] border-b first-:rounded-t-lg last:rounded-b-lg",
                {
                    "bg-green-500 group-hover:transition-all group-hover:scale-110 group-hover:shadow-md group-hover:rounded border-green-500 text-white transition-all":
                        isHighlighted,
                },
            )}
        >
            <div
                className={cn("p-1 border-r flex justify-center font-bold", {
                    "border-r-green-600 group-hover:border-r-0": isHighlighted,
                })}
            >
                {position}
            </div>
            <div className={"flex justify-center items-center"}>
                <img src={logo} className={"w-4 h-4"} />
            </div>
            <div
                className={cn("p-1", {
                    "font-semibold": isHighlighted,
                })}
            >
                {team}
            </div>
        </div>
    )
}

interface ILeagueTableMenuItemProps {
    rows: IRow[]
}

export const LeagueTableMenuItem: FC<ILeagueTableMenuItemProps> = ({
    rows,
}) => {
    return (
        <div className={"w-48 text-black text-xs"}>
            <div
                className={
                    "bg-white grid grid-cols-[1fr_1fr_4fr] border-b first-of-type:rounded-t-lg last-of-type:rounded-b-lg font-semibold"
                }
            >
                <div className={"p-1 border-r flex justify-center"}>No</div>
                <div></div>
                <div className={"p-1"}>Team</div>
            </div>
            {rows.map((row, index) => (
                <TableRow
                    key={index}
                    {...row}
                    position={index + 1}
                    isHighlighted={index + 1 === 2}
                />
            ))}
        </div>
    )
}
