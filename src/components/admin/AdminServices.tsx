
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { ServiceCategoryCard } from './ServiceCategoryCard';
import { AddServiceCategoryModal } from './AddServiceCategoryModal';
import { AddServiceModal } from './AddServiceModal';
import { useServiceCategories } from '@/hooks/useServiceCategories';

export function AdminServices() {
  const {
    categories,
    isAddCategoryModalOpen,
    setIsAddCategoryModalOpen,
    isAddServiceModalOpen,
    setIsAddServiceModalOpen,
    selectedCategoryId,
    addCategory,
    addService,
    reorderServices,
    moveService,
    deleteCategory,
    deleteService,
    openAddServiceModal,
    togglePriceIsFrom,
  } = useServiceCategories();

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
            onReorderServices={reorderServices}
            onMoveService={moveService}
            onDeleteCategory={deleteCategory}
            onDeleteService={deleteService}
            onTogglePriceIsFrom={togglePriceIsFrom}
          />
        ))}
      </div>
      <AddServiceCategoryModal
        isOpen={isAddCategoryModalOpen}
        onClose={() => setIsAddCategoryModalOpen(false)}
        onAdd={addCategory}
      />
      <AddServiceModal
        isOpen={isAddServiceModalOpen}
        onClose={() => setIsAddServiceModalOpen(false)}
        onAdd={addService}
        categories={categories}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
}
