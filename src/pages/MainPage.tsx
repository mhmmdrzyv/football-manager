import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const menuItems = [
    {
        id: "next-game",
        content: (
            <div className="flex flex-col justify-center gap-4">
                <div className="text-xl font-bold text-white mb-4 text-center">Next Game</div>
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/640px-FC_Barcelona_%28crest%29.svg.png"
                            alt="Team A Logo"
                            width={50}
                            height={50}
                            className="mx-auto"
                        />
                        <p className="mt-2">Team A</p>
                    </div>
                    <div className="text-2xl font-bold">VS</div>
                    <div className="text-center">
                        <img
                            src="https://banner2.cleanpng.com/20180602/psw/avor1i7ke.webp"
                            alt="Team B Logo"
                            width={50}
                            height={50}
                            className="mx-auto"
                        />
                        <p className="mt-2">Team Ali</p>
                    </div>
                </div>
                <div>
                    <p className="text-center text-lg">23:00</p>
                    <p className="text-center text-xs">31/12/2024</p>
                </div>
            </div>
        ),
    },
    {
        id: "game-plan",
        content: (
            <div className="flex flex-col items-center justify-center">
                <div className="text-xl font-bold text-white mb-4 text-center">Game Plan</div>
                <img
                    src={"https://img.freepik.com/premium-vector/football-match-strategy-scheme_95169-1928.jpg"}
                    alt="Game Plan"
                    className={"w-32 h-40 rounded-md"}
                />
            </div>
        ),
    },
    {
        id: "league-table",
        content: (
            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold text-white mb-4 text-center">Legue Table</div>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left">Team</th>
                            <th className="text-center">W</th>
                            <th className="text-center">D</th>
                            <th className="text-center">L</th>
                            <th className="text-center">P</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-gray-500">
                            <td>Team Above</td>
                            <td className="text-center">10</td>
                            <td className="text-center">2</td>
                            <td className="text-center">3</td>
                            <td className="text-center">32</td>
                        </tr>
                        <tr className="font-bold">
                            <td>Your Team</td>
                            <td className="text-center">9</td>
                            <td className="text-center">3</td>
                            <td className="text-center">3</td>
                            <td className="text-center">30</td>
                        </tr>
                        <tr className="text-gray-500">
                            <td>Team Below</td>
                            <td className="text-center">8</td>
                            <td className="text-center">4</td>
                            <td className="text-center">3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
    },
    {
        id: "settings",
        content: (
            <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white mb-4 text-center">Settings</div>
                <img
                    src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXtYN0-TzLYeMnm-_PHzu2EygIJi5e6cPO61yAsLzO6S4ZIJHDWvp5VxUK5ZBdviKiQo"
                    }
                    alt="Settings"
                    width={150}
                    height={150}
                />
            </div>
        ),
    },
]

export const MainPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length)
    }

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length)
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, black 0%, black 30%, #1e3a8a 90%, #1e40af 100%)",
            }}
        >
            <div className="w-full max-w-4xl">
                <div className="relative flex items-center justify-center">
                    <button onClick={prevItem} className="absolute left-0 z-10 text-white" aria-label="Previous item">
                        <ChevronLeft size={30} />
                    </button>
                    <div className="flex items-center justify-center space-x-4">
                        <AnimatePresence mode="popLayout">
                            {[-1, 0, 1].map((offset) => {
                                const itemIndex = (currentIndex + offset + menuItems.length) % menuItems.length
                                const item = menuItems[itemIndex]
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ scale: offset === 0 ? 0.8 : 0.6, opacity: offset === 0 ? 0 : 0.3 }}
                                        animate={{ scale: offset === 0 ? 1 : 0.6, opacity: offset === 0 ? 1 : 0.3 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.1 }}
                                        className={`w-64 h-64 ${offset === 0 ? "z-20" : "z-10"} max-w-[60vw]`}
                                    >
                                        <div className="w-full h-full bg-black bg-transparent backdrop-blur-md rounded-lg border border-white border-opacity-50 p-4 flex flex-col">
                                            <div className="flex-grow overflow-auto text-white">{item.content}</div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                    <button onClick={nextItem} className="absolute right-0 z-10 text-white" aria-label="Next item">
                        <ChevronRight size={30} />
                    </button>
                </div>
            </div>
        </div>
    )
}
