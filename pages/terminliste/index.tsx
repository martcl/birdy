import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../../components/layout/hero";
import Layout from "../../components/layout/layout";

export const calanders = [
  {
    name: "Alle",
    id: "nadderud.no_nmhftcmqkjihqv2p0dbdh09o34@group.calendar.google.com",
    visible: false,
  },
  {
    name: "Flokken",
    nameExt: " (3-4. klasse)",
    id: "nadderud.no_qlitigf1h23kh5koa0omi1apu8@group.calendar.google.com",
    visible: true,
    sortKey: 10,
  },
  {
    name: "Troppen",
    nameExt: " (5-10. klasse)",
    id: "nadderud.no_2929cu4kt3lj8tqu7ob8joguf0@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Ekorn",
    id: "nadderud.no_76a5l1knl6qh54jkg3s93uf3fc@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Elg",
    id: "nadderud.no_3cvsqgnedtvt3na142fli5cels@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Hare",
    id: "nadderud.no_nve4frornciu2fpa3qa55amef0@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Rev",
    id: "nadderud.no_vtvgrgkpp18gvsh0pcksb379og@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Ulv",
    id: "nadderud.no_fb2bu5m6arldhi5b7kr9nrgid4@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Ørn",
    id: "nadderud.no_609bou5r8u9cl5e5lqdve7vq18@group.calendar.google.com",
    visible: true,
    sortKey: 20,
  },
  {
    name: "Roverlaget",
    nameExt: " (16-25 år)",
    id: "c_dpj0b5jk1slqj2sb9tj0ot7kj0@group.calendar.google.com",
    visible: true,
    sortKey: 30,
  },
];

type Event = {
  id: string;
  start?: string;
  end?: string;
  summary: string;
  location?: string;
  description?: string;
  calander: string;
};

export default function CalanderPage({ events }: { events: Event[] }) {
  const [calanderData, setCalanderData] = useState<Event[]>(events);
  const [filter, setFilter] = useState<string | null>("Alle");

  useEffect(() => {
    console.log(events);
    console.log(calanderData);
  }, [calanderData]);

  const handleFilter = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => {
    setFilter(newFilter);
    switch (newFilter) {
      case "Alle":
        setCalanderData(events);
        return;
      case "Flokken":
        setCalanderData(
          events.filter(
            (event) => event.calander === "Flokken" || event.calander === "Alle"
          )
        );

        return;
      case "Troppen":
        setCalanderData(
          events.filter(
            (event) => event.calander === "Troppen" || event.calander === "Alle"
          )
        );
        return;
      case "Roverlaget":
        setCalanderData(
          events.filter(
            (event) =>
              event.calander === "Roverlaget" ||
              event.calander === "Troppen" ||
              event.calander === "Alle"
          )
        );
        return;
      default:
        setCalanderData(
          events.filter(
            (event) =>
              event.calander === newFilter ||
              event.calander === "Alle" ||
              event.calander === "Troppen"
          )
        );
        return;
    }
  };

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
    <Layout>
      <Hero
        src="/leirbaal.jpeg"
        description="Her finner du møter og turer vi har planlagt fremover. Vi bruker også Spond."
      />
      <Container sx={{ py: 5, px: 2 }}>
        <Typography variant="h2" fontWeight={600}>
          Terminlista
        </Typography>
        <Typography>
          Her bår det kanskje stå noe om hva som finnes av arrangementer og
          hvordan man finner sine eventer med filtrering
        </Typography>
        <ToggleButtonGroup
          value={filter}
          exclusive
          color="primary"
          onChange={handleFilter}
          aria-label="text alignment"
          sx={{ flexWrap: "wrap", my: 2 }}
        >
          {calanders.map((calander) => (
            <ToggleButton
              key={calander.id}
              value={calander.name}
              aria-label="left aligned"
            >
              {calander.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Stack
          maxWidth={800}
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={1}
        >
          {calanderData.length > 0 ? (
            calanderData.map((event) => (
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
                        : getDateWeekday(event.start) +
                          "-" +
                          getDateWeekday(event.end)}
                    </Typography>
                  </Stack>
                  <Stack sx={{ flexGrow: 1 }} spacing={0.5}>
                    <Stack direction="row" spacing={2}>
                      <Typography> {event.summary}</Typography>
                      <Chip
                        size="small"
                        label={event.calander}
                        variant="filled"
                      ></Chip>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      {event.end && (
                        <Typography>
                          {getDateClock(event.start) +
                            "-" +
                            getDateClock(event.end)}
                        </Typography>
                      )}
                      {event.location && (
                        <Typography>{event.location}</Typography>
                      )}
                    </Stack>
                    {event.description && (
                      <Paper sx={{ p: 2 }} variant="outlined">
                        <Typography
                          sx={{ wordBreak: "break-word", boxShadow: "" }}
                        >
                          {" "}
                          {event.description}
                        </Typography>
                      </Paper>
                    )}
                  </Stack>
                </Stack>
              </Paper>
            ))
          ) : (
            <Stack sx={{p: 3, gap: 1, alignItems: "center"}}>
              <Box sx={{ position: "relative", height: 300, width: 300 }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/empty.svg"
                ></Image>
              </Box>
              <Typography maxWidth={400}>
                Vi fant ingen arrangementer på nettsiden. Sjekk Spond, vi er mer aktive der.
              </Typography>
            </Stack>
          )}
        </Stack>
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const TIME_MIN = new Date(Date.now() - 86400000).toISOString();

  const responses = await Promise.all(
    calanders.map((calander) => {
      return fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calander.id}/events?timeMin=${TIME_MIN}&key=${process.env.GOOGLE_KEY}`
      );
    })
  );

  const data = await Promise.all(
    responses.map(async (res) => {
      const calData = await res.json();
      return calData.items.map((item: any) => {
        return {
          id: item?.id,
          start: item?.start.dateTime || null,
          end: item?.end.dateTime || null,
          summary: item?.summary || "",
          location: item?.location || null,
          description: item?.description || "",
          calander: calData?.summary || "",
        };
      });
    })
  );

  const events = (await data.flat().sort()) as Event[];
  // Pass data to the page via props
  return { props: { events } };
};
