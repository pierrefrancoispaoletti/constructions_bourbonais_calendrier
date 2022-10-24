import React from "react";

import "./calendar.css";
import { Scheduler } from "@aldabil/react-scheduler";
import { config } from "../../datas/configScheduler";

const Calendar = ({ events }) => {
  return (
    <div className="calendar">
      <Scheduler
        customEditor={(scheduler) => scheduler.close()}
        {...config}
        events={events}
      />
    </div>
  );
};

export default Calendar;
