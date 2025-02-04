import React from 'react'
import Image from 'next/image';
import { billboardTypes } from "../../types/billboardTypes"

interface CardI {
  item: billboardTypes;
}

export const Card = ({ item }: CardI) => {

  return (
    <div className="flex flex-col bg-white w-full max-w-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-full rounded-t-lg overflow-hidden">
        <Image
          width={400}
          height={400}
          src={item.image}
          alt={item.advertiser}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.advertiser}</h2>
        <p className="text-sm text-gray-500 mb-2">ID: {item.id}</p>
        <p className="text-sm text-gray-600 mb-4">{item.address}</p>
        <p className="text-sm text-gray-700">{item.billboardText}</p>
      </div>
    </div>
  )
}
