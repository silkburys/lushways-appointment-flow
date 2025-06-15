
import { FC } from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { BookingItem, Customer } from "../../types/booking";

interface Props {
  item: BookingItem;
  customer: Customer;
}

const getEventTimes = (date: string, time: string, duration: number) => {
  const [hours, minutes] = time.split(":").map(Number);
  const start = new Date(date);
  start.setHours(hours, minutes, 0, 0);
  const end = new Date(start);
  end.setMinutes(start.getMinutes() + duration);
  return {
    start: start.toISOString(),
    end: end.toISOString(),
  };
};

const AddToCalendarButtonComp: FC<Props> = ({ item, customer }) => {
  const { start, end } = getEventTimes(item.date, item.time, item.service.duration);

  return (
    <AddToCalendarButton
      name={`Appointment: ${item.service.name}`}
      description={
        `Agent: ${item.staff.name}\nLocation: ${item.location.name}\nCustomer: ${customer.firstName} ${customer.lastName}\nPhone: ${customer.phone}\nEmail: ${customer.email}`
      }
      options={["Google", "Apple", "Outlook.com", "Yahoo"]}
      location={item.location.address}
      organizer={customer.email}
      startDate={start.split("T")[0]}
      endDate={end.split("T")[0]}
      startTime={start.split("T")[1].substring(0,5)}
      endTime={end.split("T")[1].substring(0,5)}
      timeZone="auto"
      iCalFileName={`appointment-${item.service.name}-${item.date}`}
      buttonStyle="date"
      // Use dark mode if you wish, e.g. buttonTheme="dark"
    />
  )
};

export default AddToCalendarButtonComp;
