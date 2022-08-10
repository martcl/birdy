import {
  Box,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Paper
        sx={{
          py: 3,
          px: 2
        }}
      >
        <Stack mx="auto" justifyContent="center" direction="row" gap={2} flexWrap="wrap">
          <MuiLink href="/kontakt" component={Link}>
            Om gruppen
          </MuiLink>

          <MuiLink href="/personvern" component={Link}>
            Personvern (cookies)
          </MuiLink>
          <Typography>
            © {new Date().getFullYear()} Nadderud speidergruppe
          </Typography>
        </Stack>
      </Paper>
    </footer>
  );
}
