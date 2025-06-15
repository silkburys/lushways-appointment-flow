import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMember {
  id: number;
  name: string;
  avatar: string;
  schedule?: string;
  status?: string;
  bookings?: number;
  weeklyAvailability?: { day: string; available: boolean }[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-16 h-16">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>
              {member.name ? member.name[0].toUpperCase() : "?"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* No details, only name and avatar */}
      </CardContent>
    </Card>
  );
}
