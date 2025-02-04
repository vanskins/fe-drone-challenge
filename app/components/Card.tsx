import React from 'react'
import Image from 'next/image';
import { billboardTypes } from "../../types/billboardTypes"

interface CardI {
  item: billboardTypes;
}

export const Card = ({ item }: CardI) => {
  console.log(item)
  return (
    <div className="p-4 bg-slate-200 w-1/4">
      <p>ID - {item.id}</p>
      <Image width={400} height={400} src={item.image} alt={item.advertiser} />
      <p>by - {item.advertiser}</p>
      <p>{item.address}</p>
      <p>{item.billboardText}</p>
    </div>
  )
}
