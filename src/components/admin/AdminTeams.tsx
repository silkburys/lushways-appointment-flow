import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';
import { AddTeamMemberModal } from './AddTeamMemberModal';
import { EditTeamMemberForm } from './EditTeamMemberForm';
import { downloadJsonFile } from '@/utils/downloadUtils';

// Sample locations data (should come from DB in real app)
const locationsList = [
  { id: 1, name: "Meaisem City Centre Ladies" },
  { id: 2, name: "Al Barsha City Centre Ladies" },
  { id: 3, name: "BarberShop" },
];

// For services, flatten out categories/services for selector
import { initialCategories } from "@/data/servicesCategoriesData";
const serviceCategories = initialCategories.map(cat => ({
  id: cat.id,
  name: cat.name,
  services: cat.services.map(srv => ({
    id: srv.id,
    name: srv.name,
    // categoryId: cat.id,
  })),
}));

// Now stores more data per member for edit screen
const teamMembersData = [
  {
    id: 1,
    name: "Fadia",
    avatar: "/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234567",
    email: "salonlushways@gmail.com",
    locations: [1], // id of locations
    offeredServiceIds: [], // ids of services offered
    weeklyAvailability: [
      { day: 'Mon', available: true },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: true },
      { day: 'Sat', available: false },
      { day: 'Sun', available: false },
    ]
  },
  {
    id: 2,
    name: "Angelica",
    avatar: "/lovable-uploads/57c261ea-b093-4b27-9510-aaf80ab2c7d0.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234568",
    email: "angelica@gmail.com",
    locations: [1,2],
    offeredServiceIds: [],
    weeklyAvailability: [
      { day: 'Mon', available: true },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: true },
      { day: 'Sat', available: true },
      { day: 'Sun', available: true },
    ]
  },
  {
    id: 3,
    name: "Sakina",
    avatar: "/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234569",
    email: "sakina@gmail.com",
    locations: [2,3],
    offeredServiceIds: [],
    weeklyAvailability: [
      { day: 'Mon', available: true },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: true },
      { day: 'Sat', available: true },
      { day: 'Sun', available: true },
    ]
  },
  {
    id: 4,
    name: "Jenny",
    avatar: "/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png",
    status: "Inactive",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234570",
    email: "jenny@gmail.com",
    weeklyAvailability: [
      { day: 'Mon', available: true },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: false },
      { day: 'Sat', available: true },
      { day: 'Sun', available: true },
    ]
  },
  {
    id: 5,
    name: "Nancy",
    avatar: "/lovable-uploads/57c261ea-b093-4b27-9510-aaf80ab2c7d0.png",
    status: "Inactive",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234571",
    email: "nancy@gmail.com",
    weeklyAvailability: [
      { day: 'Mon', available: false },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: true },
      { day: 'Sat', available: true },
      { day: 'Sun', available: true },
    ]
  },
  {
    id: 6,
    name: "Regine",
    avatar: "/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234572",
    email: "regine@gmail.com",
    weeklyAvailability: [
      { day: 'Mon', available: true },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: true },
      { day: 'Sat', available: true },
      { day: 'Sun', available: true },
    ]
  },
];

export function AdminTeams() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState<number | null>(null);
  const [teamMembers, setTeamMembers] = useState(teamMembersData);

  function handleEdit(id: number) {
    setEditingMemberId(id);
  }

  function handleSaveEdit(updated: any) {
    setTeamMembers(prev =>
      prev.map(m => (m.id === updated.id ? { ...m, ...updated } : m))
    );
    setEditingMemberId(null);
  }

  function handleCancelEdit() {
    setEditingMemberId(null);
  }

  const handleDownloadData = () => {
    downloadJsonFile(teamMembers, 'team-members-data');
  };

  return (
    <div className="space-y-6">
      {!editingMemberId ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Team</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDownloadData}>
                <Download className="h-4 w-4 mr-2" />
                Download Data
              </Button>
              <Button onClick={() => setShowAddModal(true)} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Team Member
              </Button>
            </div>
          </div>
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} onEdit={handleEdit} />
            ))}
          </div>
        </>
      ) : (
        <EditTeamMemberForm
          member={teamMembers.find(m => m.id === editingMemberId)!}
          allLocations={locationsList}
          allServiceCategories={serviceCategories}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
      {/* Add Team Member Modal */}
      {showAddModal && (
        <AddTeamMemberModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
}
