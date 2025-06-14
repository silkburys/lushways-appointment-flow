import { Skeleton } from '../skeleton';
import HeroSkeleton from './HeroSkeleton';
import SectionSkeleton from './SectionSkeleton';
import LocationsSkeleton from './LocationsSkeleton';

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header skeleton - keep visible during loading */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 md:h-10 w-32" />
            <div className="hidden md:flex items-center space-x-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-20" />
              ))}
            </div>
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </header>

      {/* Hero section skeleton */}
      <HeroSkeleton />

      {/* Shop section skeleton */}
      <SectionSkeleton title cards={3} background="gray" />

      {/* Services section skeleton */}
      <SectionSkeleton title cards={3} background="white" />

      {/* Locations section skeleton */}
      <LocationsSkeleton />

      {/* Reviews section skeleton */}
      <SectionSkeleton title cards={1} background="white" />

      {/* Instagram section skeleton */}
      <SectionSkeleton title cards={6} background="gray" />

      {/* Footer skeleton */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-32 mb-4 bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-gray-700" />
                  <Skeleton className="h-4 w-3/4 bg-gray-700" />
                  <Skeleton className="h-4 w-1/2 bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageSkeleton;
