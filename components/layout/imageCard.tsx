import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
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
      
      maxWidth={1300}
      sx={{
        mx: "auto",
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        p: 4,
      }}
      gap={2}
    >
      <Grid item xs={12} md={6}>
        <Box height="100%" minHeight={250} width="100%" position="relative">
          <Image layout="fill" objectFit="cover" src={src}></Image>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
      >
        <Paper 
          sx={{
            px: 3,
            py:4
          }}
        >
        {children}
        </Paper>

      </Grid>
    </Grid>
  );
}
