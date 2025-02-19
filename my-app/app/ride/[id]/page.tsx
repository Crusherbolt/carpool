import { RideDetails } from "@/components/ride-details"

export default function RideDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Ride Details</h1>
      <RideDetails id={params.id} />
    </div>
  )
}

