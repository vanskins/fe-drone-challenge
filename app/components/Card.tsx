import React from 'react'
import Image from 'next/image';
import { billboardTypes } from "../../types/billboardTypes"

interface CardI {
  item: billboardTypes;
}

export const Card = ({ item }: CardI) => {
  console.log(item)
  return (
    <div className="flex flex-col bg-slate-200 w-full max-w-md rounded-lg shadow-md">

      <div className="w-full">
        <Image
          width={400}
          height={400}
          src={item.image}
          alt={item.advertiser}
          className="w-full h-auto object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <p>ID - {item.id}</p>
        <p>by - {item.advertiser}</p>
        <p>{item.address}</p>
        <p>{item.billboardText}</p>
      </div>
    </div>
  )
}
