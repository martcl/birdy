import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Image from "next/image";

export default function UsefulLinks() {
  const links = [
    {
      description:
        "Her finner man alt informasjon om speidernorge. og alt annet duterbger å vite om",
      image: "/speidersport.webp",
      title: "Speidersport",
      herf: "https://www.speidersport.no/",
    },
    {
      description:
        "Her finner man alt informasjon om speidernorge. og alt annet duterbger å vite om",
      image: "/nsf.png",
      title: "Norges speiderforbund",
      herf: "https://speiding.no/",
    },
    {
      description:
        "Her finner man alt informasjon om speidernorge. og alt annet duterbger å vite om",
      image: "/nsf.png",
      title: "Vestmarka Speiderkrets",
      herf: "https://vestmarka.speiding.no/",
    },
  ];

  return (
    <Stack
      gap={2}
      maxWidth={1000}
      sx={{ mx: "auto", p: 2 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography variant="h2" textAlign="center">
        Nyttige lenker
      </Typography>
      <Grid container spacing={2}>
        {links.map((link) => (
          <Grid
            key={link.title}
            xs={12}
            sm={6}
            md={4}
            item
          >
            <Stack component={Paper} p={3} gap={1} alignItems="center">
              <Box
                height={75}
                width={75}
                sx={{
                  backgroundColor: "rgb(73, 125, 150)",
                  borderRadius: 25,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image src={link.image} layout="fill" objectFit="cover" />
              </Box>
              <Link href={link.herf}>
                <Button endIcon={<OpenInNewRoundedIcon />}>{link.title}</Button>
              </Link>
              <Typography maxWidth={400}>{link.description}</Typography>
              </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
