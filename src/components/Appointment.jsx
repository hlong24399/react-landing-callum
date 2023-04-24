import React from 'react'
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
  } from "@devexpress/dx-react-scheduler-material-ui";
  import {
    ViewState,
    EditingState,
  } from "@devexpress/dx-react-scheduler";
import { useState } from 'react';

const Appointment = () => {
    const [currentAppointment, setCurrentAppointment] = useState({
      startDate: new Date(),
      endDate: new Date(),
      title: "",
    });
  
    const handleAppointmentChange = (nextAppointment) => {
        console.log("Appointment changed:", nextAppointment);
      setCurrentAppointment(nextAppointment);
    };
  
    const handleButtonClick = () => {
      const updatedAppointment = {
        ...currentAppointment,
        startDate: new Date(currentAppointment.startDate.getTime() + 3600000),
        endDate: new Date(currentAppointment.endDate.getTime() + 3600000),
      };
      console.log("Appointment changed:", currentAppointment);

      setCurrentAppointment(updatedAppointment);
    };

    const handleCommitChanges = ({ added, changed, deleted }) => {
        console.log("Commit changes:", added, changed, deleted);
        // TODO: Handle changes to the appointments data source
      };
  
    return (
      <div>
        <Scheduler data={[]}>
          <ViewState currentDate={new Date()} />  
          <EditingState
          onCommitChanges={handleCommitChanges}
            onAppointmentChange={handleAppointmentChange}
            defaultEditingAppointment={currentAppointment}
          />
          <WeekView startDayHour={9} endDayHour={18} />
          <Appointments />
          <AppointmentTooltip showCloseButton />
          <AppointmentForm defaultAppointment={currentAppointment} />
        </Scheduler>
        <button onClick={handleButtonClick}>Add 1 Hour</button>
      </div>
    );
  };
  
  export default Appointment;