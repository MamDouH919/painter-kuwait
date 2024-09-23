"use client";
import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";
import { motion } from 'framer-motion';
import React from 'react';

const PREFIX = "Banner";
const classes = {
    text: `${PREFIX}-text`
};

const Root = styled(Box)(({ theme }) => ({
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main)
    },
}));

const Banner = () => {
    return (
        <Root mt={8} py={10} sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}>
            <Container maxWidth="md" >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}  // Starting state
                    animate={{ opacity: 1, y: 0 }}   // Ending state
                    transition={{ duration: 1 }}     // Transition duration
                >

                    <Stack spacing={2} border={1} borderColor={"primary.main"} borderRadius={10} p={5} textAlign={"center"}>
                        <Typography color='primary.main' variant="h1" fontSize={30} component="h1" fontWeight={"bold"}>
                            صباغ الكويت
                        </Typography>
                        <Typography className={classes.text}>
                            مرحبًا بكم في خدمات صباغ الكويت، حيث نقدم خدمات صباغة متكاملة تتميز بالجودة والاحترافية. نحن متخصصون في تحويل المساحات إلى أعمال فنية بألوان نابضة بالحياة، مع التركيز على التفاصيل والجودة.
                        </Typography>
                        <Typography className={classes.text}>
                            مع فريق من الخبراء ذوي الخبرة العالية واستخدام أحدث التقنيات، نحن هنا لتحقيق رؤيتكم وتلبية احتياجاتكم بأعلى مستوى من الرضا.
                        </Typography>
                    </Stack>
                </motion.div>
            </Container>
        </Root>
    )
}

export default Banner
