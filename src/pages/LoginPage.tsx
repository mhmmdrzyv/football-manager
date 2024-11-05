import { useState } from "react"
import { Button } from "@/vercel/components/ui/button"
import { Input } from "@/vercel/components/ui/input"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/vercel/components/ui/card"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    const handleLogin = () => {
        console.log("Login attempted with:", { email, password })
        navigate("/setup")
    }

    return (
        <div className="h-dvh flex items-center justify-center bg-gray-900 p-4">
            <Card className="w-full max-w-md bg-transparent border border-gray-500">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-center text-white">
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent border-gray-500 text-white placeholder-gray-500 focus:border-gray-700 focus:ring-0"
                                spellCheck={false}
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-transparent border-gray-500 text-white placeholder-gray-500 focus:border-gray-700 focus:ring-0"
                            />
                        </div>
                        <Button
                            onClick={handleLogin}
                            className="w-full bg-transparent border border-gray-500 text-white hover:bg-transparent"
                        >
                            Login
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-400">
                        Don&apos;t have an account?{" "}
                        <a href="/register" className="text-blue-300">
                            Register
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
