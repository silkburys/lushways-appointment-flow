import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';
import { AddTeamMemberModal } from './AddTeamMemberModal';
import { EditTeamMemberForm } from './EditTeamMemberForm';
import { useTeamMembers } from '@/hooks/useTeamMembers';

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

export function AdminTeams() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState<number | null>(null);
  const {
    teamMembers,
    updateTeamMember,
    addTeamMember,
    // setTeamMembers,
  } = useTeamMembers();

  function handleEdit(id: number) {
    setEditingMemberId(id);
  }

  // Save edits and update state (persists changes!)
  function handleSaveEdit(updated: any) {
    updateTeamMember(updated);
    setEditingMemberId(null);
  }

  function handleCancelEdit() {
    setEditingMemberId(null);
  }

  return (
    <div className="space-y-6">
      {!editingMemberId ? (
        <>
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
