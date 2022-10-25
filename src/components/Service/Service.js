import React from "react";
import { filterEventsByUser } from "../../datas/eventsJoursFeries";
import "./service.css";

const Service = ({ groupes, nomGroupe, setFilteredEvents, events }) => {
  return (
    <li className="service">
      <h2 className="service__title">
        {nomGroupe.replace("Filtre - Service ", "")}
      </h2>
      {groupes
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
        ))}
    </li>
  );
};

export default Service;
