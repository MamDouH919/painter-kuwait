import dynamic from 'next/dynamic';
import { Box, Container, Stack, Typography } from "@mui/material";

// Dynamically import the components
const Navbar = dynamic(() => import("@/components/layouts/Navbar"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));
const PhoneStyle = dynamic(() => import("@/components/layouts/PhoneStyle"));
const About = dynamic(() => import("@/components/sections/About"));
const App = dynamic(() => import("@/components/sections/Gallary"));
const Links = dynamic(() => import("@/components/sections/Links"));
const Services = dynamic(() => import("@/components/sections/Services"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Box bgcolor={"secondary.main"} mt={8} py={10} id="home">
        <Container maxWidth="md">
          <Stack spacing={2} border={1} borderColor={"primary.main"} borderRadius={10} p={5} textAlign={"center"}>
            <Typography variant="h1" color="primary.main" fontSize={40}>
              <b>صباغ الكويت</b>
            </Typography>
            <Typography color="#000">
              مرحبًا بكم في خدمات <b>صباغ الكويت</b>، حيث نقدم خدمات صباغة متكاملة تتميز بالجودة والاحترافية. نحن متخصصون في تحويل المساحات إلى أعمال فنية بألوان نابضة بالحياة، مع التركيز على التفاصيل والجودة.
            </Typography>
            <Typography color="#000">
              مع فريق من الخبراء ذوي الخبرة العالية واستخدام أحدث التقنيات، نحن هنا لتحقيق رؤيتكم وتلبية احتياجاتكم بأعلى مستوى من الرضا.
            </Typography>
          </Stack>
          <PhoneStyle />
        </Container>
      </Box>
      <About />
      <App />
      <Links />
      <Services />
      <Footer />
    </>
  );
}
