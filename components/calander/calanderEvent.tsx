import { Chip, Paper, Stack, Typography } from "@mui/material";
import { Event } from "../../pages/terminliste";
import { unitStyles } from "../style/unitColor";

export const CalanderEvent = ({ event }: { event: Event }) => {
  const getDateDay = (date: string) =>
    new Date(date || "")
      .toLocaleDateString("no-NO", { day: "numeric" })
      .replace(".", "");

  const getDateClock = (date: string) => {
    let clock = new Date(date || "");
    let hours = clock.getHours().toString()
    let minutes = clock.getMinutes().toString()
    
    return (hours.length <= 1 ? hours + "0" : hours) + ":" + (minutes.length  <= 1 ?  minutes + "0" : minutes);
  };

  const getDateWeekday = (date: string) =>
    new Date(date || "")
      .toLocaleDateString("no-NO", { weekday: "short" })
      .replace(".", "");

  const isSameDay = (day1: string, day2: string) =>
    getDateDay(day1) === getDateDay(day2);

  return (
    <Paper sx={{ py: 2, px: 1 }}>
      <Stack key={event.id} direction="row" spacing={1}>
        <Stack sx={{ minWidth: 70 }}>
          <Typography
            align="center"
            variant="h3"
            fontWeight={600}
            fontSize="1.2rem"
          >
            {isSameDay(event.start, event.end)
              ? getDateDay(event.start)
              : getDateDay(event.start) + "-" + getDateDay(event.end)}
          </Typography>
          <Typography
            align="center"
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            {isSameDay(event.start, event.end)
              ? getDateWeekday(event.start)
              : getDateWeekday(event.start) + "-" + getDateWeekday(event.end)}
          </Typography>
        </Stack>
        <Stack sx={{ flexGrow: 1 }} spacing={0.5}>
          <Stack direction="row" spacing={2}>
            <Typography fontWeight={600}> {event.title}</Typography>
            {event.groupNames.map((groupName) => (
              <Chip
                size="small"
                label={groupName.name}
                variant="filled"
                style={{
                  backgroundColor: groupName.color,
                  color:
                    unitStyles[groupName.name.toLowerCase()]?.color ||
                    unitStyles["troppen"]?.color,
                }}
              />
            ))}
          </Stack>
          <Stack direction="row" spacing={2}>
            {event.end && (
              <Typography>
                {getDateClock(event.start) + "-" + getDateClock(event.end)}
              </Typography>
            )}
            {event.location && <Typography>{event.location}</Typography>}
          </Stack>
          {event.description && (
            <Paper sx={{ p: 2 }} variant="outlined">
              <Typography sx={{ wordBreak: "break-word", boxShadow: "" }}>
                {" "}
                {event.description}
              </Typography>
            </Paper>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};
