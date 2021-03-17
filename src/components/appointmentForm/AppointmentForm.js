import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  }
  const handleDate = ({ target }) => {
    setDate(target.value);
  }
  const handleTime = ({ target }) => {
    setTime(target.value);
  }
  const handleContactPicker = ({ target }) => {
    setContact(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={title}
          onChange={handleTitle}
      />
      <input
          type="date"
          value={date}
          onChange={handleDate}
          min={getTodayString}
      />
      <input
          type="time"
          value={time}
          onChange={handleTime}
      />
      <ContactPicker
                  contacts={contacts}
                  onChange={handleContactPicker}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
