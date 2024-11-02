import { useState } from "react"
import { Button } from "@/vercel/components/ui/button"
import { Input } from "@/vercel/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/vercel/components/ui/card"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isFormValid = email.length >= 5 && email.includes("@") && email.includes(".") && password.length >= 8
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login attempted with:", { email, password })
        navigate("/setup")
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-8"
            style={{
                background: "linear-gradient(to bottom, black 0%, black 30%, #1e3a8a 90%, #1e40af 100%)",
            }}
        >
            <Card className="w-full max-w-md border border-white bg-transparent backdrop-blur-sm shadow-lg shadow-blue-500/50">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-200">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-transparent border-white text-white placeholder-gray-300 focus:border-white focus:ring-0 focus:border-opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-200">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-transparent border-white text-white placeholder-gray-300 focus:border-white focus:ring-0 focus:border-opacity-50"
                            />
                        </div>
                        <Button
                            onClick={handleLogin}
                            type="button"
                            className="w-full text-white bg-transparent border hover:bg-transparent border-white cursor-pointer transition-colors"
                            disabled={!isFormValid}
                        >
                            Login
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-300">
                        Don&apos;t have an account?{" "}
                        <a href="/register" className="text-blue-300 hover:no-underline font-semibold no-underline">
                            Register
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
