import { BiddingForm } from "@/components/bidding-form"

export default function BiddingPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Place Your Bid</h1>
      <BiddingForm id={params.id} />
    </div>
  )
}

