import { ScheduledRides } from "@/components/scheduled-rides"
import { BookedRides } from "@/components/booked-rides"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Scheduled Rides</h2>
          <ScheduledRides />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Booked Rides</h2>
          <BookedRides />
        </div>
      </div>
    </div>
  )
}

