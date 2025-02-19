"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type SearchRide = {
  id: string
  source: string
  destination: string
  date: string
  time: string
  availableSeats: number
  price: number
}

type SearchResultsProps = {
  source: string
  destination: string
  date: string
}

export function SearchResults({ source, destination, date }: SearchResultsProps) {
  const [rides, setRides] = useState<SearchRide[]>([])

  useEffect(() => {
    // TODO: Fetch search results from API
    const mockRides: SearchRide[] = [
      { id: "5", source, destination, date, time: "08:00", availableSeats: 2, price: 25 },
      { id: "6", source, destination, date, time: "12:00", availableSeats: 3, price: 30 },
      { id: "7", source, destination, date, time: "16:00", availableSeats: 1, price: 35 },
    ]
    setRides(mockRides)
  }, [source, destination, date])

  return (
    <div className="space-y-4">
      {rides.map((ride) => (
        <Card key={ride.id}>
          <CardHeader>
            <CardTitle>
              {ride.source} to {ride.destination}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: {ride.date}</p>
            <p>Time: {ride.time}</p>
            <p>Available Seats: {ride.availableSeats}</p>
            <p>Price: ${ride.price}</p>
            <Link href={`/ride/${ride.id}`}>
              <Button className="mt-2">View Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

