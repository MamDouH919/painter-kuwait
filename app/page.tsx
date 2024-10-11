import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import PhoneStyle from "@/components/layouts/PhoneStyle";
import About from "@/components/sections/About";
import App from "@/components/sections/Gallary";
import Links from "@/components/sections/Links";
import Services from "@/components/sections/Services";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box bgcolor={"secondary.main"} mt={8} py={10} id="home">
        <Container maxWidth="md" >
          <Stack spacing={2} border={1} borderColor={"primary.main"} borderRadius={10} p={5} textAlign={"center"}>
            <Typography variant='h1' color='primary.main' fontSize={40}>
              <b>صباغ الكويت</b>
            </Typography>
            <Typography color='#000'>
              مرحبًا بكم في خدمات <b>صباغ الكويت</b>، حيث نقدم خدمات صباغة متكاملة تتميز بالجودة والاحترافية. نحن متخصصون في تحويل المساحات إلى أعمال فنية بألوان نابضة بالحياة، مع التركيز على التفاصيل والجودة.
            </Typography>
            <Typography color='#000'>
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
