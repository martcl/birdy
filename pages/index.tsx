import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
        sx={{ backgroundColor: "background.smoke", color: "text.primary" }}
      >
        <Grid item xs={12} md={7}>
          <Box
            height="80vh"
            width="100%"
            position="relative"
          >
            <Image
              priority
              src="/leirbaal.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ px: 4, py: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <Image src="/nsf.png" height={80} width={80}></Image>
            <Typography variant="h1" textAlign="center">
              Nadderud Speidergeuppe
            </Typography>
            <Typography paragraph maxWidth={400}>
              Spennende friluftsliv for barn og ungdom fra 3. klasse og oppover.
              Vi er en aktiv speidergruppe med ca. 100 medlemmer som dekker
              området Nadderud, Bekkestua, Hosle, Eikeli og Haslum.
            </Typography>
            <Link href="/terminliste">
              <Button variant="contained">Les mer</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <ImageCard src="/leirbaal.jpeg">

      </ImageCard>
      <Container>

      </Container>
      <UsefulLinks />
    </Layout>
  );
}
