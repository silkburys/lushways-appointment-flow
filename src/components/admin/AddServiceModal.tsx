
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (serviceData: { name: string; price: number; categoryId: string }) => void;
  categories: ServiceCategory[];
  selectedCategoryId: string;
}

export function AddServiceModal({ 
  isOpen, 
  onClose, 
  onAdd, 
  categories, 
  selectedCategoryId 
}: AddServiceModalProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState(selectedCategoryId);

  React.useEffect(() => {
    setCategoryId(selectedCategoryId);
  }, [selectedCategoryId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && price && categoryId) {
      onAdd({
        name: name.trim(),
        price: parseFloat(price),
        categoryId
      });
      setName('');
      setPrice('');
      setCategoryId(selectedCategoryId);
      onClose();
    }
  };

  const handleClose = () => {
    setName('');
    setPrice('');
    setCategoryId(selectedCategoryId);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="serviceName">Service Name</Label>
            <Input
              id="serviceName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter service name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="servicePrice">Price (AED)</Label>
            <Input
              id="servicePrice"
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={categoryId} onValueChange={setCategoryId} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      {category.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Add Service</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
