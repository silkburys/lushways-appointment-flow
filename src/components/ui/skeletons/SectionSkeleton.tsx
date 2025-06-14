
import { Skeleton } from '../skeleton';

interface SectionSkeletonProps {
  title?: boolean;
  cards?: number;
  layout?: 'grid' | 'list';
  background?: 'white' | 'gray';
}

const SectionSkeleton = ({ 
  title = true, 
  cards = 3, 
  layout = 'grid',
  background = 'white' 
}: SectionSkeletonProps) => {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {title && <Skeleton className="h-10 md:h-12 w-48 mx-auto mb-16" />}
        
        <div className={`grid grid-cols-1 ${layout === 'grid' ? 'md:grid-cols-3' : 'md:grid-cols-1'} gap-8`}>
          {Array.from({ length: cards }).map((_, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4">
                <Skeleton className="w-full h-full rounded-full" />
              </div>
              <Skeleton className="h-6 w-32 mx-auto mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSkeleton;
