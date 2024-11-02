import { useState } from "react"
import { Card, CardContent } from "@/vercel/components/ui/card"
import { useNavigate } from "react-router-dom"

const teams = [
    { name: "Manchester United", logo: "/placeholder.svg?height=50&width=50", league: "Premier League" },
    { name: "Barcelona", logo: "/placeholder.svg?height=50&width=50", league: "La Liga" },
    { name: "Bayern Munich", logo: "/placeholder.svg?height=50&width=50", league: "Bundesliga" },
    { name: "Paris Saint-Germain", logo: "/placeholder.svg?height=50&width=50", league: "Ligue 1" },
    { name: "Juventus", logo: "/placeholder.svg?height=50&width=50", league: "Serie A" },
    { name: "Liverpool", logo: "/placeholder.svg?height=50&width=50", league: "Premier League" },
    { name: "Real Madrid", logo: "/placeholder.svg?height=50&width=50", league: "La Liga" },
    { name: "Borussia Dortmund", logo: "/placeholder.svg?height=50&width=50", league: "Bundesliga" },
    { name: "AC Milan", logo: "/placeholder.svg?height=50&width=50", league: "Serie A" },
    { name: "Ajax", logo: "/placeholder.svg?height=50&width=50", league: "Eredivisie" },
    { name: "Porto", logo: "/placeholder.svg?height=50&width=50", league: "Primeira Liga" },
    { name: "Atletico Madrid", logo: "/placeholder.svg?height=50&width=50", league: "La Liga" },
    { name: "Inter Milan", logo: "/placeholder.svg?height=50&width=50", league: "Serie A" },
    { name: "Chelsea", logo: "/placeholder.svg?height=50&width=50", league: "Premier League" },
    { name: "Benfica", logo: "/placeholder.svg?height=50&width=50", league: "Primeira Liga" },
    { name: "Zenit St. Petersburg", logo: "/placeholder.svg?height=50&width=50", league: "Russian Premier League" },
    { name: "Lyon", logo: "/placeholder.svg?height=50&width=50", league: "Ligue 1" },
    { name: "Napoli", logo: "/placeholder.svg?height=50&width=50", league: "Serie A" },
    { name: "Sevilla", logo: "/placeholder.svg?height=50&width=50", league: "La Liga" },
    { name: "RB Leipzig", logo: "/placeholder.svg?height=50&width=50", league: "Bundesliga" },
]

export const SetupPage = () => {
    const [disabledTeams] = useState(() => {
        const shuffled = [...teams].sort(() => 0.5 - Math.random())
        return new Set(shuffled.slice(0, 10).map((team) => team.name))
    })

    const navigate = useNavigate()

    return (
        <div
            className="min-h-screen flex items-center justify-center p-8"
            style={{
                background: "linear-gradient(to bottom, black 0%, black 30%, #1e3a8a 90%, #1e40af 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-4">Welcome to Football Manager</h1>
                <p className="text-xl text-white text-center mb-8">
                    You are at level 1. Please choose your team to begin your journey.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                    {teams.map((team) => (
                        <Card
                            onClick={() => navigate("/main")}
                            key={team.name}
                            className={`
                relative overflow-hidden
                ${disabledTeams.has(team.name) ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-110"}
              `}
                            style={{
                                aspectRatio: "1 / 1",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                background: "transparent",
                            }}
                        >
                            <CardContent className="flex flex-col items-center justify-center h-full p-4">
                                <img
                                    src={team.logo}
                                    alt={`${team.name} logo`}
                                    width={50}
                                    height={50}
                                    className="mb-2"
                                />
                                <h2 className="text-sm sm:text-base font-semibold text-center text-white">
                                    {team.name}
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-300 text-center">{team.league}</p>
                            </CardContent>
                            {disabledTeams.has(team.name) && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white font-semibold">Unavailable</span>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
