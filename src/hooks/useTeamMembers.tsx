
import { useEffect, useState } from "react";

// The initial team members hardcoded list (use require so we avoid circular deps if any)
const initialTeamMembersData = [
  {
    id: 1,
    name: "Fadia",
    avatar: "/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png",
    status: "Active",
    schedule: "10:00am - 10:00pm",
    bookings: 0,
    phone: "+971501234567",
    email: "salonlushways@gmail.com",
    locations: [1],
    offeredServiceIds: [],
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

const LS_KEY = "teamMembersData";

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        // fallback if data is corrupted
      }
    }
    return initialTeamMembersData;
  });

  // Sync to localStorage on teamMembers changes
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(teamMembers));
  }, [teamMembers]);

  // CRUD functions
  function updateTeamMember(updatedMember: any) {
    setTeamMembers((prev: any[]) =>
      prev.map((m) => (m.id === updatedMember.id ? { ...m, ...updatedMember } : m))
    );
  }

  function addTeamMember(newMember: any) {
    setTeamMembers((prev: any[]) => [
      ...prev,
      { ...newMember, id: Date.now() },
    ]);
  }

  function deleteTeamMember(id: number) {
    setTeamMembers((prev: any[]) => prev.filter((m) => m.id !== id));
  }

  return {
    teamMembers,
    setTeamMembers,
    updateTeamMember,
    addTeamMember,
    deleteTeamMember,
  };
}

