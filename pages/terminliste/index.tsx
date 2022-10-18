import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { CalanderEvent } from "../../components/calander/calanderEvent";
import { CalanderMonth } from "../../components/calander/calanderMonth";
import Hero from "../../components/layout/hero";
import Layout from "../../components/layout/layout";

export type Event = {
  id: string;
  start: string;
  end: string;
  title: string;
  location?: string;
  description?: string;
  groupNames: { name: string; color: string }[];
};

export default function CalanderPage({ events }: { events: Event[] }) {
  const [calanderData, setCalanderData] = useState<Event[]>(events);
  const [filter, setFilter] = useState<string[]>(["Alle", "Troppen", "ROVERE"]);

  let currentMonth: null | number = null;

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFilter(newFormats);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const monthRow = function monthRow(date: string) {
    const thisMonth = new Date(date).getMonth();
    if (currentMonth === thisMonth) {
      return null;
    }
    currentMonth = thisMonth;
    return (
      <CalanderMonth
        month={capitalizeFirstLetter(
          new Date(date).toLocaleDateString("no-No", { month: "long" })
        )}
      />
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
          onChange={handleFormat}
          color="primary"
          aria-label="text alignment"
          sx={{ flexWrap: "wrap", my: 2 }}
        >
          {[...new Set(events.map((event) => event.groupNames[0].name))].map(
            (group, index) => (
              <ToggleButton key={index} value={group} aria-label="left aligned">
                {group}
              </ToggleButton>
            )
          )}
        </ToggleButtonGroup>
        <Stack maxWidth={800} spacing={0.5}>
          {calanderData.length >= 0 ? (
            calanderData
              .filter((event) => filter.includes(event.groupNames[0].name))
              .map((event) => (
                <div key={event.id}>
                  {monthRow(event.start)}
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
    "public, s-maxage=3600, stale-while-revalidate=3800"
  );

  const TIME_MIN = new Date(Date.now() - 86400000).toISOString();

  const formatedNowDate = ()=> {
    let now = new Date()
    let month = now.getUTCMonth().toString()
    let day = now.getUTCDay().toString()
    return now.getUTCFullYear() + "-" + (month.length <= 1 ? "0"+ month : month)  +"-" +(day.length <= 1 ? "0"+ day : day) + "T00:00:00.000Z"
  }
  const response = await fetch(
    `${process.env.BASE_URL}/sponds/?includeComments=true&includeHidden=true&addProfileInfo=true&scheduled=true&order=asc&max=20&groupId=${process.env.GROUP_ID}&minEndTimestamp=2022-10-17T22:00:00.001Z`,
    {
      headers: {
        'Cookie': `auth=${process.env.SPOND_AUTH_KEY}`
      }
    }
  );

  let responseData: any[] = await response.json();

  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + "... Les mer på Spond." : str;
  }

  const data: Event[] = await responseData.map((event) => {
    return {
      id: event.id,
      title: event.heading,
      description: event.description ? truncate(event.description, 150) : " ",
      start: event.startTimestamp,
      end: event.endTimestamp,
      groupNames: typeof event.recipients.group.subGroups === "object" ? event.recipients.group?.subGroups.map((group) => {
        return { name: group.name, color: group.color };
      }) || [{ name: "Alle", color: "black" }] : [{ name: "Alle", color: "black" }],
      location: event.location?.feature || "",
    } as Event;
  });

  const events = (await data.sort(
    (event1, event2) =>
      new Date(event1.start || "").getTime() -
      new Date(event2.start || "").getTime()
  )) as Event[];

  // Pass data to the page via props
  return { props: { events } };
};
