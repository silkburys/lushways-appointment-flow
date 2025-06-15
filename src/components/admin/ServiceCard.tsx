
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GripVertical, MoreVertical, Trash2, ArrowRight, Pencil } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import { Switch } from '@/components/ui/switch';

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
  services: Service[];
}

interface ServiceCardProps {
  service: Service;
  allCategories: ServiceCategory[];
  onDragStart: (e: React.DragEvent, service: Service) => void;
  onMoveService: (serviceId: string, newCategoryId: string) => void;
  onDeleteService: (serviceId: string) => void;
  onTogglePriceIsFrom?: (serviceId: string) => void;
  onUpdatePrice?: (serviceId: string, newPrice: number) => void;
}

export function ServiceCard({
  service,
  allCategories,
  onDragStart,
  onMoveService,
  onDeleteService,
  onTogglePriceIsFrom,
  onUpdatePrice
}: ServiceCardProps) {
  const currentCategory = allCategories.find(cat => cat.id === service.categoryId);
  const otherCategories = allCategories.filter(cat => cat.id !== service.categoryId);

  // Inline editing state
  const [editMode, setEditMode] = useState(false);
  const [editPrice, setEditPrice] = useState(service.price);

  // Handle save on blur or Enter
  const savePrice = () => {
    if (editPrice !== service.price && onUpdatePrice) {
      onUpdatePrice(service.id, editPrice);
    }
    setEditMode(false);
  };

  return (
    <Card className="group hover:shadow-md transition-shadow cursor-move flex items-center justify-between px-2">
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="cursor-grab active:cursor-grabbing"
              draggable
              onDragStart={(e) => onDragStart(e, service)}
            >
              <GripVertical className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-[180px]">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{service.name}</h4>
                <Badge variant="outline" className="text-xs">
                  ID: {service.id}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-1">
                {editMode ? (
                  <input
                    type="number"
                    className="p-1 border rounded w-20 text-sm"
                    value={editPrice}
                    min={0}
                    autoFocus
                    onChange={e => setEditPrice(Number(e.target.value))}
                    onBlur={savePrice}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        savePrice();
                      }
                    }}
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {service.priceIsFrom ? (
                      <>From AED {service.price}</>
                    ) : (
                      <>AED {service.price}</>
                    )}
                  </p>
                )}
                {/* Edit icon */}
                {!editMode && (
                  <button
                    className="text-muted-foreground p-1 hover:scale-110"
                    onClick={() => {
                      setEditPrice(service.price);
                      setEditMode(true);
                    }}
                    aria-label="Edit price"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                )}
                {/* Price toggle directly in card */}
                <div className="flex items-center gap-1 ml-4">
                  <Switch
                    checked={!!service.priceIsFrom}
                    onCheckedChange={() => onTogglePriceIsFrom && onTogglePriceIsFrom(service.id)}
                    id={`from-toggle-${service.id}`}
                  />
                  <label htmlFor={`from-toggle-${service.id}`} className="text-xs text-muted-foreground ml-1 cursor-pointer">
                    From?
                  </label>
                </div>
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {otherCategories.length > 0 && (
                <>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Move to Category
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      {otherCategories.map((category) => (
                        <DropdownMenuItem
                          key={category.id}
                          onClick={() => onMoveService(service.id, category.id)}
                        >
                          <div className={`w-3 h-3 rounded-full ${category.color} mr-2`} />
                          {category.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                </>
              )}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Service
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Service</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete "{service.name}"? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDeleteService(service.id)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}
