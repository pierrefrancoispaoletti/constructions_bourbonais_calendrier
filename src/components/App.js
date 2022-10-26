import { useEffect, useState } from "react";
import { users as userdatas } from "../datas/services";
import "./App.css";
import Services from "./Services/Services";
import Calendar from "./Calendar/Calendar";
import UseGetHolidaysEvents from "./CustomHooks/UseGetHolidays";
import { generateEvents } from "../datas/eventsJoursFeries";

var datas = window.allDocuments ?? userdatas;
const filteredUsergroups = datas.filter((element) => {
  if (element.group_desc.toLowerCase().includes("serv")) {
    return element;
  }
});
const groupeParNom = filteredUsergroups
  .sort((a, b) => {
    return a.group_desc.localeCompare(b.group_desc);
  })
  .map((element) => {
    let fullName = `${element.firstname} ${element.lastname}`;
    return {
      nom: fullName,
      groupe: element.group_desc,
      id: element.user_id,
      couleur: element.couleur,
    };
  });

function App() {
  const [groupes, setGroupes] = useState([...groupeParNom]);

  const [joursFeries, setJoursFeries] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  UseGetHolidaysEvents(setJoursFeries);

  useEffect(() => {
    setUserEvents([...generateEvents(datas), ...joursFeries]);
    setFilteredEvents([...generateEvents(datas), ...joursFeries]);
  }, [joursFeries]);

  //console.log(filteredEvents);

  return (
    <div className="App">
      <Services
        groupes={groupes}
        events={userEvents}
        setFilteredEvents={setFilteredEvents}
      />
      <Calendar events={filteredEvents.filter((event) => !event.hidden)} />
    </div>
  );
}

export default App;
