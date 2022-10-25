import { ConnectedTvOutlined } from "@mui/icons-material";
import Axios from "axios";

let zone = "metropole";

export const getJoursFeries = async (setter) => {
  let annee = new Date().getFullYear();
  const url = `https://calendrier.api.gouv.fr/jours-feries/${zone}/${annee}.json`;

  try {
    const response = await Axios.get(url);

    let dates = Object.keys(response.data);

    let holidayEvents = dates.map((date) => ({
      event_id: date,
      title: `Férié ${response.data[date]}`,
      start: new Date(`${date} 00:01`),
      end: new Date(`${date} 23:59`),
      disabled: false,
      color: "grey",
      description: "Jour Férié",
    }));
    setter([...holidayEvents]);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const generateEvents = (conges) => {
  let events = conges.map(
    ({
      Documents,
      Res_Id,
      firstname,
      lastname,
      user_id,
      couleur,
      ...conge
    }) => {
      const [{ ...datas }, ...Conge] = Documents;
      let newDatas = Object.keys(datas).map((el) => ({
        [el]: datas[el].join(),
      }));
      newDatas = Object.values(newDatas).reduce(
        (old, item) => ({ ...old, ...item }),
        {}
      );
      let event = {
        event_id: Res_Id,
        service: newDatas.custom_n2,
        fullname: `${firstname} ${lastname}`,
        hidden: false,
        title: `${newDatas.custom_n5} de ${firstname} ${lastname}`,
        start: new Date(`${newDatas.custom_d2} 09:00`),
        end: new Date(`${newDatas.custom_d3} 17:00`),
        disabled: false,
        color: couleur,
      };
      return event;
    }
  );
  return events;
};

export const filterEventsByUser = (userName, events, setter) => {
  let newEvents = [...events];

  setter(
    newEvents.map((event) => {
      if (event.fullname === userName || event.title.includes("Férié")) {
        return { ...event };
      } else {
        return { ...event, hidden: true };
      }
    })
  );
};

export const filterEventsByService = (service, events, setter) => {
  let newEvents = [...events];
  let filteredEvents = newEvents.filter((event) => {
    return event.service === service;
  });
  setter([...filteredEvents]);
};

export const handleRemoveFilters = (setter, events) => {
  setter([...events]);
};
