import { Button } from "@mui/material";
import React from "react";
import { handleRemoveFilters } from "../../datas/eventsJoursFeries";
import Service from "../Service/Service";
import "./services.css";

const Services = ({ groupes, setFilteredEvents, events }) => {
  const getNomGroupes = () => {
    return Array.from(new Set(groupes.map((group) => group.groupe)));
  };

  return (
    groupes.length && (
      <>
        <Button
          variant="outlined"
          type="button"
          onClick={() => handleRemoveFilters(setFilteredEvents, events)}
        >
          Tous
        </Button>
        <ul className="services">
          {getNomGroupes().map((nomGroupe) => (
            <Service
              key={nomGroupe}
              nomGroupe={nomGroupe}
              groupes={groupes}
              setFilteredEvents={setFilteredEvents}
              events={events}
            />
          ))}
        </ul>
      </>
    )
  );
};

export default Services;
