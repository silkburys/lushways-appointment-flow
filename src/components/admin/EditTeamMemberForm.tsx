import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { ServicesOfferedSelector } from "./ServicesOfferedSelector";
import { LocationsMultiSelect } from "./LocationsMultiSelect";

interface TeamMemberEditable {
  id: number;
  name: string;
  avatar: string;
  email: string;
  status: string;
  phone: string;
  locations?: number[];
  offeredServiceIds?: string[];
}

interface ServiceCategory {
  id: string;
  name: string;
  services: { id: string; name: string }[];
}

interface LocationOption {
  id: number;
  name: string;
}

interface EditTeamMemberFormProps {
  member: TeamMemberEditable;
  allLocations: LocationOption[];
  allServiceCategories: ServiceCategory[];
  onSave: (updated: TeamMemberEditable) => void;
  onCancel: () => void;
}

export function EditTeamMemberForm({
  member,
  allLocations,
  allServiceCategories,
  onSave,
  onCancel,
}: EditTeamMemberFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fields, setFields] = React.useState({ ...member });
  const [avatarPreview, setAvatarPreview] = React.useState<string>(member.avatar);

  // Init selections if undefined
  React.useEffect(() => {
    if (!fields.locations) setFields((f) => ({ ...f, locations: [] }));
    if (!fields.offeredServiceIds) setFields((f) => ({ ...f, offeredServiceIds: [] }));
  // eslint-disable-next-line
  }, []);

  const statuses = ["Active", "Inactive", "On Duty"];

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFields((current) => ({ ...current, [name]: value }));
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      setFields((current) => ({ ...current, avatar: url }));
    }
  }

  function handleRemoveAvatar() {
    setAvatarPreview("");
    setFields((current) => ({ ...current, avatar: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleLocationChange(ids: number[]) {
    setFields((c) => ({ ...c, locations: ids }));
  }

  function handleServicesChange(ids: string[]) {
    setFields((c) => ({ ...c, offeredServiceIds: ids }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave(fields);
  }

  // Parsing Display Name as first part of full name
  const displayName = fields.name?.split(" ")[0] ?? "";

  // Prepare service categories to satisfy ServiceOfferedSelector shape
  const serviceSelectorCategories = allServiceCategories.map((cat) => ({
    ...cat,
    services: cat.services.map((srv) => ({
      ...srv,
      categoryId: cat.id,
    })),
  }));

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card>
        <CardContent className="py-8 px-6">
          {/* Avatar upload */}
          <div className="mb-6">
            <div className="relative w-full border-2 border-dashed rounded-lg p-4 flex items-center gap-6 bg-muted/25">
              {avatarPreview ? (
                <Avatar className="w-24 h-24 border">
                  <AvatarImage src={avatarPreview} alt={fields.name} />
                  <AvatarFallback>{fields.name?.slice(0, 2) || ""}</AvatarFallback>
                </Avatar>
              ) : (
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full text-4xl">
                  ?
                </div>
              )}
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-medium text-base">
                  {avatarPreview ? "Remove Avatar" : "Profile Photo"}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="px-3"
                    onClick={() =>
                      avatarPreview ? handleRemoveAvatar() : fileInputRef.current?.click()
                    }
                  >
                    {avatarPreview ? (
                      <>
                        <X className="w-4 h-4 mr-1" />
                        Remove Avatar
                      </>
                    ) : (
                      "Upload Photo"
                    )}
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </div>
                <span className="text-xs text-muted-foreground">PNG, JPG up to 10MB</span>
              </div>
            </div>
          </div>
          {/* Fields grid */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* First Name and Display Name */}
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                className="font-semibold border-0 border-b border-muted-foreground rounded-none px-0 mt-2 mb-1 text-lg bg-transparent"
                name="name"
                value={fields.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                className="font-semibold border-0 border-b border-muted-foreground rounded-none px-0 mt-2 mb-1 text-lg bg-transparent"
                name="displayName"
                value={displayName}
                readOnly
                tabIndex={-1}
              />
            </div>
            {/* Email and Phone */}
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={fields.email}
                onChange={handleInputChange}
                className="border-0 border-b border-muted-foreground rounded-none px-0 mt-2 mb-1 bg-transparent"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={fields.phone}
                onChange={handleInputChange}
                className="border-0 border-b border-muted-foreground rounded-none px-0 mt-2 mb-1 bg-transparent"
                required
              />
            </div>
            {/* Status */}
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                value={fields.status}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2 mt-2 bg-white shadow-sm"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            {/* Locations MultiSelect (full width) */}
            <div className="col-span-1 md:col-span-2">
              <LocationsMultiSelect
                locations={allLocations}
                selectedLocationIds={fields.locations || []}
                onChange={handleLocationChange}
              />
            </div>
            {/* Services Offered (full width) */}
            <div className="col-span-1 md:col-span-2">
              <ServicesOfferedSelector
                categories={serviceSelectorCategories}
                selectedServiceIds={fields.offeredServiceIds || []}
                onChange={handleServicesChange}
              />
            </div>
            {/* Buttons */}
            <div className="flex items-end justify-end md:justify-start gap-2 mt-4">
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" className="ml-2">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
