
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit } from 'lucide-react';

interface WeeklyAvailability {
  day: string;
  available: boolean;
}

interface TeamMember {
  id: number;
  name: string;
  avatar: string;
  status: string;
  schedule: string;
  bookings: number;
  weeklyAvailability: WeeklyAvailability[];
  email?: string;
  phone?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  onEdit?: (id: number) => void;
}

export function TeamMemberCard({ member, onEdit }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>
                {member.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Weekly Schedule */}
        <div className="flex justify-between items-center text-xs">
          {member.weeklyAvailability.map((day) => (
            <div key={day.day} className="text-center">
              <div className="mb-1 text-muted-foreground">{day.day}</div>
              <div 
                className={`w-2 h-2 rounded-full mx-auto ${
                  day.available ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            </div>
          ))}
        </div>
        {/* Status and Schedule */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Today</span>
            <Badge variant="outline" className={`text-green-600 border-green-600`}>
              {member.status}
            </Badge>
          </div>
          <div className="text-sm font-medium">{member.schedule}</div>
        </div>
        {/* Bookings */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Bookings</span>
          <span className="text-2xl font-bold">{member.bookings}</span>
        </div>
        {/* Edit Button */}
        <Button variant="outline" size="sm" className="w-full"
          onClick={() => onEdit?.(member.id)}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Agent
        </Button>
      </CardContent>
    </Card>
  );
}

