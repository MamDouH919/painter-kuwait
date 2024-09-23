"use client";
import React, { useRef } from 'react';
import { styled } from "@mui/material/styles";
import { motion, useInView } from 'framer-motion';
import { Box, Container, Grid2 as Grid, Stack, Typography } from '@mui/material';
import image1 from '@/app/Images/image1.webp';
import image2 from '@/app/Images/image2.webp';
import image3 from '@/app/Images/image3.webp';
import Image from 'next/image';
import SectionTitle from '../layouts/SectionTitle';

const PREFIX = "Banner";
const classes = {
    text: `${PREFIX}-text`
};


const data = [
    {
        "id": 1,
        "title": "معلم صباغ بالكويت",
        "description": "ما هي خدمات الدهان والصباغة المتميزة؟ خدمات الدهان والصباغة المتميزة تتطلب مهارة وخبرة. تبدأ العملية بالتنظيف الدقيق للسطح. ثم تطبيق طبقات الدهان بمهارة عالية.صباغ متميز في الكويت لديهم خبرة كبيرة في الدهان والصباغة. هذا يضمن جودة عالية للنتائج. فريقهم لديهم مهارات لتنفيذ الصباغة بكفاءة وإتقان، مع الالتزام بالسلامة والنظافة. عند البحث عن خدمات الدهان والصباغة في الكويت، من المهم الاختيار الحكيم لصباغ متميز. هذه الشركات تقدم مزايا فريدة تجعلها خيارًا مثاليًا لأي مشروع.",
        "image": image1
    },
    {
        "id": 2,
        "title": "معلم صباغ بالكويت",
        "description": "معلم صباغ الكويت: الإتقان في كل لون في عالم تصميم وتجديد المساحات، يلعب الصباغون دورًا حيويًا في تحويل الرؤى والأفكار إلى واقع ملموس. بين هؤلاء المحترفين، يبرز معلم صباغ الكويت كرمز للجودة والإبداع في مجال الصباغة. بفضل سنوات من الخبرة والتفاني، يقدم معلم صباغ الكويت خدمات صباغة استثنائية تضيف لمسة من التميز إلى كل مشروع.",
        "image": image3
    },
    {
        "id": 3,
        "title": "المساحات المتكاملة للمساحات المتكاملة",
        "description": "تتميز بالجودة والاحترافية. نحن متخصصون في تحويل المساحات إلى أعمال فنية بألوان نابضة بالحياة، مع التركيز على التفاصيل والجودة.",
        "image": image2
    },
]

const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main)
    },
}));

const About = () => {
    return (
        <Root maxWidth="lg" sx={{ my: 5 }}>
            <SectionTitle
                sectionTitle={"صباغ الكويت هو صباغ شاطر ورخيص في جميع اماكن الكويت"}
            />
            <Stack spacing={2} mt={5}>
                {data.map((element, index) => (
                    <AnimatedDiv key={element.id}  >
                        <Grid
                            container
                            spacing={2}
                            alignItems={"center"}
                            flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                            m={0}
                            border={1}
                            borderColor={"primary.main"} borderRadius={10} p={5} textAlign={"center"}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedImage position={index % 2 === 0 ? 100 : -100}>
                                    <Image
                                        src={element.image}
                                        alt="image"
                                        width={1200}
                                        height={400}
                                        style={{
                                            width: "100%",
                                        }}
                                        objectFit='contain'
                                    />
                                </AnimatedImage>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} container justifyContent={"center"} alignItems={"center"}>
                                <Typography color='primary.main' mb={2} fontSize={30} fontWeight={500}>
                                    {element.title}
                                </Typography>
                                <Typography>
                                    {element.description}
                                </Typography>
                                <Box bgcolor={"secondary.dark"} style={{ height: 2, width: 80, }}></Box>
                            </Grid>
                        </Grid>
                    </AnimatedDiv>
                ))}
            </Stack>
        </Root>
    )
}

export default About

const AnimatedDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef(null); // Create a reference for each div
    const isInView = useInView(ref, { once: true }); // Detect if the div is in view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate if in view
            transition={{ duration: 0.5 }} // Transition duration
        >
            {children}
        </motion.div>
    );
};
const AnimatedImage: React.FC<{ children: React.ReactNode, position: number }> = ({ children, position }) => {
    const ref = useRef(null); // Create a reference for each div
    const isInView = useInView(ref, { once: true }); // Detect if the div is in view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: position }} // Initial state
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate if in view
            transition={{ duration: 1 }} // Transition duration
        >
            {children}
        </motion.div>
    );
};

