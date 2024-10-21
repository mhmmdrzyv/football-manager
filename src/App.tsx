import "./index.scss"
import { Button } from "./components/Button.tsx"
import { Checkbox } from "./components/Checkbox.tsx"
import { TextInput } from "./components/TextInput.tsx"
import { Stack } from "./components/Stack.tsx"
import { MyProvider } from "./context/MyProvider.tsx"

function App() {
    return (
        <div>
            <MyProvider>
                <Stack>
                    <Button>Click</Button>
                    <Checkbox />
                </Stack>
            </MyProvider>
            <TextInput />
        </div>
    )
}

export default App
