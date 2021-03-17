import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';


export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const setInitialState = () => {
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setInitialState();   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
                      contacts={contacts}
                      title={title}
                      contact={contact}
                      date={date}
                      time={time}
                      setTitle={setTitle}
                      setContact={setContact}
                      setDate={setDate}
                      setTime={setTime}
                      handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
              ObjArr={appointments}
        />
      </section>
    </div>
  );
};
