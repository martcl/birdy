import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  src: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export default function ImageCard({ src, reverse, children }: Props) {
  return (
    <Grid
      container
      direction={reverse ? "row-reverse" : "row"}
      maxWidth={1400}
      sx={{
        mx: "auto",
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Grid item xs={12} md={6} p={4}>
        <Box height="300px" width="100%" position="relative">
          <Image layout="fill" objectFit="cover" src={src}></Image>
        </Box>
      </Grid>
      <Grid
        item
        xs
        p={4}
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
