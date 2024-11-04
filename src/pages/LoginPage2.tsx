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

export const LoginPage2 = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login attempted with:", { email, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <Card className="w-full max-w-md bg-transparent border border-gray-700">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                id="email"
                                type="email"
                                placeholder="E-posta adresiniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-transparent border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:ring-0 hover:border-gray-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                id="password"
                                type="password"
                                placeholder="Şifreniz"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-transparent border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:ring-0 hover:border-gray-700"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-transparent border border-gray-700 text-white hover:bg-transparent hover:border-gray-700"
                        >
                            Giriş Yap
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-400">
                        Don&apos;t have an account?{" "}
                        <a
                            href="/register"
                            className="text-blue-400 hover:text-blue-300 no-underline"
                        >
                            Register
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
