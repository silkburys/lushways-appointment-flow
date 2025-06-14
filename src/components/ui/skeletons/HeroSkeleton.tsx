
import { Skeleton } from '../skeleton';

const HeroSkeleton = () => {
  return (
    <section className="pt-24 md:pt-32 relative overflow-hidden min-h-screen">
      {/* Background skeleton */}
      <div className="absolute inset-0 z-0">
        <Skeleton className="w-full h-full" />
      </div>
      
      {/* Content skeleton */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <Skeleton className="h-12 md:h-16 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 md:h-8 w-1/2 mx-auto mb-8" />
        </div>
        
        {/* Booking modal skeleton */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
