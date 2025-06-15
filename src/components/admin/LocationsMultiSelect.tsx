
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface LocationOption {
  id: number;
  name: string;
}

interface LocationsMultiSelectProps {
  locations: LocationOption[];
  selectedLocationIds: number[];
  onChange: (selectedIds: number[]) => void;
}

export const LocationsMultiSelect: React.FC<LocationsMultiSelectProps> = ({
  locations,
  selectedLocationIds,
  onChange,
}) => {
  const handleSelect = (id: number) => {
    if (selectedLocationIds.includes(id)) {
      onChange(selectedLocationIds.filter((lid) => lid !== id));
    } else {
      onChange([...selectedLocationIds, id]);
    }
  };

  const isAllSelected = locations.every((loc) => selectedLocationIds.includes(loc.id));
  const handleToggleAll = () => {
    if (isAllSelected) {
      onChange([]);
    } else {
      onChange(locations.map((l) => l.id));
    }
  };

  return (
    <div>
      <label className="block font-semibold mb-2">Assigned Locations</label>
      <div className="w-full bg-white border rounded-lg px-4 py-2 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 mr-4 text-sm">
          <Checkbox checked={isAllSelected} onCheckedChange={handleToggleAll} />
          Select All
        </label>
        {locations.map((location) => (
          <label key={location.id} className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={selectedLocationIds.includes(location.id)}
              onCheckedChange={() => handleSelect(location.id)}
            />
            {location.name}
          </label>
        ))}
      </div>
    </div>
  );
};
