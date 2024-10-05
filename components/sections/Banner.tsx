"use client";
import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";
import { motion } from 'framer-motion';
import React from 'react';
import PhoneStyle from '../layouts/PhoneStyle';

const PREFIX = "Banner";
const classes = {
    text: `${PREFIX}-text`,
    title: `${PREFIX}-title`,
    messengerIcon: `${PREFIX}-messengerIcon`
};

const Root = styled(Box)(({ theme }) => ({
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main)
    },
    [`& .${classes.title}`]: {
        color: theme.palette.primary.main,
        fontSize: theme.spacing(3.5),
        fontWeight: "bold"
    },
    [`& .${classes.messengerIcon}`]: {
        backgroundColor: "#2196f3",
        color: "#FFF",
        fontSize: "20px",
        cursor: "pointer",
        [`&:hover`]: {
            backgroundColor: "#0b7acc",
        },
    },
}));

const Banner = () => {
    return (
        <Root mt={8} py={10} sx={{ backgroundColor: (theme) => theme.palette.secondary.main }} id="home">
            <Container maxWidth="md" >
                <motion.div
                    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                    initial={{ opacity: 0, y: 100 }}  // Starting state
                    animate={{ opacity: 1, y: 0 }}   // Ending state
                    transition={{ duration: 0.1 }}     // Transition duration
                >

                    <Stack spacing={2} border={1} borderColor={"primary.main"} borderRadius={10} p={5} textAlign={"center"}>
                        <Typography variant='h1' className={classes.title}>
                            صباغ الكويت
                        </Typography>
                        <Typography className={classes.text}>
                            مرحبًا بكم في خدمات صباغ الكويت، حيث نقدم خدمات صباغة متكاملة تتميز بالجودة والاحترافية. نحن متخصصون في تحويل المساحات إلى أعمال فنية بألوان نابضة بالحياة، مع التركيز على التفاصيل والجودة.
                        </Typography>
                        <Typography className={classes.text}>
                            مع فريق من الخبراء ذوي الخبرة العالية واستخدام أحدث التقنيات، نحن هنا لتحقيق رؤيتكم وتلبية احتياجاتكم بأعلى مستوى من الرضا.
                        </Typography>

                    </Stack>
                    <PhoneStyle />
                </motion.div>
            </Container>
        </Root>
    )
}

export default Banner
