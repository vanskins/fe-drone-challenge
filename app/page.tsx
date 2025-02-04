"use client"
import React, { useState } from "react"
import { Card } from "./components/Card"
import { postInstructions } from "../lib/api"
import { billboardTypes, postInstructionsTypes } from "../types/billboardTypes"


export default function Home() {
  const [billboardData, setBillboardData] = useState<billboardTypes[]>()
  const [instructions, setInstructions] = useState<string | null>()
  const [error, setError] = useState<string | null>()

  const onSubmit = () => {
    if (instructions) {
      postInstructions(instructions).then((result: postInstructionsTypes) => {
        const { billboards, success } = result
        if (success) {
          setBillboardData(billboards)
        }
      }).catch(error => {
        console.log(error)
      })
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
    <div className="container-fluid min-h-screen flex flex-col items-center bg-green-400">
      <h1 className="text-4xl font-extrabold">DRONE APP</h1>
      <p>sample x^xv</p>
      <div className="m-4">
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          onSubmit()
        }}>
          <input
            onChange={handleOnChange}
            placeholder="Drone instructions"
            className="border p-2"
          />
          <button
            className={`p-2 text-white font-semibold ${!!error || !instructions ? "bg-slate-300" : "bg-slate-800"}`}
            onClick={() => onSubmit()}
            disabled={!!error || !instructions}
          >
            submit
          </button>
        </form>
        {error && <p className="text-red-600 font-semibold">{error}</p>}
      </div>
      <div className="flex flex-col gap-4 p-4">
        {
          billboardData && billboardData.map((item: billboardTypes, key: number) => <Card item={item} key={key} />)
        }
      </div>
    </div>
  );
}
