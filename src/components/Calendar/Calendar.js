import React from "react";

import "./calendar.css";
import { Scheduler } from "@aldabil/react-scheduler";
import { config } from "../../datas/configScheduler";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { aServices } from "../../datas/services";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Calendar = ({ events }) => {
  const [mode, setMode] = useState("default");
  return (
    <div className="calendar">
      <div style={{ textAlign: "center" }}>
        <span>Mode de vue du calendrier </span>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("default")}
        >
          Normale
        </Button>
        <Button
          color={mode === "tabs" ? "primary" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("tabs")}
        >
          Tabulations
        </Button>
        <Button
          color={mode === "full" ? "primary" : "inherit"}
          variant={mode === "full" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("full")}
        >
          Fusioné
        </Button>
      </div>
      <Scheduler
        customEditor={(scheduler) => scheduler.close()}
        {...config}
        resourceViewMode={mode}
        eventRenderer={(event) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>{event.title}</div>
          </div>
        )}
        events={events}
        resources={mode !== "full" ? aServices : []}
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          subTextField: "",
          avatarField: "title",
          colorField: "color",
        }}
        fields={[
          {
            name: "admin_id",
            type: "select",
            default: aServices[0].admin_id,
            options: aServices.map((res) => {
              return {
                id: res.admin_id,
                text: `${res.title}`,
                value: res.admin_id, //Should match "name" property
              };
            }),
            config: { label: "Assignee", required: true },
          },
        ]}
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              {fields.map((field, i) => {
                if (field.name === "admin_id") {
                  const admin = field.options.find(
                    (fe) => fe.id === event.admin_id
                  );
                  return (
                    <Typography
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                      color="textSecondary"
                      variant="caption"
                      noWrap
                    >
                      <PersonRoundedIcon /> {event.absence}
                    </Typography>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Calendar;
