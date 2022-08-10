import { Chip, Paper, Stack, Typography } from "@mui/material";

type Event = {
  id: string;
  start?: string;
  end?: string;
  summary: string;
  location?: string;
  description?: string;
  calander: string;
};

export const CalanderEvent = ({ event }: { event: Event }) => {
  const getDateDay = (date: string | undefined) =>
    new Date(date || "")
      .toLocaleDateString("no-NO", { day: "numeric" })
      .replace(".", "");

  const getDateClock = (date: string | undefined) => {
    let clock = new Date(date || "");
    return clock.getHours() + ":" + clock.getMinutes();
  };

  const getDateWeekday = (date: string | undefined) =>
    new Date(date || "")
      .toLocaleDateString("no-NO", { weekday: "short" })
      .replace(".", "");

  const isSameDay = (day1: string | undefined, day2: string | undefined) =>
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
            <Typography> {event.summary}</Typography>
            <Chip size="small" label={event.calander} variant="filled"></Chip>
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
