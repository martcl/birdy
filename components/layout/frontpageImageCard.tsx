import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  children: React.ReactNode;
}

export default function FrontpageImageCard() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Box height="80vh" width="100%" position="relative">
          <Image
            priority
            src="/bilder/leirbaal.jpg"
            layout="fill"
            objectFit="cover"
          />
          <Box position="absolute" sx={{ bottom: 40, p: 2 }}>
            {!matches && (
              <Typography
                textAlign="center"
                color="white"
                fontFamily="Georgia,Times,Times New Roman,serif"
                fontWeight={100}
                variant="h1"
                component="h2"
              >
                Eventyrene er der ute!
              </Typography>
            )}
          </Box>
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
        <Stack
          sx={{
            px: 4,
            py: 6,
            pb: 7,
            alignItems: "center",
            gap: 2,
          }}
        >
          <Image src="/nsf.png" height={80} width={80}></Image>
          <Typography
            variant="h1"
            fontSize={(matches && 40) || 35}
            textAlign="center"
          >
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
        </Stack>
      </Grid>
    </Grid>
  );
}
