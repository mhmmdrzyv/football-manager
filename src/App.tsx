import "./index.scss"
import { Components } from "@/pages/Components.tsx"
import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterPage } from "@/pages/RegisterPage.tsx"
import { SetupPage } from "@/pages/SetupPage.tsx"
import { MainPage } from "@/pages/MainPage.tsx"
import { LoginPage } from "@/pages/LoginPage.tsx"

function App() {
    return (
        <Routes>
            <Route path={"/"}>
                <Route path={""} element={<Navigate to={"login"} />} />
                <Route path={"login"} element={<LoginPage />} />
                <Route path={"register"} element={<RegisterPage />} />
                <Route path={"setup"} element={<SetupPage />} />
                <Route path={"main"} element={<MainPage />} />
                <Route path={"components"} element={<Components />} />
            </Route>
        </Routes>
    )
}

export default App
