import { useState } from "react"
import runCommand from "./commands"

function Terminal(){

    const [history, setHistory] = useState([])
    const [input, setInput] = useState("")


    return(
        <div>
            <div>
                <h1>Terminal Component</h1>
                <div>
                    {history.map((entry, index) => (
                        <div key={index}>
                            <p>{entry.command}</p>
                            <p>{entry.output}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                const newEntry = { command: input, output: runCommand(input) }
                                setHistory([...history, newEntry])
                                setInput("")
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Terminal