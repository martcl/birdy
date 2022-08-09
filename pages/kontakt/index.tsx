import { Container, Typography } from "@mui/material"
import Hero from "../../components/layout/hero"
import Layout from "../../components/layout/layout"

export default function ClientPage() {
  return (
    <Layout>
        <Hero src="/leirbaal.jpeg" description="Kontakt oss hvis du lurer på noe!"></Hero>

        <Container sx={{py: 4}}>
            <Typography variant="h4">Nyttig info</Typography>
            <Typography>Her er nyttig informasjon</Typography>
        </Container>
    </Layout>
  )
}
