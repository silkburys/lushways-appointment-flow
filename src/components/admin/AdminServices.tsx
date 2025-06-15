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

// ALL categories and services, IDs, and grouping based exactly on your screenshots:
const initialCategories = [
  {
    id: '7',
    name: 'Moroccan Bath',
    color: 'bg-blue-500',
    services: [
      { id: '81', name: 'Moroccan Bath - Al Barsha', price: 0, categoryId: '7' },
    ]
  },
  {
    id: '8',
    name: 'Gents',
    color: 'bg-green-500',
    services: [
      { id: '82', name: 'Hair & Beard', price: 0, categoryId: '8' },
      { id: '83', name: 'Hair Cut', price: 0, categoryId: '8' },
      { id: '84', name: 'Beard Trim', price: 0, categoryId: '8' },
      { id: '85', name: 'Kids Haircut', price: 0, categoryId: '8' },
      { id: '89', name: 'Pedicure or Manicure', price: 0, categoryId: '8' },
    ]
  },
  {
    id: '9',
    name: 'Tatoo & Microbladding',
    color: 'bg-purple-500',
    services: [
      { id: '86', name: 'Mat Tattoo Eye Brows', price: 0, categoryId: '9' },
      { id: '87', name: '3 D Tattoo Eye Brows', price: 0, categoryId: '9' },
      { id: '88', name: 'Tattoo Lips Mat or 3D', price: 0, categoryId: '9' },
    ]
  },
  {
    id: '1',
    name: 'Nail',
    color: 'bg-pink-500',
    services: [
      { id: '77', name: 'Gel repair per nail', price: 0, categoryId: '1' },
      { id: '78', name: 'Gel polish application', price: 0, categoryId: '1' },
      { id: '4',  name: 'Gelish Manicure', price: 0, categoryId: '1' },
      { id: '1',  name: 'Classic Manicure', price: 0, categoryId: '1' },
      { id: '2',  name: 'Classic Pedicure', price: 0, categoryId: '1' },
      { id: '5',  name: 'Gelish Pedicure', price: 0, categoryId: '1' },
      { id: '6',  name: 'Gelish Removal', price: 0, categoryId: '1' },
      { id: '7',  name: 'Gel Full Set', price: 0, categoryId: '1' },
      { id: '9',  name: 'Gel Refill', price: 0, categoryId: '1' },
      { id: '11', name: 'Acrylic Repair per nail', price: 0, categoryId: '1' },
      { id: '41', name: 'Callus Removal', price: 0, categoryId: '1' },
      { id: '52', name: 'fake nails', price: 0, categoryId: '1' },
      { id: '53', name: 'french pedicure', price: 0, categoryId: '1' },
      { id: '54', name: 'french manicure', price: 0, categoryId: '1' },
      { id: '56', name: 'cut and file', price: 0, categoryId: '1' },
      { id: '57', name: 'spa manicure', price: 0, categoryId: '1' },
      { id: '58', name: 'spa pedicure', price: 0, categoryId: '1' },
      { id: '71', name: 'manicure parafin', price: 0, categoryId: '1' },
      { id: '72', name: 'pedicure parafin', price: 0, categoryId: '1' },
      { id: '73', name: 'classic polish change', price: 0, categoryId: '1' },
    ]
  },
  {
    id: '2',
    name: 'Hair',
    color: 'bg-indigo-500',
    services: [
      { id: '80', name: 'Half Head Highlights', price: 0, categoryId: '2' },
      { id: '12', name: 'Blowdry', price: 0, categoryId: '2' },
      { id: '15', name: 'Hair Cut', price: 0, categoryId: '2' },
      { id: '14', name: 'Curls', price: 0, categoryId: '2' },
      { id: '16', name: 'Hair Style', price: 0, categoryId: '2' },
      { id: '17', name: 'Full Hair Color', price: 0, categoryId: '2' },
      { id: '18', name: 'Full Hair Highlights', price: 0, categoryId: '2' },
      { id: '19', name: 'Hair Toner', price: 0, categoryId: '2' },
      { id: '20', name: 'Keratin', price: 0, categoryId: '2' },
      { id: '22', name: 'Hair Mask', price: 0, categoryId: '2' },
      { id: '46', name: 'Hair trim', price: 0, categoryId: '2' },
      { id: '64', name: 'hair braids kid', price: 0, categoryId: '2' },
      { id: '65', name: 'hair braid', price: 0, categoryId: '2' },
      { id: '66', name: 'root color', price: 0, categoryId: '2' },
      { id: '67', name: 'fringe cut', price: 0, categoryId: '2' },
      { id: '68', name: 'hair wash', price: 0, categoryId: '2' },
    ]
  },
  {
    id: '3',
    name: 'Waxing',
    color: 'bg-yellow-500',
    services: [
      { id: '23', name: 'Half Arm', price: 0, categoryId: '3' },
      { id: '24', name: 'Full Arm', price: 0, categoryId: '3' },
      { id: '25', name: 'Under Arm', price: 0, categoryId: '3' },
      { id: '26', name: 'Half Legs', price: 0, categoryId: '3' },
      { id: '27', name: 'Full Legs', price: 0, categoryId: '3' },
      { id: '28', name: 'Bikini Line', price: 0, categoryId: '3' },
      { id: '29', name: 'Full Bikini', price: 0, categoryId: '3' },
      { id: '30', name: 'Half Back', price: 0, categoryId: '3' },
      { id: '31', name: 'Full back', price: 0, categoryId: '3' },
      { id: '32', name: 'Stomach', price: 0, categoryId: '3' },
      { id: '33', name: 'Full body with Brazilian', price: 0, categoryId: '3' },
      { id: '34', name: 'Eyebrows', price: 0, categoryId: '3' },
      { id: '35', name: 'Upperlip', price: 0, categoryId: '3' },
      { id: '36', name: 'Fullface', price: 0, categoryId: '3' },
      { id: '37', name: 'Eyebrow tint', price: 0, categoryId: '3' },
    ]
  },
  {
    id: '4',
    name: 'Facial',
    color: 'bg-green-500',
    services: [
      { id: '47', name: 'Vitamino Facial', price: 0, categoryId: '4' },
      { id: '48', name: 'clean up', price: 0, categoryId: '4' },
      { id: '49', name: 'Antiaging Facial', price: 0, categoryId: '4' },
      { id: '50', name: 'Deep Moisturizing', price: 0, categoryId: '4' },
      { id: '51', name: 'Brightening', price: 0, categoryId: '4' },
      { id: '74', name: 'basic facial', price: 0, categoryId: '4' },
    ]
  },
  {
    id: '5',
    name: 'Massage',
    color: 'bg-indigo-500',
    services: [
      { id: '59', name: 'full body massage', price: 0, categoryId: '5' },
      { id: '60', name: 'foot massage', price: 0, categoryId: '5' },
      { id: '61', name: 'head massage', price: 0, categoryId: '5' },
      { id: '62', name: 'back and neck massage', price: 0, categoryId: '5' },
    ]
  },
  {
    id: '6',
    name: 'Make Up',
    color: 'bg-pink-500',
    services: [
      { id: '79', name: 'Lashes', price: 0, categoryId: '6' },
      { id: '38', name: 'Evening Makeup with Eye Lash', price: 0, categoryId: '6' },
      { id: '39', name: 'Party Makeup with Eye Lash', price: 0, categoryId: '6' },
      { id: '40', name: 'Bridal Makeup', price: 0, categoryId: '6' },
      { id: '70', name: 'Lashes Refill', price: 0, categoryId: '6' },
    ]
  },
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
