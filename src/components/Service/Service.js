import React from "react";
import {
  filterEventsByService,
  filterEventsByUser,
} from "../../datas/eventsJoursFeries";
import "./service.css";

const Service = ({ groupes, nomGroupe, setFilteredEvents, events }) => {
  const nomDuGroupe = nomGroupe.replace("Filtre - Service ", "");
  return (
    <li className="service">
      <h2
        className="service__title"
        onClick={() =>
          filterEventsByService(nomDuGroupe, events, setFilteredEvents)
        }
      >
        {nomDuGroupe}
      </h2>
      {/* {groupes
        .filter(
          (item, i, arr) => arr.findIndex((each) => each.id === item.id) === i
        )
        .filter((group) => group.groupe === nomGroupe)
        .map((el) => (
          <div
            onClick={() =>
              filterEventsByUser(el.nom, events, setFilteredEvents)
            }
            className="service__element"
            style={{ color: el.couleur }}
            key={el.id}
          >
            {el.nom}
          </div>
        ))} */}
      {groupes
        .filter((group) => group.groupe === nomGroupe)
        .filter(
          (item, i, arr) => arr.findIndex((each) => each.id === item.id) === i
        )
        .map((el) => (
          <div
            onClick={() =>
              filterEventsByUser(el.nom, events, setFilteredEvents)
            }
            className="service__element"
            style={{ color: el.couleur }}
            key={el.id}
          >
            {el.nom}
          </div>
        ))}
    </li>
  );
};

export default Service;
