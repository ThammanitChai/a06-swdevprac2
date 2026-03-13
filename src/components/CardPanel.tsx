'use client'

import { useReducer } from "react"
import Card from "./Card"

type RatingMap = Map<string, number>

function ratingReducer(state: RatingMap, action: any) {

  const newState = new Map(state)

  if (action.type === "set") {
    newState.set(action.venue, action.rating)
  }

  if (action.type === "remove") {
    newState.delete(action.venue)
  }

  return newState
}

export default function CardPanel() {

  const initialState: RatingMap = new Map([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0]
  ])

  const [ratings, dispatch] = useReducer(ratingReducer, initialState)

  return (

    <div>

      <div className="flex gap-4">

        <Card venueName="The Bloom Pavilion"
          onRating={(r:number)=>dispatch({type:"set",venue:"The Bloom Pavilion",rating:r})}
        />

        <Card venueName="Spark Space"
          onRating={(r:number)=>dispatch({type:"set",venue:"Spark Space",rating:r})}
        />

        <Card venueName="The Grand Table"
          onRating={(r:number)=>dispatch({type:"set",venue:"The Grand Table",rating:r})}
        />

      </div>

      <div className="mt-6">

        <h3>Venue List with Ratings : {ratings.size}</h3>

        {[...ratings.entries()].map(([venue, rating]) => (

          <div
            key={venue}
            data-testid={venue}
            onClick={()=>dispatch({type:"remove",venue})}
          >
            {venue} Rating : {rating}
          </div>

        ))}

      </div>

    </div>
  )
}