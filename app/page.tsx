"use client"
import React, { useState } from "react"
import { Card } from "./components/Card"
import { postInstructions, getBillboard } from "../lib/api"
import { billboardTypes, postInstructionsTypes, billboardResponseTypes } from "../types/billboardTypes"


export default function Home() {
  const [billboardData, setBillboardData] = useState<billboardTypes[]>([])
  const [instructions, setInstructions] = useState<string | null>()
  const [error, setError] = useState<string | null>()
  const [clipboardMessage, setClipboardMessage] = useState<string>("")

  const [billboardId, setBillboardId] = useState<string | null>()


  const sampleInput = ["x^xv", "x^^x>>xvvx<<x", "xx"]
  const sampleInputID = ["dcaa9b7b6dea88d45b2daafd", "d9ac834ad7633173a8d1a2d6", "08e150ffcbc3c7ebc3a4afee"]
  const onSubmit = () => {
    if (instructions) {
      setBillboardId("")
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

  const onSubmitFind = () => {
    if (billboardId) {
      setInstructions("")
      getBillboard(billboardId).then((result: billboardResponseTypes) => {
        const { billboard, success } = result
        if (success) {
          setBillboardData([billboard])
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }

  const copyToClipBoard = (e: React.MouseEvent) => {
    const textToCopy = (e.target as HTMLElement).innerText;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setClipboardMessage('Text copied to clipboard!');
      },
      () => {
        setClipboardMessage('Failed to copy text.');
      }
    );
    setTimeout(() => setClipboardMessage(""), 1500)
  }
  return (
    <div className="container-fluid min-h-screen flex flex-col items-center">
      <h1 className="text-6xl mt-12 font-extrabold">DRONE APP</h1>
      <div className="text-left mt-4 p-4">
        <p><span className="font-semibold">Instruction:</span> {`Bigdatr's aerial drone follows simple commands to move and take photos. It can move 1 km in four directions: north (^), south (v), east (>), or west (<). The drone captures a photo when it receives the "x" command.`}</p>
        <p className="pt-2 font-semibold">Sample input (click to copy to clipboard):
          {sampleInput.map((i, k) => <span onClick={copyToClipBoard} key={k} className="bg-gray-200 p-2 mx-1 rounded-md cursor-pointer">{i}</span>)}
        </p>
        <p className="pt-2 font-semibold">Find Feature:
          <span className="font-medium">You can also try to use the Find feature, just supply the ID of the billboard</span>
          {" "}Example{sampleInputID.map((i, k) => <span onClick={copyToClipBoard} key={k} className="bg-gray-200 p-2 mx-1 rounded-md cursor-pointer">{i}</span>)}
        </p>
        <span className="font-semibold">{clipboardMessage}</span>
      </div>
      <div className="mt-4 lg:w-1/2 w-full p-2 flex">
        <form className="w-full" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          onSubmit()
        }}>
          <div className="flex">
            <input
              value={instructions ? instructions : ""}
              onChange={(handleOnChange)}
              placeholder="Drone instructions"
              className="border-2 p-2 w-full border-r-0"
            />
            <button
              className={`w-36 p-2 text-white font-semibold ${!!error || !instructions ? "bg-slate-300" : "bg-slate-800"}`}
              onClick={() => onSubmit()}
              disabled={!!error || !instructions}
            >
              SUBMIT
            </button>
          </div>
          {error ? <p className="text-red-600 font-semibold">{error}</p> : <p className="mt-6" />}
        </form>
      </div>

      <div className="lg:w-1/2 w-full p-2 flex">
        <form className="w-full" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          onSubmitFind()
        }}>
          <div className="flex">
            <input
              value={billboardId ? billboardId : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBillboardId(event.target.value)}
              placeholder="Find billboard"
              className="border-2 p-2 w-full border-r-0"
            />
            <button
              className={`w-36 p-2 text-white font-semibold ${billboardId && billboardId.length > 0 ? "bg-green-800" : "bg-slate-300"}`}
              onClick={() => onSubmitFind()}
              disabled={billboardId && billboardId.length > 0 ? false : true}
            >
              FIND
            </button>
          </div>
        </form>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 p-6">
        {
          billboardData && billboardData.map((item: billboardTypes, key: number) => <Card item={item} key={key} />)
        }
      </div>
      {
        billboardData?.length === 0 && <div className="border p-40"><p className="text-6xl font-bold text-gray-200">NO DATA RETRIEVED</p></div>
      }
    </div>
  );
}
