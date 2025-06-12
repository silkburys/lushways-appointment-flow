
import { useState } from 'react';
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface DateTimeSelectionProps {
  onSelect: (date: string, time: string) => void;
  onBack: () => void;
}

const DateTimeSelection = ({ onSelect, onBack }: DateTimeSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // June 2025

  const timeSlots = [
    '10:00 am', '11:00 am', '12:00 pm', '01:00 pm',
    '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm',
    '06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm',
    '10:00 pm'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const formatDate = (day: number) => {
    const month = currentMonth.getMonth() + 1;
    const year = currentMonth.getFullYear();
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  };

  const handleDateSelect = (day: number) => {
    const dateStr = formatDate(day);
    setSelectedDate(dateStr);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onSelect(selectedDate, time);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
          <Calendar className="w-8 h-8 text-orange-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Date & Time</h2>
          <p className="text-gray-600">
            Click on a date to see a timeline of available slots, 
            click on a green time slot to reserve it
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Date & Time Selection</h3>
        
        {/* Calendar Header */}
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h4 className="text-lg font-medium">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h4>
            <Button variant="ghost" size="sm" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentMonth).map((day, index) => (
              <button
                key={index}
                className={`p-2 text-center text-sm rounded ${
                  day 
                    ? selectedDate === formatDate(day)
                      ? 'bg-orange-500 text-white'
                      : day >= 13 && day <= 30
                      ? 'hover:bg-green-100 border-b-2 border-green-500 text-gray-900'
                      : 'text-gray-400'
                    : ''
                }`}
                disabled={!day || day < 13}
                onClick={() => day && handleDateSelect(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {selectedDate && (
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Pick a slot for {selectedDate}</p>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map(time => (
                  <Button
                    key={time}
                    variant="outline"
                    size="sm"
                    className="bg-green-100 border-green-300 text-green-800 hover:bg-green-200"
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">questions?</p>
          <p className="text-sm text-gray-500">
            Call 052 182 2999 for help<br />
            booking@lushways.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
