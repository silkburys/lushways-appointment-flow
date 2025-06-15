
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddTeamMemberModalProps {
  onClose: () => void;
}

export function AddTeamMemberModal({ onClose }: AddTeamMemberModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schedule: '',
    avatar: ''
  });

  const [weeklySchedule, setWeeklySchedule] = useState([
    { day: 'Monday', available: true },
    { day: 'Tuesday', available: true },
    { day: 'Wednesday', available: true },
    { day: 'Thursday', available: true },
    { day: 'Friday', available: true },
    { day: 'Saturday', available: true },
    { day: 'Sunday', available: false },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate adding team member
    console.log('Adding team member:', formData, weeklySchedule);
    
    toast({
      title: "Team Member Added",
      description: `${formData.name} has been successfully added to the team.`,
    });
    
    onClose();
  };

  const toggleDayAvailability = (index: number) => {
    setWeeklySchedule(prev => 
      prev.map((day, i) => 
        i === index ? { ...day, available: !day.available } : day
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Add Team Member</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar Upload */}
            <div className="space-y-2">
              <Label>Profile Photo</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter email address"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="schedule">Daily Schedule</Label>
                <Input
                  id="schedule"
                  value={formData.schedule}
                  onChange={(e) => setFormData({...formData, schedule: e.target.value})}
                  placeholder="e.g., 10:00am - 10:00pm"
                  required
                />
              </div>
            </div>

            {/* Weekly Availability */}
            <div className="space-y-3">
              <Label>Weekly Availability</Label>
              <div className="grid grid-cols-7 gap-2">
                {weeklySchedule.map((day, index) => (
                  <div key={day.day} className="text-center">
                    <div className="text-xs font-medium mb-2 text-muted-foreground">
                      {day.day.slice(0, 3)}
                    </div>
                    <Button
                      type="button"
                      variant={day.available ? "default" : "outline"}
                      size="sm"
                      className="w-full h-8"
                      onClick={() => toggleDayAvailability(index)}
                    >
                      <div 
                        className={`w-2 h-2 rounded-full ${
                          day.available ? 'bg-white' : 'bg-green-500'
                        }`}
                      />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Add Team Member
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
