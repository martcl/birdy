import {
  Container,
  List,
  ListItem,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
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
      <Paper square sx={{ py: 4, px: 2, my: 2 }}>
        <Container>
          <Stack gap={2} maxWidth={600}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h3">Generell info</Typography>
              <List sx={{ listStyleType: "disc", mx: 2 }}>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                  Møtelokaler: Øygardveien 49, 1357 Bekkestua
                </ListItem>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                  Postadresse: Nadderud speidergruppe, v/Merete Haukedal,
                  Rytterfaret 25, 1362 Hosle
                </ListItem>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                  E-postadresse:{" "}
                  <a href="mailto:post@nadderud.no">post@nadderud.no</a>
                </ListItem>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                  Kontonummer: 9235.19.85773
                </ListItem>
              </List>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h3">Kontakt oss</Typography>
              <List sx={{ listStyleType: "disc", mx: 2 }}>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                  Anne Marie Torbjørnsdal, gruppeleder: <br></br>
                  47242810,
                  <a href="mailto:annemarietorb@gmail.com">
                    annemarietorb@gmail.com
                  </a>
                </ListItem>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                  Philip Godager, troppsleder (5.–10. klasse):
                  <br></br>
                  477 16 980, philip1014@outlook.com
                  <a href="mailto:philip1014@outlook.com">
                    philip1014@outlook.com
                  </a>
                </ListItem>
                <ListItem sx={{ display: "list-item", pl: 0 }}>
                Kristian Sveen-Østensen, flokkleder (3.–4. klasse):<br></br>
                416 43 901,<a href="mailto:yngve.hagvar@gmail.com<">yngve.hagvar@gmail.com</a>
                </ListItem>
              </List>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h3">Sosiale medier</Typography>
              <List>
                <ListItem>Instagram: @nadderudspeidergruppe</ListItem>
                <ListItem>Facebook: Nadderud speidergruppe</ListItem>
              </List>
            </Paper>
          </Stack>
        </Container>
      </Paper>
    </Layout>
  );
}
