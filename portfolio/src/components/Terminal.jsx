import { useState, useEffect, useRef } from "react"
import runCommand, { commands } from "./commands"

function Terminal(){

    const [history, setHistory] = useState([])
    const [input, setInput] = useState("")
    const outputRef = useRef(null)
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [searchMatches, setSearchMatches] = useState([])

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight
        }
    }, [history])

    return (
        <div className="h-screen bg-[#0d1117] p-2">
            {/* Terminal Window */}
            <div className=" flex flex-col w-full h-full mx-auto bg-[#161b22] rounded-lg overflow-hidden"
                 style={{boxShadow: '0 0 40px rgba(121, 192, 255, 0.08)'}}>
            
                {/* Title Bar */}
                <div className="bg-[#21262d] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                <span className="text-[#768390] text-xs mx-auto">arvind@portfolio — zsh</span>
            </div>

            {/* Output Area */}
            <div ref={outputRef} className="overflow-y-auto text-[#cdd9e5] text-sm leading-7">
                {history.map((entry, index) => (
                    <div key={index}>
                        <p className="text-[#57ab5a]">arvind@portfolio ~ % <span className="text-[#cdd9e5]">{entry.command}</span></p>
                        <pre className="text-[#cdd9e5] whitespace-pre-wrap">{entry.output}</pre>
                    </div>
                ))}
            </div>

            {searchMatches.length > 1 && (
            <div className="px-4 text-[#768390] text-sm">
                {searchMatches.join("  ")}
            </div>
            )}

            {/* Input Line */}
            <div className="px-4 pb-4 flex items-center gap-2">
                <span className="text-[#57ab5a] text-sm">arvind@portfolio ~ %</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                        setSearchMatches([])
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown"){
                            if (history.length === 0) return
                            if (historyIndex === -1) {
                                setHistoryIndex(0)
                                setInput(history[0].command)
                            } else if (historyIndex < history.length - 1) {
                                setHistoryIndex(historyIndex + 1)
                                setInput(history[historyIndex + 1].command)
                            }
                        }
                        if (e.key === "ArrowUp"){
                            if (history.length === 0) return
                            if (historyIndex > 0) {
                                setHistoryIndex(historyIndex - 1)
                                setInput(history[historyIndex - 1].command)
                            } else {
                                setHistoryIndex(-1)
                                setInput("")
                            }
                        }
                        if (e.key === "Tab"){
                            e.preventDefault()
                            const commands_list = Object.keys(commands).map(cmd => cmd.toLowerCase())
                            const matches = commands_list.filter(cmd => cmd.startsWith(input.toLowerCase()))
                            if (matches.length === 1) {
                                setInput(matches[0] + " ")
                            } else if (matches.length > 1) {
                                setSearchMatches(matches)
                            }
                        }

                        if (e.key === "Enter") {
                            if (input.trim().toLowerCase() === "clear" || input.trim().toLowerCase() === "cls") {
                                setHistory([])
                                setInput("")
                                return
                            }
                            if (input.trim().toLowerCase() === "history") {
                                const historyOutput = history.map(entry => entry.command).join("\n")
                                const newEntry = { command: input, output: historyOutput }
                                setHistory([...history, newEntry])
                                setInput("")
                                return
                            }
                            const newEntry = { command: input, output: runCommand(input) }
                            setHistory([...history, newEntry])
                            setInput("")
                            }
                        }}
                        className="bg-transparent outline-none text-[#cdd9e5] text-sm flex-1 caret-[#79c0ff]"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    )
}

export default Terminal