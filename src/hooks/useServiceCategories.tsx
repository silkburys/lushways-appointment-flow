import { useState } from "react";
import { initialCategories } from "@/data/servicesCategoriesData";

// Types
export interface Service {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  priceIsFrom?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  color: string;
  services: Service[];
  imageUrl?: string;
}

export function useServiceCategories() {
  const [categories, setCategories] = useState<ServiceCategory[]>(initialCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);

  // Handlers
  const addCategory = (categoryData: { name: string; color: string }) => {
    const newCategory: ServiceCategory = {
      id: Date.now().toString(),
      name: categoryData.name,
      color: categoryData.color,
      services: [],
    };
    setCategories([...categories, newCategory]);
  };

  const addService = (serviceData: { name: string; price: number; categoryId: string }) => {
    const newService: Service = {
      id: Date.now().toString(),
      name: serviceData.name,
      price: serviceData.price,
      categoryId: serviceData.categoryId,
    };
    setCategories(categories =>
      categories.map(category =>
        category.id === serviceData.categoryId
          ? { ...category, services: [...category.services, newService] }
          : category
      )
    );
  };

  const reorderServices = (categoryId: string, reorderedServices: Service[]) => {
    setCategories(categories =>
      categories.map(category =>
        category.id === categoryId
          ? { ...category, services: reorderedServices }
          : category
      )
    );
  };

  const moveService = (serviceId: string, newCategoryId: string) => {
    let serviceToMove: Service | null = null;
    const updated = categories.map(category => {
      const serviceIndex = category.services.findIndex(s => s.id === serviceId);
      if (serviceIndex !== -1) {
        serviceToMove = { ...category.services[serviceIndex], categoryId: newCategoryId };
        return {
          ...category,
          services: category.services.filter(s => s.id !== serviceId),
        };
      }
      return category;
    });
    if (serviceToMove) {
      setCategories(
        updated.map(category =>
          category.id === newCategoryId
            ? { ...category, services: [...category.services, serviceToMove!] }
            : category
        )
      );
    }
  };

  const deleteCategory = (categoryId: string) => {
    setCategories(categories => categories.filter(category => category.id !== categoryId));
  };

  const deleteService = (serviceId: string) => {
    setCategories(categories =>
      categories.map(category => ({
        ...category,
        services: category.services.filter(service => service.id !== serviceId),
      }))
    );
  };

  const togglePriceIsFrom = (serviceId: string) => {
    setCategories(categories =>
      categories.map(category => ({
        ...category,
        services: category.services.map(service =>
          service.id === serviceId
            ? { ...service, priceIsFrom: !service.priceIsFrom }
            : service
        ),
      }))
    );
  };

  // Add updateServicePrice handler
  const updateServicePrice = (serviceId: string, newPrice: number) => {
    setCategories(categories =>
      categories.map(category => ({
        ...category,
        services: category.services.map(service =>
          service.id === serviceId
            ? { ...service, price: newPrice }
            : service
        ),
      }))
    );
  };

  // UI handlers
  const openAddServiceModal = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setIsAddServiceModalOpen(true);
  };

  return {
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
  };
}
