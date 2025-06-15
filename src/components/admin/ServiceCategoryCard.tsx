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
import { Switch } from "@/components/ui/switch";
import { Image } from "lucide-react";
import { CATEGORY_IMAGES } from "@/data/servicesCategoriesData";

interface Service {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  priceIsFrom?: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  color: string;
  image: string;
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
  onTogglePriceIsFrom: (serviceId: string) => void;
  onUpdatePrice?: (serviceId: string, newPrice: number) => void;
  onChangeCategoryImage?: (categoryId: string, image: string) => void;
}

export function ServiceCategoryCard({
  category,
  allCategories,
  onAddService,
  onReorderServices,
  onMoveService,
  onDeleteCategory,
  onDeleteService,
  onTogglePriceIsFrom,
  onUpdatePrice,
  onChangeCategoryImage
}: ServiceCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [draggedService, setDraggedService] = useState<Service | null>(null);
  const [showImagePicker, setShowImagePicker] = useState(false);

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

  const handleUpdatePrice = (serviceId: string, newPrice: number) => {
    if (typeof onUpdatePrice === 'function') {
      onUpdatePrice(serviceId, newPrice);
    }
  };

  const possibleImages = Object.values(CATEGORY_IMAGES);

  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className={`${category.color} text-white cursor-pointer relative`}
        onClick={() => setIsExpanded(!isExpanded)}
        onDragOver={handleDragOver}
        onDrop={handleDropOnCategory}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-16 h-16 rounded-lg overflow-hidden bg-white border border-gray-200 shadow mr-3 flex items-center justify-center shrink-0"
              style={{ cursor: "default" }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full"
                draggable={false}
              />
            </div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {category.services.length} Services
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              type="button"
              className="bg-white text-gray-900"
              onClick={e => {
                e.stopPropagation();
                setShowImagePicker(p => !p);
              }}
              title="Change Image"
            >
              <Image className="w-5 h-5" />
            </Button>
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
        {showImagePicker && (
          <div
            className="absolute z-20 left-24 top-5 p-2 bg-white text-gray-900 border rounded-xl shadow-xl flex gap-1 flex-wrap"
            onClick={e => e.stopPropagation()}
          >
            {possibleImages.map(img => (
              <button
                key={img}
                type="button"
                className={`w-14 h-14 rounded border-2
                  ${category.image === img ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'}
                  overflow-hidden bg-gray-100 p-0 m-0`}
                style={{ outline: "none" }}
                onClick={() => {
                  if (onChangeCategoryImage) onChangeCategoryImage(category.id, img);
                  setShowImagePicker(false);
                }}
              >
                <img src={img} alt="" className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        )}
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
                  className="flex items-center gap-4"
                >
                  <ServiceCard
                    service={service}
                    allCategories={allCategories}
                    onDragStart={handleDragStart}
                    onMoveService={onMoveService}
                    onDeleteService={onDeleteService}
                    onTogglePriceIsFrom={onTogglePriceIsFrom}
                    onUpdatePrice={handleUpdatePrice}
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
