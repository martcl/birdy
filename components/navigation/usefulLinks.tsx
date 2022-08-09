import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
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
      herf: "/speidersport.webp",
      title: "Speidersport",
    },
    {
      description:
        "Her finner man alt informasjon om speidernorge. og alt annet duterbger å vite om",
      herf: "/nsf.png",
      title: "Norges speiderforbund",
    },
    {
      description:
        "Her finner man alt informasjon om speidernorge. og alt annet duterbger å vite om",
      herf: "/nsf.png",
      title: "Vestmarka Speiderkrets",
    },
  ];

  return (
    <Box sx={{ py: 4, px: 1}}>
      <Stack
        gap={2}
        maxWidth={1000}
        sx={{ mx: "auto" }}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Typography variant="h2" textAlign="center">
          Nyttige lenker
        </Typography>
        <Grid container>
          {links.map((link) => (
            <Grid
            key={link.title}
              gap={2}
              item
              xs={12}
              sm={6}
              md={4}
              alignItems="center"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                height={100}
                width={100}
                sx={{ backgroundColor: "rgb(73, 125, 150)", borderRadius: 25, position: "relative", overflow: 'hidden' }}
              >
                <Image src={link.herf} layout="fill" objectFit="cover" />
              </Box>
              <Button endIcon={<OpenInNewRoundedIcon />}>{link.title}</Button>
              <Typography maxWidth={300}>
                {link.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Stack>
    
    </Box>
  );
}
