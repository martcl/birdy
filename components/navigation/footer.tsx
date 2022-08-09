import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <hr></hr>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Typography>THis is a footer</Typography>
      </Box>
    </footer>
  );
}
