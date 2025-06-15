
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

// Updated team members with your provided team photos
const teamMembersData = [
  {
    id: 1,
    name: "TeamMember1",
    avatar: "/lovable-uploads/87ebc008-49f9-41a5-aa7e-56c0c09b9ff8.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234567",
    email: "example1@gmail.com",
    locations: [],
    offeredServiceIds: [],
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
    name: "TeamMember2",
    avatar: "/lovable-uploads/13e701a6-9424-40f9-9c32-31cb221096e0.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234568",
    email: "example2@gmail.com",
    locations: [],
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
    name: "TeamMember3",
    avatar: "/lovable-uploads/943d2ffa-2997-4e55-8141-5a907cfe9da0.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234569",
    email: "example3@gmail.com",
    locations: [],
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
    name: "TeamMember4",
    avatar: "/lovable-uploads/ae5b380f-08ab-4ba3-8d6a-4d2ab126c5d6.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234570",
    email: "example4@gmail.com",
    locations: [],
    offeredServiceIds: [],
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
    name: "TeamMember5",
    avatar: "/lovable-uploads/37730d26-0b69-458b-8173-b0ca291a5576.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234571",
    email: "example5@gmail.com",
    locations: [],
    offeredServiceIds: [],
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
    name: "TeamMember6",
    avatar: "/lovable-uploads/87a27e39-114f-4ce5-a2e3-bee4d61e118e.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234572",
    email: "example6@gmail.com",
    locations: [],
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
    id: 7,
    name: "TeamMember7",
    avatar: "/lovable-uploads/0154cc77-6f6d-48b5-8f58-e4aab8517256.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234573",
    email: "example7@gmail.com",
    locations: [],
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
    id: 8,
    name: "TeamMember8",
    avatar: "/lovable-uploads/1f961079-0037-4afa-8270-e7714e3a4964.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234574",
    email: "example8@gmail.com",
    locations: [],
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
    id: 9,
    name: "TeamMember9",
    avatar: "/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234575",
    email: "example9@gmail.com",
    locations: [],
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
    id: 10,
    name: "TeamMember10",
    avatar: "/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234576",
    email: "example10@gmail.com",
    locations: [],
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
