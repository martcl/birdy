import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Hero from "../../components/layout/hero";
import ImageCard from "../../components/layout/imageCard";
import Layout from "../../components/layout/layout";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import UsefulLinks from "../../components/navigation/usefulLinks";

export default function ClientPage() {
  const questionsAndAnswers = [
    {
      question: "Hva er speiding?",
      answer:
        "Speiding er aktivt friluftsliv. Det er en stor å viktig del av speiderarbeidet å være ute i naturen. Bli kjent med naturen og klare seg uansett forhold. Speiding er vennskap og opplevelser for livet. Gjennom felles eventyr og opplevelser, utvikler man et spesielt forhold til menneskene rundt seg, som kan vare livet ut. 28 millioner speidere på verdensbasis kan ikke ta feil. Hva venter du på? Eventyrene er der ute!",
    },
    {
      question: "Hvem kan bli speider?",
      answer:
        "Alle barn og ungdom fra 3. klasse til 25 år kan bli speidere. Du trenger ingen forkunnskaper - og du kan begynne når du vil. Noen begynner med en gang de er gamle nok, andre litt senere.",
    },
    {
      question: "Når kan jeg begynne i speideren?",
      answer:
        "De fleste vil begynne på høsten, ved skolestart. Men så lenge det er plass tar vi inn nye speidere gjennom hele året.",
    },
    {
      question: "Hvor mye tid tar speideren?",
      answer:
        "Vi har møter én gang i uka. Møtene tar vanligvis en time. I tillegg er det noen overnattingsturer. Jo eldre du er, jo flere turer har vi. Se program for en oversikt over turer og møter.",
    },
    {
      question: "Er det dyrt å være speider?",
      answer:
        "Nei. Vi har en medlemskontingent på litt over 1 200 kr i året, som dekker de aller fleste arrangementer et helt år. (Speidere som begynner på høsten betaler halv kontingent for høsten.) Noen større arrangementer (f.eks. sommerleir) har egen deltakeravgift. Ellers trenger du litt turutstyr og mat og drikke til turene.",
    },
    {
      question:
        "Kreves det mye foreldreinnsats i speideren (til dugnader o.l.)?",
      answer:
        "Nei, slett ikke. Vi er riktignok en frivillig organisasjon, som er avhengig av at noen gjør en frivillig innsats for å holde hjulene i gang, men det stilles ingen krav om engasjement fra foreldrene. I løpet av et år vil foreldre vanligvis bli bedt om å stille på én vedlikeholdsdugnad (en lørdag eller søndag formiddag) på speiderhytta vår og 1-2 inntektsgivende dugnader (et par timer en kveld).",
    },
    {
      question: "Kan jeg begynne i speideren selv om jeg er over 25 år?",
      answer:
        "Ja! Vi trenger ledere. Alle friluftsinteresserte ungdom og voksne som har lyst til å være med å drive speidergruppa er velkomne. Du trenger ikke ha noen tidligere erfaring med speiding eller friluftsliv - det holder at du har lyst til å lære. Ledertrening i speideren er dessuten en god erfaring å ha med seg videre i livet. Ta kontakt for en uforpliktende prat!",
    },
  ];
  return (
    <Layout>
      <Hero height={350} src="/leirbaal.jpeg" />

      <ImageCard src="/leirbaal.jpeg">
        <Typography variant="h2">Eventyrene er der ute!</Typography>
        <Typography maxWidth={500}>
          Å være speider er gøy! Vi opplever masse forskjellig – alt fra
          teltturer til å lage teater, fra pizza på bål til å gjøre en innsats
          for andre. Vi er mye ute i skogen, på sjøen og på fjellet og har det
          fint sammen med gode venner. Du lærer deg mye praktisk og morsomt som
          er smart å kunne, og på leir blir du kjent med speidere fra andre
          steder og andre land. Bli med og prøv noe nytt sammen med oss!
        </Typography>
        <br></br>
        <Button endIcon={<OpenInNewRoundedIcon />} variant="contained">
          Gå til innmeldingskjema
        </Button>
      </ImageCard>
      <Container sx={{ py: 4, px: 2, maxWidth: 500}}>
        <Typography variant="h2">Spørsmål om speiding</Typography>
        <br></br>
        {questionsAndAnswers.map((QandA, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreRoundedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
                {QandA.question}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{QandA.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <UsefulLinks />
    </Layout>
  );
}
