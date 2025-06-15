import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Edit, Plus, Download } from 'lucide-react';
import { LocationCard } from './LocationCard';
import { AddLocationModal } from './AddLocationModal';
import { downloadJsonFile } from '@/utils/downloadUtils';

// Hardcoded locations data with actual photos
const locationsData = [
  {
    id: 1,
    name: "Meaisem City Centre Ladies",
    address: "Meaisem City Centre, Dubai, UAE",
    type: "Ladies",
    photo: "/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png",
    agents: [
      { name: "Agent 1", avatar: "/placeholder.svg" },
      { name: "Agent 2", avatar: "/placeholder.svg" },
      { name: "Agent 3", avatar: "/placeholder.svg" },
      { name: "Agent 4", avatar: "/placeholder.svg" },
      { name: "Agent 5", avatar: "/placeholder.svg" },
      { name: "Agent 6", avatar: "/placeholder.svg" },
    ],
    coordinates: { lat: 25.0424, lng: 55.1542 }
  },
  {
    id: 2,
    name: "Al Barsha City Centre Ladies",
    address: "Al Barsha City Centre Gents and ladies, Dubai, UAE",
    type: "Ladies",
    photo: "/lovable-uploads/57c261ea-b093-4b27-9510-aaf80ab2c7d0.png",
    agents: [
      { name: "Agent 1", avatar: "/placeholder.svg" },
      { name: "Agent 2", avatar: "/placeholder.svg" },
      { name: "Agent 3", avatar: "/placeholder.svg" },
      { name: "Agent 4", avatar: "/placeholder.svg" },
      { name: "Agent 5", avatar: "/placeholder.svg" },
      { name: "Agent 6", avatar: "/placeholder.svg" },
    ],
    coordinates: { lat: 25.0964, lng: 55.1975 }
  },
  {
    id: 3,
    name: "BarberShop",
    address: "Al Barsha City Centre Gents and ladies, Dubai, UAE",
    type: "Barber Shop",
    photo: "/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png",
    agents: [
      { name: "Agent 1", avatar: "/placeholder.svg" },
      { name: "Agent 2", avatar: "/placeholder.svg" },
      { name: "Agent 3", avatar: "/placeholder.svg" },
      { name: "Agent 4", avatar: "/placeholder.svg" },
    ],
    coordinates: { lat: 25.0964, lng: 55.1875 }
  }
];

export function AdminLocations() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Locations');

  const handleDownloadData = () => {
    downloadJsonFile(locationsData, 'locations-data');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Locations</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDownloadData}>
            <Download className="h-4 w-4 mr-2" />
            Download Data
          </Button>
          <Button onClick={() => setShowAddModal(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Location
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 border-b">
        <button 
          className={`pb-2 px-1 border-b-2 ${selectedCategory === 'Locations' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'}`}
          onClick={() => setSelectedCategory('Locations')}
        >
          Locations
        </button>
        <button 
          className={`pb-2 px-1 border-b-2 ${selectedCategory === 'Categories' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'}`}
          onClick={() => setSelectedCategory('Categories')}
        >
          Categories
        </button>
      </div>

      {/* City Filter */}
      <div className="flex items-center gap-4">
        <Badge variant="outline" className="bg-primary text-primary-foreground">
          Dubai
        </Badge>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locationsData.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
        
        {/* Add Location Card */}
        <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Add Location</h3>
            <p className="text-muted-foreground text-sm">Create a new location for your business</p>
          </CardContent>
        </Card>
      </div>

      {/* Add Location Modal */}
      {showAddModal && (
        <AddLocationModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
}
