"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type Ride = {
  id: string
  source: string
  destination: string
  date: string
  time: string
  availableSeats: number
}

export function ScheduledRides() {
  const [rides, setRides] = useState<Ride[]>([])

  useEffect(() => {
    // TODO: Fetch scheduled rides from API
    const mockRides: Ride[] = [
      { id: "1", source: "New York", destination: "Boston", date: "2025-03-01", time: "09:00", availableSeats: 3 },
      {
        id: "2",
        source: "Los Angeles",
        destination: "San Francisco",
        date: "2025-03-05",
        time: "14:00",
        availableSeats: 2,
      },
    ]
    setRides(mockRides)
  }, [])

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
            <Link href={`/ride/${ride.id}`}>
              <Button className="mt-2">View Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

