import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FrontpageImageCard from "../components/layout/frontpageImageCard";
import ImageCard from "../components/layout/imageCard";
import { Imageroll } from "../components/layout/imageroll";
import Layout from "../components/layout/layout";
import UsefulLinks from "../components/navigation/usefulLinks";

export default function IndexPage() {
  return (
    <Layout>
      <FrontpageImageCard />
      <Paper sx={{ py: 3, position: "relative", background: "linear-gradient(#71bf8d, #35ca6b)" }}>
        <Box
          sx={{
            top: 0,
            position: "absolute",
            height: 75,
            transform: "translate(0, -70px)",
            width: "100%",
            backgroundImage: "url('/grass.svg')",
            backgroundRepeat: "repeat-x",
          }}
        ></Box>
        <Box
          sx={{
            maxWidth: 800,
            display: "block",
            mx: "auto",
            px: 2,
            pb: 5,
            pt: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{position: "relative", height: 200}}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/nadderud-merke.png"
                ></Image>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" fontWeight={100}>
                Overskrift overskrift
              </Typography>
              <Typography>
                Å være speider er gøy! Vi opplever masse forskjellig – alt fra
                teltturer til å lage teater, fra pizza på bål til å gjøre en
                innsats for andre. Vi er mye ute i skogen, på sjøen og på
                fjellet og har det fint sammen med gode venner. Du lærer deg mye
                praktisk og morsomt som er smart å kunne, og på leir blir du
                kjent med speidere fra andre steder
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <ImageCard src="/bilder/flaate.jpg" reverse>
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
          <Imageroll />
      <UsefulLinks />
    </Layout>
  );
}
