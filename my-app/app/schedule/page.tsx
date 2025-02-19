import { ScheduleRideForm } from "@/components/schedule-ride-form"

export default function ScheduleRidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Schedule a Ride</h1>
      <ScheduleRideForm />
    </div>
  )
}

