
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';
import { AddTeamMemberModal } from './AddTeamMemberModal';

// Hardcoded team members data
const teamMembersData = [
  {
    id: 1,
    name: "Fadia",
    avatar: "/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png",
    status: "On Duty",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    weeklyAvailability: [
      { day: 'Mon', available: true },
      { day: 'Tue', available: true },
      { day: 'Wed', available: true },
      { day: 'Thu', available: true },
      { day: 'Fri', available: true },
      { day: 'Sat', available: true },
      { day: 'Sun', available: false },
    ]
  },
  {
    id: 2,
    name: "Angelica",
    avatar: "/lovable-uploads/57c261ea-b093-4b27-9510-aaf80ab2c7d0.png",
    status: "On Duty",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
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
    status: "On Duty",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
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
    status: "On Duty",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
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
    status: "On Duty",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
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
    status: "On Duty",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button onClick={() => setShowAddModal(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembersData.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Add Team Member Modal */}
      {showAddModal && (
        <AddTeamMemberModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
}
