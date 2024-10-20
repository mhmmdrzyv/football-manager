import "./index.scss"
import { Button } from "./components/Button.tsx"
import { Checkbox } from "./components/Checkbox.tsx"
import { TextInput } from "./components/TextInput.tsx"
import { Stack } from "./components/Stack.tsx"

function App() {
    return (
        <Stack>
            <Button>Click</Button>
            <Checkbox />
            <TextInput />
        </Stack>
    )
}

export default App
