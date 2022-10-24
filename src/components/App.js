import { useEffect, useState } from "react";
import { users as usergroups } from "../datas/services";
import "./App.css";
import Services from "./Services/Services";
import Calendar from "./Calendar/Calendar";
import UseGetHolidaysEvents from "./CustomHooks/UseGetHolidays";
const filteredUsergroups = usergroups.filter((element) => {
  if (element.group_desc.toLowerCase().includes("serv")) {
    return element;
  }
});

const generateColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

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
      couleur: generateColor(),
    };
  });

function App() {
  const [groupes, setGroupes] = useState([...groupeParNom]);

  const [joursFeries, setJoursFeries] = useState([]);
  UseGetHolidaysEvents(setJoursFeries);

  return (
    <div className="App">
      <Services groupes={groupes} />
      <Calendar events={joursFeries} />
    </div>
  );
}

export default App;
