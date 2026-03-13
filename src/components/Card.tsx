'use client'

import Image from "next/image"
import Rating from "@mui/material/Rating"
import { useState } from "react"

export default function Card(
{
  venueName,
  imgSrc,
  onRating
}:
{
  venueName:string,
  imgSrc:string,
  onRating:(rating:number)=>void
}){

  const [rating,setRating] = useState<number|null>(0)

  return(

    <div className="w-[250px] shadow-lg rounded-lg bg-white p-2">

      <Image
        src={imgSrc}
        alt={venueName}
        width={250}
        height={150}
        className="rounded-lg"
      />

      <div className="font-semibold mt-2">
        {venueName}
      </div>

      <Rating
        id={venueName + " Rating"}
        name={venueName + " Rating"}
        data-testid={venueName + " Rating"}
        value={rating}
        onChange={(event,newValue)=>{
          setRating(newValue)
          onRating(newValue ?? 0)
        }}
      />

    </div>

  )
}