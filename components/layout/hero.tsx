import { Box, Typography } from "@mui/material"
import Image from "next/image"

interface Props {
    src?: string
    height?: number | string
    description?: string
    children?: React.ReactNode
}

export default function Hero({ src, height, description, children }: Props) {
  return (
    <Box sx={{backgroundColor:"background.smoke"}}>
        <Box height={height || 200} sx={{backgroundColor: "background.default", position: "relative"}}>
            {src && <Image priority layout="fill" src={src} objectFit="cover" />}
        </Box>
        {description && (
        <Box sx={{maxWidth: 800, mx: "auto", display:"block", px: 2, py: 3}}>
            {<Typography>{description}</Typography>}
            {children}
        </Box>
        )}
 
    </Box>
  )
}
