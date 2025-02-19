import { SearchResults } from "@/components/search-results"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { source: string; destination: string; date: string }
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Search Results</h1>
      <SearchResults source={searchParams.source} destination={searchParams.destination} date={searchParams.date} />
    </div>
  )
}

