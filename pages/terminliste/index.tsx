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
import { ReactNode, useEffect, useState } from "react";
import { CalanderEvent } from "../../components/calander/calanderEvent";
import { CalanderMonth } from "../../components/calander/calanderMonth";
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

  let currentMonth: null | number = null;

  const monthRow = function monthRow(date: string) {
    const thisMonth = new Date(date).getMonth();
    if (currentMonth === thisMonth) {
      return null;
    }
    currentMonth = thisMonth;
    return (
      <CalanderMonth month={new Date(date).toLocaleDateString("no-No", { month: "long" })} />
    );
  };

  return (
    <Layout>
      <Hero
        height={200}
        title="Program"
        src="/bilder/vaffel.jpg"
        explanation="Her finner du møter og turer vi har planlagt fremover. Vi bruker også Spond."
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
              <div key={event.id}>
                {monthRow(event.start || "")}
                <CalanderEvent event={event} />
              </div>
            ))
          ) : (
            <Stack sx={{ p: 3, gap: 1, alignItems: "center" }}>
              <Box sx={{ position: "relative", height: 300, width: 300 }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/empty.svg"
                ></Image>
              </Box>
              <Typography maxWidth={400}>
                Vi fant ingen arrangementer på nettsiden. Sjekk Spond, vi er mer
                aktive der.
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
    "public, s-maxage=120, stale-while-revalidate=400"
  );

  const TIME_MIN = new Date(Date.now() - 86400000).toISOString();

  const responses = await Promise.all(
    calanders.map((calander) => {
      return fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calander.id}/events?timeMin=${TIME_MIN}&key=${process.env.GOOGLE_KEY}`
      );
    })
  );

  const data: Event[] = await Promise.all(
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

  const events = (await data.flat().sort((event1, event2) => new Date(event1.start || "").getTime() - new Date(event2.start || "").getTime())) as Event[];
  // Pass data to the page via props
  return { props: { events } };
};
