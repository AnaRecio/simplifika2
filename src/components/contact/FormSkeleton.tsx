export function FormSkeleton() {
  return (
    <div className="animate-pulse p-6 space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-1/3"></div>
    </div>
  );
}