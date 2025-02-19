"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ScheduleRideForm() {
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [seats, setSeats] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement ride scheduling logic
    console.log("Scheduling ride:", { source, destination, date, time, seats })
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <Label htmlFor="source">From</Label>
        <Input id="source" type="text" value={source} onChange={(e) => setSource(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="destination">To</Label>
        <Input
          id="destination"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="time">Time</Label>
        <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="seats">Available Seats</Label>
        <Input
          id="seats"
          type="number"
          min="1"
          max="10"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Schedule Ride
      </Button>
    </form>
  )
}

