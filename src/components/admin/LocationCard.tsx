
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Edit } from 'lucide-react';

interface Agent {
  name: string;
  avatar: string;
}

interface Location {
  id: number;
  name: string;
  address: string;
  type: string;
  agents: Agent[];
  coordinates: { lat: number; lng: number };
}

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Map placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <MapPin className="h-4 w-4 text-white" />
          </div>
        </div>
        {/* Map controls */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Button size="sm" variant="outline" className="w-8 h-8 p-0">+</Button>
          <Button size="sm" variant="outline" className="w-8 h-8 p-0">-</Button>
        </div>
        <div className="absolute top-2 left-2">
          <Button size="sm" variant="outline" className="text-xs">
            View larger map
          </Button>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-lg">{location.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{location.address}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Agents */}
        <div>
          <p className="text-sm font-medium mb-2">Agents:</p>
          <div className="flex -space-x-2">
            {location.agents.slice(0, 6).map((agent, index) => (
              <Avatar key={index} className="w-8 h-8 border-2 border-background">
                <AvatarImage src={agent.avatar} alt={agent.name} />
                <AvatarFallback className="text-xs">
                  {agent.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {location.agents.length > 6 && (
              <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                <span className="text-xs text-muted-foreground">+{location.agents.length - 6}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <MapPin className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Edit className="h-4 w-4 mr-1" />
            Edit Location
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
