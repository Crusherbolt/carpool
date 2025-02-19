"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type RideDetails = {
  id: string
  source: string
  destination: string
  date: string
  time: string
  availableSeats: number
  price: number
  driverName: string
}

export function RideDetails({ id }: { id: string }) {
  const [ride, setRide] = useState<RideDetails | null>(null)
  const router = useRouter()

  useEffect(() => {
    // TODO: Fetch ride details from API
    const mockRide: RideDetails = {
      id,
      source: "New York",
      destination: "Boston",
      date: "2025-03-01",
      time: "09:00",
      availableSeats: 3,
      price: 25,
      driverName: "John Doe",
    }
    setRide(mockRide)
  }, [id])

  const handleBookRide = () => {
    // TODO: Implement booking logic
    console.log("Booking ride:", id)
    router.push("/dashboard")
  }

  const handleBidRide = () => {
    router.push(`/bid/${id}`)
  }

  if (!ride) {
    return <div>Loading...</div>
  }

  return (
    <Card>
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
        <p>Driver: {ride.driverName}</p>
        <div className="mt-4 space-x-4">
          <Button onClick={handleBookRide}>Book Ride</Button>
          <Button variant="outline" onClick={handleBidRide}>
            Place Bid
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

