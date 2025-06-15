import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-react';
import { ServiceCategoryCard } from './ServiceCategoryCard';
import { AddServiceCategoryModal } from './AddServiceCategoryModal';
import { AddServiceModal } from './AddServiceModal';
import { useServiceCategories } from '@/hooks/useServiceCategories';
import { downloadJsonFile } from '@/utils/downloadUtils';

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
    updateServicePrice
  } = useServiceCategories();

  const handleDownloadData = () => {
    downloadJsonFile(categories, 'services-categories-data');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Services Management</h1>
          <p className="text-muted-foreground">Manage your service categories and services</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDownloadData}>
            <Download className="h-4 w-4 mr-2" />
            Download Data
          </Button>
          <Button onClick={() => setIsAddCategoryModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>
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
            onUpdatePrice={updateServicePrice}
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
