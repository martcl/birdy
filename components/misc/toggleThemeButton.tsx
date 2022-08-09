import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../layout/toggleColorModeProvider";
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

export default function ToggleThemeButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />}
      </IconButton>
    </Box>
  )
}
