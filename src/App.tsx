import "./index.scss"
import { Button } from "./components/Button.tsx"
import { Checkbox } from "./components/Checkbox.tsx"
import { TextInput } from "./components/TextInput.tsx"
import { Stack } from "./components/Stack.tsx"
import { MyProvider } from "./context/MyProvider.tsx"

function App() {
    return (
        <MyProvider>
            <Stack>
                <Button>Click</Button>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <TextInput />
            </Stack>
        </MyProvider>
    )
}

export default App
