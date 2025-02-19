"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type BookedRide = {
  id: string
  source: string
  destination: string
  date: string
  time: string
}

export function BookedRides() {
  const [rides, setRides] = useState<BookedRide[]>([])

  useEffect(() => {
    // TODO: Fetch booked rides from API
    const mockRides: BookedRide[] = [
      { id: "3", source: "Chicago", destination: "Detroit", date: "2025-03-10", time: "10:00" },
      { id: "4", source: "Seattle", destination: "Portland", date: "2025-03-15", time: "13:00" },
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
            <Link href={`/ride/${ride.id}`}>
              <Button className="mt-2">View Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

