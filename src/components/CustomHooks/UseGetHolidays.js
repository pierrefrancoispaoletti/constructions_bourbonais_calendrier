import { useEffect } from "react";
import { getJoursFeries } from "../../datas/eventsJoursFeries";

const UseGetHolidaysEvents = (setter) => {
  useEffect(() => {
    getJoursFeries(setter);
  }, [setter]);
};

export default UseGetHolidaysEvents;
