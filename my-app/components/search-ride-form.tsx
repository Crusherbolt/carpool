"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SearchRideForm() {
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?source=${source}&destination=${destination}&date=${date}`)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <Label htmlFor="source">From</Label>
        <Input
          id="source"
          type="text"
          placeholder="Enter source location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="destination">To</Label>
        <Input
          id="destination"
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full">
        Search Rides
      </Button>
    </form>
  )
}

