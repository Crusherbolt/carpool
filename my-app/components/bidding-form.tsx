"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type RideBidInfo = {
  id: string
  source: string
  destination: string
  date: string
  time: string
  currentHighestBid: number
}

export function BiddingForm({ id }: { id: string }) {
  const [ride, setRide] = useState<RideBidInfo | null>(null)
  const [bidAmount, setBidAmount] = useState("")
  const router = useRouter()

  useEffect(() => {
    // TODO: Fetch ride bidding info from API
    const mockRide: RideBidInfo = {
      id,
      source: "New York",
      destination: "Boston",
      date: "2025-03-01",
      time: "09:00",
      currentHighestBid: 30,
    }
    setRide(mockRide)
  }, [id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement bid submission logic
    console.log("Submitting bid:", { rideId: id, amount: bidAmount })
    router.push("/dashboard")
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
        <p>Current Highest Bid: ${ride.currentHighestBid}</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="bidAmount">Your Bid</Label>
            <Input
              id="bidAmount"
              type="number"
              min={ride.currentHighestBid + 1}
              step="0.01"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Place Bid</Button>
        </form>
      </CardContent>
    </Card>
  )
}

