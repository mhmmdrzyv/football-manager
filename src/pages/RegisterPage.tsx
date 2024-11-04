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

export const RegisterPage = () => {
    const [managerName, setManagerName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleRegister = () => {
        console.log("Register attempted with:", {
            managerName,
            email,
            password,
        })
    }

    return (
        <div className="h-dvh flex items-center justify-center bg-gray-900 p-4">
            <Card className="w-full max-w-md bg-transparent border border-gray-500">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-center text-white">
                        Register
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                placeholder="Manager Name"
                                value={managerName}
                                onChange={(e) => setManagerName(e.target.value)}
                                className="bg-transparent border-gray-500 text-white placeholder-gray-500 focus:border-gray-700 focus:ring-0"
                                spellCheck={false}
                            />
                        </div>
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
                            onClick={handleRegister}
                            className="w-full bg-transparent border border-gray-500 text-white hover:bg-transparent"
                        >
                            Register
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-400">
                        Have an account?{" "}
                        <a href="/login" className="text-blue-300">
                            Login
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
