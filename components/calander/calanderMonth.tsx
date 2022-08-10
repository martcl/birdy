import { Box, Paper, Typography } from "@mui/material";

export const CalanderMonth = ({ month }: { month: string }) => (
  <Box sx={{p: 2, my: 1}}><Typography variant="h3" fontWeight={600}>{month}</Typography></Box>
);
