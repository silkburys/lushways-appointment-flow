
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { ServiceCategoryCard } from './ServiceCategoryCard';
import { AddServiceCategoryModal } from './AddServiceCategoryModal';
import { AddServiceModal } from './AddServiceModal';

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

const initialCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Moroccan Bath',
    color: 'bg-blue-500',
    services: [
      { id: '1', name: 'Traditional Moroccan Bath', price: 120, categoryId: '1' },
      { id: '2', name: 'Premium Moroccan Bath', price: 180, categoryId: '1' },
    ]
  },
  {
    id: '2',
    name: 'Gents',
    color: 'bg-green-500',
    services: [
      { id: '3', name: 'Haircut & Styling', price: 80, categoryId: '2' },
      { id: '4', name: 'Beard Trim', price: 40, categoryId: '2' },
    ]
  },
  {
    id: '3',
    name: 'Hair',
    color: 'bg-purple-500',
    services: [
      { id: '5', name: 'Hair Wash & Blow Dry', price: 60, categoryId: '3' },
      { id: '6', name: 'Hair Color', price: 200, categoryId: '3' },
    ]
  },
  {
    id: '4',
    name: 'Facial',
    color: 'bg-pink-500',
    services: [
      { id: '7', name: 'Deep Cleansing Facial', price: 150, categoryId: '4' },
      { id: '8', name: 'Anti-Aging Facial', price: 220, categoryId: '4' },
    ]
  },
  {
    id: '5',
    name: 'Massage',
    color: 'bg-indigo-500',
    services: [
      { id: '9', name: 'Full Body Massage', price: 180, categoryId: '5' },
      { id: '10', name: 'Relaxation Massage', price: 120, categoryId: '5' },
    ]
  }
];

export function AdminServices() {
  const [categories, setCategories] = useState<ServiceCategory[]>(initialCategories);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const handleAddCategory = (categoryData: { name: string; color: string }) => {
    const newCategory: ServiceCategory = {
      id: Date.now().toString(),
      name: categoryData.name,
      color: categoryData.color,
      services: []
    };
    setCategories([...categories, newCategory]);
  };

  const handleAddService = (serviceData: { name: string; price: number; categoryId: string }) => {
    const newService: Service = {
      id: Date.now().toString(),
      name: serviceData.name,
      price: serviceData.price,
      categoryId: serviceData.categoryId
    };

    setCategories(categories.map(category => 
      category.id === serviceData.categoryId
        ? { ...category, services: [...category.services, newService] }
        : category
    ));
  };

  const handleReorderServices = (categoryId: string, reorderedServices: Service[]) => {
    setCategories(categories.map(category =>
      category.id === categoryId
        ? { ...category, services: reorderedServices }
        : category
    ));
  };

  const handleMoveService = (serviceId: string, newCategoryId: string) => {
    let serviceToMove: Service | null = null;
    
    // Remove service from current category
    const updatedCategories = categories.map(category => {
      const serviceIndex = category.services.findIndex(s => s.id === serviceId);
      if (serviceIndex !== -1) {
        serviceToMove = { ...category.services[serviceIndex], categoryId: newCategoryId };
        return {
          ...category,
          services: category.services.filter(s => s.id !== serviceId)
        };
      }
      return category;
    });

    // Add service to new category
    if (serviceToMove) {
      const finalCategories = updatedCategories.map(category =>
        category.id === newCategoryId
          ? { ...category, services: [...category.services, serviceToMove!] }
          : category
      );
      setCategories(finalCategories);
    }
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  const handleDeleteService = (serviceId: string) => {
    setCategories(categories.map(category => ({
      ...category,
      services: category.services.filter(service => service.id !== serviceId)
    })));
  };

  const openAddServiceModal = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setIsAddServiceModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Services Management</h1>
          <p className="text-muted-foreground">Manage your service categories and services</p>
        </div>
        <Button onClick={() => setIsAddCategoryModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <ServiceCategoryCard
            key={category.id}
            category={category}
            allCategories={categories}
            onAddService={() => openAddServiceModal(category.id)}
            onReorderServices={handleReorderServices}
            onMoveService={handleMoveService}
            onDeleteCategory={handleDeleteCategory}
            onDeleteService={handleDeleteService}
          />
        ))}
      </div>

      <AddServiceCategoryModal
        isOpen={isAddCategoryModalOpen}
        onClose={() => setIsAddCategoryModalOpen(false)}
        onAdd={handleAddCategory}
      />

      <AddServiceModal
        isOpen={isAddServiceModalOpen}
        onClose={() => setIsAddServiceModalOpen(false)}
        onAdd={handleAddService}
        categories={categories}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
}
