
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Service {
  id: string;
  name: string;
  price: number;
  categoryId: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  color: string;
  services: Service[];
}

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  allCategories: ServiceCategory[];
  onAddService: () => void;
  onReorderServices: (categoryId: string, reorderedServices: Service[]) => void;
  onMoveService: (serviceId: string, newCategoryId: string) => void;
  onDeleteCategory: (categoryId: string) => void;
  onDeleteService: (serviceId: string) => void;
}

export function ServiceCategoryCard({
  category,
  allCategories,
  onAddService,
  onReorderServices,
  onMoveService,
  onDeleteCategory,
  onDeleteService
}: ServiceCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [draggedService, setDraggedService] = useState<Service | null>(null);

  const handleDragStart = (e: React.DragEvent, service: Service) => {
    setDraggedService(service);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (!draggedService) return;

    const sourceIndex = category.services.findIndex(s => s.id === draggedService.id);
    if (sourceIndex === -1) return;

    const newServices = [...category.services];
    newServices.splice(sourceIndex, 1);
    newServices.splice(targetIndex, 0, draggedService);

    onReorderServices(category.id, newServices);
    setDraggedService(null);
  };

  const handleDropOnCategory = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedService || draggedService.categoryId === category.id) {
      setDraggedService(null);
      return;
    }

    onMoveService(draggedService.id, category.id);
    setDraggedService(null);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className={`${category.color} text-white cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
        onDragOver={handleDragOver}
        onDrop={handleDropOnCategory}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {category.services.length} Services
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onAddService();
              }}
              className="text-white hover:bg-white/20"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => e.stopPropagation()}
                  className="text-white hover:bg-white/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Category</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete "{category.name}"? This will also delete all services in this category.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onDeleteCategory(category.id)}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="p-4">
          {category.services.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No services in this category yet.</p>
              <Button 
                variant="outline" 
                onClick={onAddService}
                className="mt-2"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add First Service
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {category.services.map((service, index) => (
                <div
                  key={service.id}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <ServiceCard
                    service={service}
                    allCategories={allCategories}
                    onDragStart={handleDragStart}
                    onMoveService={onMoveService}
                    onDeleteService={onDeleteService}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
