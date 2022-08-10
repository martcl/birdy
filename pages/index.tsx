import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ImageCard from "../components/layout/imageCard";
import Layout from "../components/layout/layout";
import UsefulLinks from "../components/navigation/usefulLinks";

export default function IndexPage() {
  return (
    <Layout>
      <Grid
        container
        direction="row"
        sx={{
          background: (theme) =>
            `radial-gradient(circle at bottom, rgb(200 255 255), rgb(100 200 200))`,
          color: "text.primary",
        }}
      >
        <Grid item xs={12} md={7}>
          <Box height="80vh" width="100%" position="relative">
            <Image
              priority
              src="/leirbaal.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              px: 4,
              py: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image src="/nsf.png" height={80} width={80}></Image>
            <Typography variant="h1" textAlign="center">
              Nadderud Speidergeuppe
            </Typography>
            <Typography paragraph maxWidth={400}>
              Spennende friluftsliv for barn og ungdom fra 3. klasse og oppover.
              Vi er en aktiv speidergruppe med ca. 100 medlemmer som dekker
              området Nadderud, Bekkestua, Hosle, Eikeli og Haslum.
            </Typography>
            <Stack direction="row" gap={2}>
              <Link href="/terminliste">
                <Button variant="outlined">Terminliste</Button>
              </Link>
              <Link href="/bli-speider">
                <Button variant="contained">Les mer</Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <ImageCard src="/leirbaal.jpeg" reverse>
        <Typography variant="h2"> Tester testersen</Typography>
        <Typography>
          Å være speider er gøy! Vi opplever masse forskjellig – alt fra
          teltturer til å lage teater, fra pizza på bål til å gjøre en innsats
          for andre. Vi er mye ute i skogen, på sjøen og på fjellet og har det
          fint sammen med gode venner. Du lærer deg mye praktisk og morsomt som
          er smart å kunne, og på leir blir du kjent med speidere fra andre
          steder og andre land. Bli med og prøv noe nytt sammen med oss!
        </Typography>
      </ImageCard>

      <UsefulLinks />
    </Layout>
  );
}
