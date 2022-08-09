import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Box, Button, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ToggleThemeButton from "../misc/toggleThemeButton";
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(false);

  return (
    <header>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          py: 2,
          px: 1,
        }}
      >
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <Box
          sx={{
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "row",
            mx: "auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Typography py={0} variant="h2" sx={{color: "text.primary", fontWeight: 700}}>
              Nadderud
            </Typography>
          </Link>
          {matches ? (
            <Stack direction="row" gap={1}>
              <Link href="/terminliste">
                <Button>Program</Button>
              </Link>
              <Link href="/kontakt">
                <Button>Kontakt oss</Button>
              </Link>
              <Link href="/bli-speider">
                <Button variant="contained">Prøv speiding</Button>
              </Link>
              <ToggleThemeButton />
            </Stack>
          ) : (
            <Box sx={{ gap: 2, display: "flex" }}>
              <Link href="/">
                <Button variant="contained">Prøv speiding</Button>
              </Link>
              <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ height: "100vh", p: 2, px: 4 }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      onClick={() => setOpen(false)}
                      variant="outlined"
                      endIcon={<CloseRoundedIcon />}
                    >
                      Tilbake
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    gap={2}
                    py={3}
                  >
                    <Typography variant="h5" textAlign="center">
                      Nadderud Speidergeuppe
                    </Typography>
                    <Link href="/terminliste">
                      <Button>Program</Button>
                    </Link>
                    <Link href="/kontakt">
                      <Button>Kontakt oss</Button>
                    </Link>
                    <Link href="/">
                      <Button variant="contained">Prøv speiding</Button>
                    </Link>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          )}
        </Box>
      </Box>
    </header>
  );
}
