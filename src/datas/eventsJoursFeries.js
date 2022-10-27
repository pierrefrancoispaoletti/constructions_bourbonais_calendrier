import Axios from "axios";
import { aServices } from "./services";

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
      start: new Date(`${date} 09:00`),
      end: new Date(`${date} 18:00`),
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
      valide,
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
        absence: newDatas.custom_n5,
        hidden: false,
        title: `${firstname} ${lastname}`,
        start: new Date(
          `${newDatas.custom_d2} ${
            newDatas.custom_n4.includes("1") ? "09:00" : "12:00"
          }`
        ),
        end: new Date(
          `${newDatas.custom_d3} ${
            newDatas.custom_n6.includes("1") ? "12:00" : "18:00"
          }`
        ),
        disabled: false,
        color:
          valide === "OUI"
            ? couleur
            : `repeating-linear-gradient(45deg,#606dbc,#606dbc 10px, ${couleur} 10px,${couleur} 20px)`,
        admin_id: aServices.find(
          (service) => service.title === newDatas.custom_n2
        )?.admin_id,
      };

      return event;
    }
  );
  console.log(events);
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
  setter(
    newEvents.map((event) => {
      if (event.service?.includes(service) || event.title.includes("Férié")) {
        return { ...event };
      } else {
        return { ...event, hidden: true };
      }
    })
  );
};

export const handleRemoveFilters = (setter, events) => {
  setter([...events]);
};
