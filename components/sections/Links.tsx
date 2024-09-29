"use client"
import React from 'react'
import { CustomLink } from '../layouts/CustomLink'
import { Container, Stack } from '@mui/material'
import SectionTitle from '../layouts/SectionTitle'

const links = [
    {
        id: 1,
        title: "أصباغ",
        href: "/aspagh",
    },
    {
        id: 2,
        title: "صباغ رخيص",
        href: "/sabaagh_rakhis",
    },
    {
        id: 3,
        title: "صباغ شاطر",
        href: "/sabaagh_shatir",
    },
    {
        id: 4,
        title: "معلم صباغ",
        href: "/muealim_sabagh",
    },
    {
        id: 5,
        title: "صباغ الكويت",
        href: "/sabaagh_alkuayt",
    },
    {
        id: 6,
        title: "أصباغ الكويت",
        href: "/aisbgh_alkuayt",
    },
    {
        id: 7,
        title: "صباغ شاطر بالكويت",
        href: "/sabaagh_shatir_bi_alkuayt",
    },
    {
        id: 8,
        title: "معلم صباغ في الكويت",
        href: "/muealim_sabaagh_bi_alkuayt",
    },
    {
        id: 9,
        title: "فني صباغ الكويت",
        href: "/faniy_sabagh",
    },
    {
        id: 10,
        title: "صباغ ممتاز بالكويت",
        href: "/sabaagh_mumtaz_bi_alkuayt",
    },
    {
        id: 11,
        title: "صباغ ديكورات بالكويت",
        href: "/dikurat_sabagh_lilkuayt",
    },
    {
        id: 12,
        title: "صباغ منازل بالكويت",
        href: "/manazil_sabaagh_bi_alkuayt",
    },
    {
        id: 13,
        title: "صباغ شقق بالكويت",
        href: "/shaqaq_sabaagh_bi_alkuayt",
    },
]

const Links = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 5 }} id="articles">
            <SectionTitle sectionTitle={"صباغ الكويت"} />
            <Stack mt={4} direction={"row"} alignItems={"center"} flexWrap={"wrap"} useFlexGap={true} spacing={2}>
                {links.map(element => (
                    <CustomLink title={element.title} href={element.href} key={element.id}>
                        {element.title}
                    </CustomLink>
                ))}
            </Stack>
        </Container>
    )
}

export default Links
