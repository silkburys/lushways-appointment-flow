
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export interface ServiceItem {
  id: string;
  name: string;
  categoryId: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: ServiceItem[];
}

interface ServicesOfferedSelectorProps {
  categories: ServiceCategory[];
  selectedServiceIds: string[];
  onChange: (selectedIds: string[]) => void;
}

export const ServicesOfferedSelector: React.FC<ServicesOfferedSelectorProps> = ({
  categories,
  selectedServiceIds,
  onChange,
}) => {
  // Check if ALL services are selected across all categories
  const allServiceIds = categories.flatMap(cat => cat.services.map(srv => srv.id));
  const isAllSelected = allServiceIds.length > 0 && allServiceIds.every(id => selectedServiceIds.includes(id));

  // Global select all/deselect all
  const handleToggleAll = () => {
    if (isAllSelected) {
      onChange([]);
    } else {
      onChange(allServiceIds);
    }
  };

  // Per-category select all logic
  const isCategoryAllSelected = (cat: ServiceCategory) => 
    cat.services.length > 0 &&
    cat.services.every(srv => selectedServiceIds.includes(srv.id));

  const handleToggleCategoryAll = (cat: ServiceCategory) => {
    const catServiceIds = cat.services.map(srv => srv.id);
    const catAllSelected = isCategoryAllSelected(cat);

    if (catAllSelected) {
      // Remove all this category's service ids from selected
      onChange(selectedServiceIds.filter(id => !catServiceIds.includes(id)));
    } else {
      // Add all ids for this category (but do not duplicate)
      onChange(Array.from(new Set([...selectedServiceIds, ...catServiceIds])));
    }
  };

  // Toggle individual service
  const handleToggle = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      onChange(selectedServiceIds.filter(sid => sid !== id));
    } else {
      onChange([...selectedServiceIds, id]);
    }
  };

  return (
    <div className="bg-white border rounded-xl mt-6 mb-4 overflow-hidden">
      {/* Global Select All Row */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        <span className="font-semibold text-lg">Offered Services</span>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox checked={isAllSelected} onCheckedChange={handleToggleAll} />
          Select All
        </label>
      </div>
      <div className="px-4 pb-4">
        {categories.map((cat) => (
          <div key={cat.id} className="mb-6">
            <div className="flex items-center justify-between font-semibold text-base mb-2 mt-4">
              <span>{cat.name}</span>
              <label className="flex items-center gap-2 text-xs font-normal">
                <Checkbox
                  checked={isCategoryAllSelected(cat)}
                  onCheckedChange={() => handleToggleCategoryAll(cat)}
                />
                Select All
              </label>
            </div>
            <div className="space-y-3">
              {cat.services.map((srv) => (
                <label
                  key={srv.id}
                  className="flex items-center gap-2 border rounded-lg px-4 py-3 bg-white"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <Checkbox
                    checked={selectedServiceIds.includes(srv.id)}
                    onCheckedChange={() => handleToggle(srv.id)}
                  />
                  <span>{srv.name}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
