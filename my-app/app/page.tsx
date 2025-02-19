import { SearchRideForm } from "@/components/search-ride-form"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to CarPoolHub</h1>
      <p className="text-xl text-center mb-8">Find or schedule a carpool ride today!</p>
      <SearchRideForm />
    </div>
  )
}

