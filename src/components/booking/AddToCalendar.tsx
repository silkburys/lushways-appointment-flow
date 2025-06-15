
import { Calendar } from 'lucide-react';
import { Button } from '../ui/button';

interface AddToCalendarProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

const AddToCalendar = ({ title, date, time, location, description }: AddToCalendarProps) => {
  const handleAddToCalendar = () => {
    // Convert date and time to proper format
    const eventDate = new Date(`${date} ${time}`);
    const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000); // Add 1 hour
    
    // Format dates for calendar
    const startDateTime = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDateTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    // Create calendar URL (Google Calendar format, but works with most calendar apps)
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(description || 'Appointment booked via Lushways')}`;
    
    // Open in new window/tab
    window.open(calendarUrl, '_blank');
  };

  return (
    <Button variant="outline" size="sm" onClick={handleAddToCalendar} className="text-xs">
      <Calendar className="w-4 h-4 mr-1" />
      Add to Calendar
    </Button>
  );
};

export default AddToCalendar;
