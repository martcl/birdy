import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  src?: string;
  height?: number | string;
  description?: string;
  explanation?: string;
  children?: React.ReactNode;
  title: string;
  alt?: string;
}

export default function Hero({
  src,
  height,
  description,
  explanation,
  alt,
  title,
  children,
}: Props) {
  return (
    <Paper>
      <Box
        height={height || 350}
        sx={{ backgroundColor: "background.default", position: "relative" }}
      >
        {src && (
          <Image
            alt={alt || ""}
            priority
            layout="fill"
            src={src}
            objectFit="cover"
          />
        )}
        <Stack
          sx={{
            position: "relative",
            gap: 1,
            p: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Paper sx={{ p: 2 }} square>
            <Typography fontWeight={600} variant="h2">
              {title}
            </Typography>
          </Paper>
          {description && (
            <Paper sx={{ p: 2, maxWidth: 600 }} square>
              <Typography>{description}</Typography>
            </Paper>
          )}
        </Stack>
      </Box>
        <Box sx={{ p: 2 }}>
          {explanation && 
            <Typography textAlign="center" maxWidth={800}>
              {explanation}
            </Typography>
          }
          {children}
        </Box>
    </Paper>
  );
}
