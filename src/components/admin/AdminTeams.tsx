
import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

const uploadedTeamImages = [
  { name: "c91f1236-bef4-4b51-b652-ff6522b5d3dd", avatar: "/lovable-uploads/c91f1236-bef4-4b51-b652-ff6522b5d3dd.png" },
  { name: "472d5605-bbe8-4ee4-b3ee-f1806e529818", avatar: "/lovable-uploads/472d5605-bbe8-4ee4-b3ee-f1806e529818.png" },
  { name: "7cb84900-f30f-4fd0-b95a-9a975563102a", avatar: "/lovable-uploads/7cb84900-f30f-4fd0-b95a-9a975563102a.png" },
  { name: "207c8641-4b1b-4fd8-9ca8-50b25e0b7deb", avatar: "/lovable-uploads/207c8641-4b1b-4fd8-9ca8-50b25e0b7deb.png" },
  { name: "17de3447-93df-415a-b2b3-0061b3a1051e", avatar: "/lovable-uploads/17de3447-93df-415a-b2b3-0061b3a1051e.png" },
  { name: "0f2a9615-ec00-47f2-a705-a116d3497280", avatar: "/lovable-uploads/0f2a9615-ec00-47f2-a705-a116d3497280.png" },
  { name: "383798b2-b61f-44fa-850b-eae919e1b4dc", avatar: "/lovable-uploads/383798b2-b61f-44fa-850b-eae919e1b4dc.png" },
  { name: "5e534ff6-c2a4-40a9-b749-3f04ab0bd6db", avatar: "/lovable-uploads/5e534ff6-c2a4-40a9-b749-3f04ab0bd6db.png" },
  { name: "16485530-2354-4be5-89c7-03604b29a2f7", avatar: "/lovable-uploads/16485530-2354-4be5-89c7-03604b29a2f7.png" },
  { name: "693563cb-6b17-4cf0-8544-8ad1174e23f2", avatar: "/lovable-uploads/693563cb-6b17-4cf0-8544-8ad1174e23f2.png" },
];

export function AdminTeams() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
      </div>
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploadedTeamImages.map((member, i) => (
          <TeamMemberCard
            key={i}
            member={{
              id: i + 1,
              name: member.name.replace(/-/g, " "),
              avatar: member.avatar,
              schedule: "",
              status: "",
              bookings: 0,
              weeklyAvailability: [],
            }}
          />
        ))}
      </div>
    </div>
  );
}
