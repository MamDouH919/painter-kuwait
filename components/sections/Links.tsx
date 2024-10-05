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
    {
        id: 14,
        title: "صباغ بيوت اطفال",
        href: "/sabaagh_buyut_aitfal",
    },
    {
        id: 15,
        title: "صباغ رسومات اطفال",
        href: "sabaagh_rusumat_aitfal",
    },
    {
        id: 16,
        title: "صباغ رخيص بالكويت",
        href: "sabaagh_rakhisat_bi_alkuayt",
    },
    {
        id: 17,
        title: "دهانات الكويت",
        href: "dihanat_alkuayt",
    },
    {
        id: 18,
        title: "تركيب ورق جدران",
        href: "tarkib_waraq_judran",
    },
    {
        id: 19,
        title: "اصباغ ابواب خشب",
        href: "asbagh_abwab_khashabia",
    },
    {
        id: 20,
        title: "معلم جبس بورد",
        href: "muealim_jabs_burd",
    },

]

export const zones = [
    { id: 21, title: "صباغ السالمية", href: "sabaagh_alsaalimia" },
    { id: 22, title: "صباغ صباح السالم", href: "sabaagh_sabah_alsaalim" },
    { id: 23, title: "صباغ حولي", href: "sabaagh_hawalli" },
    { id: 24, title: "صباغ جابر الاحمد", href: "sabaagh_jaber_alahmad" },
    { id: 25, title: "صباغ خيطان", href: "sabaagh_khaitan" },
    { id: 26, title: "صباغ الفروانية", href: "sabaagh_alfarwaniyah" },
    { id: 27, title: "صباغ الجابرية", href: "sabaagh_aljabriya" },
    { id: 28, title: "صباغ الشعب", href: "sabaagh_alshaab" },
    { id: 29, title: "صباغ بيان", href: "sabaagh_bayan" },
    { id: 30, title: "صباغ جنوب السرة", href: "sabaagh_janoub_alsura" },
    { id: 31, title: "صباغ مبارك", href: "sabaagh_mubarak" },
    { id: 32, title: "صباغ مشرف", href: "sabaagh_mishref" },
    { id: 33, title: "صباغ الزهراء", href: "sabaagh_alzahraa" },
    { id: 34, title: "صباغ الصديق", href: "sabaagh_alsiddiq" },
    { id: 35, title: "صباغ حطين", href: "sabaagh_hateen" },
    { id: 36, title: "صباغ سلوي", href: "sabaagh_salwa" },
    { id: 37, title: "صباغ الشهداء", href: "sabaagh_alshuhadaa" },
    { id: 38, title: "صباغ السلام", href: "sabaagh_al_salam" },
    { id: 39, title: "صباغ المسلية", href: "sabaagh_al_masila" },
    { id: 40, title: "صباغ المسايل", href: "sabaagh_almasayel" },
    { id: 41, title: "صباغ ابو الحصاني", href: "sabaagh_abu_alhasania" },
    { id: 42, title: "صباغ صبحان", href: "sabaagh_subhan" },
    { id: 43, title: "صباغ ابو فطيرة", href: "sabaagh_abu_ftaira" },
    { id: 44, title: "صباغ الفينطيس", href: "sabaagh_al_fintas" },
    { id: 45, title: "صباغ مبارك الكبير", href: "sabaagh_mubarak_al_kabeer" },
    { id: 46, title: "صباغ العقيلة", href: "sabaagh_alaqeela" },
    { id: 47, title: "صباغ الفنطاس", href: "sabaagh_alfntas" },
    { id: 48, title: "صباغ الرقة", href: "sabaagh_alraqa" },
    { id: 49, title: "صباغ ابو حليفة", href: "sabaagh_abu_halifa" },
    { id: 50, title: "صباغ الصباحية", href: "sabaagh_alsabahiya" },
    { id: 51, title: "صباغ المنقف", href: "sabaagh_almanqaf" },
    { id: 52, title: "صباغ المهبولة", href: "sabaagh_almahboula" },
    { id: 53, title: "صباغ الاحمدي", href: "sabaagh_al_ahmadi" },
    { id: 54, title: "صباغ الخيران", href: "sabaagh_al_khiran" },
    { id: 55, title: "صباغ الفحيحيل", href: "sabaagh_alfhahil" },
    { id: 56, title: "صباغ الوفرة", href: "sabaagh_alwafra" },
    { id: 57, title: "صباغ جابر العلي", href: "sabaagh_jaber_alali" },
    { id: 58, title: "صباغ فهد الاحمد", href: "sabaagh_fahad_alahmad" },
    { id: 59, title: "صباغ الدعية", href: "sabaagh_aldaiya" },
    { id: 60, title: "صباغ الدسمة", href: "sabaagh_aldasma" },
    { id: 61, title: "صباغ الدوحة", href: "sabaagh_aldohah" },
    { id: 62, title: "صباغ الخالدية", href: "sabaagh_alkhaldiya" },
    { id: 63, title: "صباغ الروضة", href: "sabaagh_alrawdah" },
    { id: 64, title: "صباغ الري", href: "sabaagh_alrai" },
    { id: 65, title: "صباغ الشويخ", href: "sabaagh_alshuwaykh" },
    { id: 66, title: "صباغ الشرق", href: "sabaagh_asharq" },
    { id: 67, title: "صباغ الشامية", href: "sabaagh_alshamiya" },
    { id: 68, title: "صباغ السرة", href: "sabaagh_alsurra" },
    { id: 69, title: "صباغ القادسية", href: "sabaagh_alqadesiya" },
    { id: 70, title: "صباغ القروان", href: "sabaagh_alqurawan" },
    { id: 71, title: "صباغ الفيحاء", href: "sabaagh_alfaihaa" },
    { id: 72, title: "صباغ العديلية", href: "sabaagh_aladiliya" },
    { id: 73, title: "صباغ الصليبخات", href: "sabaagh_alsulaybikhat" },
    { id: 74, title: "صباغ كيفان", href: "sabaagh_kaifan" },
    { id: 75, title: "صباغ قرطبة", href: "sabaagh_qurtoba" },
    { id: 76, title: "صباغ غرناطة", href: "sabaagh_ghranata" },
    { id: 77, title: "صباغ ضاحية عبدالله السالم", href: "sabaagh_abdullah_al_salim" },
    { id: 78, title: "صباغ دسمان", href: "sabaagh_dasman" },
    { id: 79, title: "صباغ بنيد القار", href: "sabaagh_bneid_alqar" },
    { id: 80, title: "صباغ النهضة", href: "sabaagh_alnahda" },
    { id: 81, title: "صباغ النزهة", href: "sabaagh_alnuzha" },
    { id: 82, title: "صباغ المنصورية", href: "sabaagh_almansouriya" },
    { id: 83, title: "صباغ المنطقة العاشرة", href: "sabaagh_mantiqa_al_ashira" },
    { id: 84, title: "صباغ الاندلس", href: "sabaagh_alandalus" },
    { id: 85, title: "صباغ القرين", href: "sabaagh_alqrean" },
    { id: 86, title: "صباغ القصور", href: "sabaagh_alkswor" },
    { id: 87, title: "صباغ العدان", href: "sabaagh_aladaan" }
];

const allLinks = links.concat(zones)

const Links = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 5 }} id="articles">
            <SectionTitle sectionTitle={"صباغ الكويت"} />
            <Stack mt={4} direction={"row"} alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"} useFlexGap={true} spacing={2}>
                {allLinks.map(element => (
                    <CustomLink title={element.title} href={element.href} key={element.id}>
                        {element.title}
                    </CustomLink>
                ))}
            </Stack>
        </Container>
    )
}

export default Links
