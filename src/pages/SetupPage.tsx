import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const teams = [
    {
        name: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png",
        league: "Premier League",
    },
    {
        name: "Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/640px-FC_Barcelona_%28crest%29.svg.png",
        league: "La Liga",
    },
    {
        name: "Bayern Munich",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        league: "Bundesliga",
    },
    {
        name: "Paris Saint-Germain",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
        league: "Ligue 1",
    },
    {
        name: "Juventus",
        logo: "https://upload.wikimedia.org/wikipedia/tr/3/39/Juventus_FC_logo.png",
        league: "Serie A",
    },
    {
        name: "Liverpool",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
        league: "Premier League",
    },
    {
        name: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
        league: "La Liga",
    },
    {
        name: "Borussia Dortmund",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
        league: "Bundesliga",
    },
    {
        name: "AC Milan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png",
        league: "Serie A",
    },
    {
        name: "Ajax",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/1200px-Ajax_Amsterdam.svg.png",
        league: "Eredivisie",
    },
    {
        name: "Porto",
        logo: "https://upload.wikimedia.org/wikipedia/tr/5/52/FC.Porto.png",
        league: "Primeira Liga",
    },
    {
        name: "Atletico Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/93/Logo_Atl%C3%A9tico_Madrid_2017.svg/1200px-Logo_Atl%C3%A9tico_Madrid_2017.svg.png",
        league: "La Liga",
    },
    {
        name: "Inter Milan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Inter_Old_Logo_%282007-2014%29.svg",
        league: "Serie A",
    },
    {
        name: "Chelsea",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
        league: "Premier League",
    },
    {
        name: "Galatasaray",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Galatasaray_Sports_Club_Logo.png",
        league: "Süper Lig",
    },
    {
        name: "Qarabağ",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Qaraba%C4%9F_FK_logo.png/190px-Qaraba%C4%9F_FK_logo.png",
        league: "Topaz Premyer Liqası",
    },
    {
        name: "Bayer Leverkusen",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png",
        league: "Bundesliga",
    },
    {
        name: "Napoli",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/2048px-SSC_Neapel.svg.png",
        league: "Serie A",
    },
    {
        name: "Sevilla",
        logo: "https://upload.wikimedia.org/wikipedia/tr/e/ed/Sevillafc.png",
        league: "La Liga",
    },
    {
        name: "Arsenal",
        logo: "https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png",
        league: "Premier League",
    },
]

export const SetupPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const navigate = useNavigate()

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length)
    }

    const prevItem = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + teams.length) % teams.length,
        )
    }

    return (
        <div className="h-dvh flex items-center justify-center bg-gray-900 p-4 overflow-hidden">
            <div className="w-full max-w-4xl">
                <div className="text-3xl text-white text-center mb-4">
                    Welcome manager !
                </div>
                <div className="text-lg  text-gray-300 text-center mb-8">
                    Your current manager level is 1. As first experience, you
                    can choose one of these 20 teams. Good luck!
                </div>
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={prevItem}
                        className="absolute left-0 z-10 text-white"
                        aria-label="Previous team"
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <div className="flex items-center justify-center space-x-4">
                        <AnimatePresence mode="popLayout">
                            {[-1, 0, 1].map((offset) => {
                                const itemIndex =
                                    (currentIndex + offset + teams.length) %
                                    teams.length
                                const team = teams[itemIndex]
                                return (
                                    <motion.div
                                        onClick={() => navigate("/main")}
                                        key={team.name}
                                        initial={{
                                            scale: offset === 0 ? 0.8 : 0.6,
                                            opacity: offset === 0 ? 0 : 0.3,
                                        }}
                                        animate={{
                                            scale: offset === 0 ? 1 : 0.6,
                                            opacity: offset === 0 ? 1 : 0.3,
                                        }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.1 }}
                                        className={`w-64 h-64 ${offset === 0 ? "z-20" : "z-10"} max-w-[60vw] cursor-pointer`}
                                    >
                                        <div className="w-full h-full bg-transparent rounded-lg border border-white border-opacity-40 p-4 flex flex-col items-center justify-center">
                                            <img
                                                src={team.logo}
                                                alt={`${team.name} logo`}
                                                width={50}
                                                height={50}
                                                className="mb-2"
                                            />
                                            <h2 className="text-lg font-semibold text-center text-white">
                                                {team.name}
                                            </h2>
                                            <p className="text-sm text-gray-300 text-center">
                                                {team.league}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                    <button
                        onClick={nextItem}
                        className="absolute right-0 z-10 text-white"
                        aria-label="Next team"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}
