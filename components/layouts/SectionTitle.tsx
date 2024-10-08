import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
// import { styled } from "@mui/material/styles";

const PREFIX = "SectionTitle";

const classes = {
    titleDivider: `${PREFIX}-titleDivider`,
};

// const Root = styled("div")(({ theme }) => ({
//     [`& .${classes.titleDivider}`]: {
//         borderRadius: "20px",
//         direction: "rtl",
//         width: "100px",
//         margin: "auto",
//         height: 4,
//         background: `linear-gradient(90deg,${theme.palette.secondary.main} 52%, ${theme.palette.primary.main} 52%)`,
//         marginTop: theme.spacing(2),
//     }
// }));

interface inputProps {
    sectionTitle: string
    subSectionTitle?: string
    variant?: Variant
}

type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';

const SectionTitle = (props: inputProps) => {
    const { sectionTitle, subSectionTitle, variant } = props
    return (
        <Box style={{ margin: "5px 0" }}>
            <Typography variant={variant ?? 'h2'} fontSize={30} textAlign={"center"} textTransform={"capitalize"} color={"primary.main"}>
                {sectionTitle}
            </Typography>
            <Typography variant='body2' fontSize={14} textAlign={"center"} color={"text.secondary"} mt={1} width={"80%"} mx={"auto"}>
                {subSectionTitle}
            </Typography>
            <Stack className={classes.titleDivider}>
            </Stack>
        </Box>
    )
}

export default SectionTitle