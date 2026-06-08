export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-6 py-16 max-w-6xl mx-auto w-full">
        {/* Hero skeleton */}
        <div className="h-[80vh] rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 animate-pulse mb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-200 animate-pulse" />
            <div className="h-6 w-48 mx-auto bg-blue-200 rounded-full animate-pulse mb-3" />
            <div className="h-12 w-96 max-w-[80vw] mx-auto bg-blue-200 rounded-xl animate-pulse mb-4" />
            <div className="h-4 w-64 mx-auto bg-blue-100 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Section skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
