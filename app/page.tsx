"use client"
import React, { useState } from "react"
import { Card } from "./components/Card"

export default function Home() {
  const [drones, setDrones] = useState([])
  const [instructions, setInstructions] = useState<string>()
  const [error, setError] = useState<string>()

  const postInstructions = () => {
    if (instructions) {
      console.log(instructions, "Instructions")
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const validChars = /^[\^v><x]*$/; // Regex: Only allows ^, v, >, <, x

    if (validChars.test(value)) {
      setInstructions(value)
      setError(""); // Clear error if valid
    } else {
      setError("Only ^, v, >, <, and x are allowed.");
    }

  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-extrabold">DRONE APP</h1>
      <div>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          postInstructions()
        }}>
          <input
            onChange={handleOnChange}
            placeholder="Drone instructions"
            className="border p-2"
          />
          <button
            className={`p-2 text-white font-semibold ${!!error || !instructions ? "bg-slate-300" : "bg-slate-800"}`}
            onClick={() => postInstructions()}
            disabled={!!error || !instructions}
          >
            submit
          </button>
        </form>
        {error && <p className="text-red-600 font-semibold">{error}</p>}
      </div>
      <Card />
    </div>
  );
}
