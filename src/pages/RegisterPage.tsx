import { useState } from "react"
import { Button } from "@/vercel/components/ui/button"
import { Input } from "@/vercel/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/vercel/components/ui/card"
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
    const [managerName, setManagerName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isFormValid = email.length >= 5 && email.includes("@") && email.includes(".") && password.length >= 8
    const navigate = useNavigate()

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Register attempted with:", { managerName, email, password })
        navigate("/login")
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-8"
            style={{
                background: "linear-gradient(to bottom, black 0%, black 30%, #1e3a8a 90%, #1e40af 100%)",
            }}
        >
            <Card className="w-full max-w-md border border-white bg-transparent backdrop-blur-sm shadow-lg shadow-blue-500/50 ">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="managerName" className="text-sm font-medium text-white">
                                Manager Name
                            </label>
                            <Input
                                id="managerName"
                                type="text"
                                placeholder="Enter your manager name"
                                value={managerName}
                                onChange={(e) => setManagerName(e.target.value)}
                                required
                                className="bg-transparent border-white text-white placeholder-gray-300 focus:border-white focus:ring-0 focus:border-opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white">
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
                            <label htmlFor="password" className="text-sm font-medium text-white">
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
                            onClick={handleRegister}
                            type="button"
                            className="w-full text-white bg-transparent border border-white cursor-pointer hover:bg-transparent"
                            disabled={!isFormValid}
                        >
                            Register
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-white">
                        Have an account?{" "}
                        <a href="/login" className="text-blue-300 font-semibold hover:no-underline">
                            Login
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
