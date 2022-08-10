import { Container, Paper, Stack, Typography } from "@mui/material";
import Hero from "../../components/layout/hero";
import Layout from "../../components/layout/layout";

export default function ClientPage() {
  return (
    <Layout>
      <Hero
        title="Informasjon"
        explanation="Spennende friluftsliv for barn og ungdom fra 3. klasse og oppover. Vi er en aktiv speidergruppe med ca. 100 medlemmer som dekker området Nadderud, Bekkestua, Hosle, Eikeli og Haslum."
        src="/leirbaal.jpeg"
        description="Kontakt oss hvis du lurer på noe!"
      ></Hero>

      <Container sx={{ py: 4, px: 2 }}>
        <Stack gap={2} maxWidth={600}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h3">Generell info</Typography>
            <ul>
              <li> Møtelokaler: Øygardveien 49, 1357 Bekkestua</li>
              <li>
                Postadresse: Nadderud speidergruppe, v/Merete Haukedal,
                Rytterfaret
              </li>
              <li>25, 1362 Hosle Telefonnummer: 411 44 182 E-postadresse:</li>
              <li> post@nadderud.no Kontonummer: 9235.19.85773</li>
            </ul>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h3">Kontakt oss</Typography>
            <ul>
              <li> Anne Marie Torbjørnsdal, gruppeleder:</li>
              <li>Philip Godager, troppsleder (5.–10. klasse):</li>
              <li>Kristian Sveen-Østensen, flokkleder (3.–4. klasse):</li>
            </ul>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h3">Sosiale medier</Typography>
            <ul>
              <li> Instagram: @nadderudspeidergruppe</li>
              <li>Facebook: Nadderud speidergruppe</li>
            </ul>
          </Paper>
        </Stack>
      </Container>
    </Layout>
  );
}
