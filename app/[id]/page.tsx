import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import LinksContent from '@/components/sections/LinksContent'
import { Container, Stack } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

const titles = {
    "aspagh": "اصباغ",
    "sabaagh_rakhis": "صباغ رخيص",
    "sabaagh_shatir": "صباغ شاطر",
    "muealim_sabagh": "معلم صباغ",
    "sabaagh_alkuayt": "صباغ الكويت",
    "aisbgh_alkuayt": "اصباغ الكويت",
    "sabaagh_shatir_bi_alkuayt": "صباغ شاطر بالكويت",
    "muealim_sabaagh_bi_alkuayt": "معلم صباغ في الكويت",
    "faniy_sabagh": "فني صباغ الكويت",
    "sabaagh_mumtaz_bi_alkuayt": "صباغ ممتاز بالكويت",
    "dikurat_sabagh_lilkuayt": "صباغ ديكورات بالكويت",
    "manazil_sabaagh_bi_alkuayt": "صباغ منازل بالكويت",
    "shaqaq_sabaagh_bi_alkuayt": "صباغ شقق بالكويت",
    "sabaagh_buyut_aitfal": "صباغ بيوت اطفال",
    "sabaagh_rusumat_aitfal": "صباغ رسومات اطفال",
    "sabaagh_rakhisat_bi_alkuayt": "صباغ رخيص بالكويت",
    "dihanat_alkuayt": "دهانات الكويت",
    "tarkib_waraq_judran": "تركيب ورق جدران",
    "asbagh_abwab_khashabia": "اصباغ ابواب خشب",
    "muealim_jabs_burd": "معلم جبس بورد",
    "sabaagh-alsaalimia": "صباغ السالمية",
    "sabaagh-sabah-alsaalim": "صباغ صباح السالم",
    "sabaagh-hawalli": "صباغ حولي",
    "sabaagh-jaber-alahmad": "صباغ جابر الاحمد",
    "sabaagh-khaitan": "صباغ خيطان",
    "sabaagh-alfarwaniyah": "صباغ الفروانية",
    "sabaagh-aljabriya": "صباغ الجابرية",
    "sabaagh-alshaab": "صباغ الشعب",
    "sabaagh-bayan": "صباغ بيان",
    "sabaagh-janoub-alsura": "صباغ جنوب السرة",
    "sabaagh-mubarak": "صباغ مبارك",
    "sabaagh-mishref": "صباغ مشرف",
    "sabaagh-alzahraa": "صباغ الزهراء",
    "sabaagh-alsiddiq": "صباغ الصديق",
    "sabaagh-hateen": "صباغ حطين",
    "sabaagh-salwa": "صباغ سلوي",
    "sabaagh-alshuhadaa": "صباغ الشهداء",
    "sabaagh-al-salam": "صباغ السلام",
    "sabaagh-al-masila": "صباغ المسلية",
    "sabaagh-almasayel": "صباغ المسايل",
    "sabaagh-abu-alhasania": "صباغ ابو الحصاني",
    "sabaagh-subhan": "صباغ صبحان",
    "sabaagh-abu-ftaira": "صباغ ابو فطيرة",
    "sabaagh-al-fintas": "صباغ الفينطيس",
    "sabaagh-mubarak-al-kabeer": "صباغ مبارك الكبير",
    "sabaagh-alaqeela": "صباغ العقيلة",
    "sabaagh-alfntas": "صباغ الفنطاس",
    "sabaagh-alraqa": "صباغ الرقة",
    "sabaagh-abu-halifa": "صباغ ابو حليفة",
    "sabaagh-alsabahiya": "صباغ الصباحية",
    "sabaagh-almanqaf": "صباغ المنقف",
    "sabaagh-almahboula": "صباغ المهبولة",
    "sabaagh-al-ahmadi": "صباغ الاحمدي",
    "sabaagh-al-khiran": "صباغ الخيران",
    "sabaagh-alfhahil": "صباغ الفحيحيل",
    "sabaagh-alwafra": "صباغ الوفرة",
    "sabaagh-jaber-alali": "صباغ جابر العلي",
    "sabaagh-fahad-alahmad": "صباغ فهد الاحمد",
    "sabaagh-aldaiya": "صباغ الدعية",
    "sabaagh-aldasma": "صباغ الدسمة",
    "sabaagh-aldohah": "صباغ الدوحة",
    "sabaagh-alkhaldiya": "صباغ الخالدية",
    "sabaagh-alrawdah": "صباغ الروضة",
    "sabaagh-alrai": "صباغ الري",
    "sabaagh-alshuwaykh": "صباغ الشويخ",
    "sabaagh-asharq": "صباغ الشرق",
    "sabaagh-alshamiya": "صباغ الشامية",
    "sabaagh-alsurra": "صباغ السرة",
    "sabaagh-alqadesiya": "صباغ القادسية",
    "sabaagh-alqurawan": "صباغ القروان",
    "sabaagh-alfaihaa": "صباغ الفيحاء",
    "sabaagh-aladiliya": "صباغ العديلية",
    "sabaagh-alsulaybikhat": "صباغ الصليبخات",
    "sabaagh-kaifan": "صباغ كيفان",
    "sabaagh-qurtoba": "صباغ قرطبة",
    "sabaagh-ghranata": "صباغ غرناطة",
    "sabaagh-abdullah-al-salim": "صباغ ضاحية عبدالله السالم",
    "sabaagh-dasman": "صباغ دسمان",
    "sabaagh-bneid-alqar": "صباغ بنيد القار",
    "sabaagh-alnahda": "صباغ النهضة",
    "sabaagh-alnuzha": "صباغ النزهة",
    "sabaagh-almansouriya": "صباغ المنصورية",
    "sabaagh-mantiqa-al-ashira": "صباغ المنطقة العاشرة",
    "sabaagh-alandalus": "صباغ الاندلس",
    "sabaagh-alqrean": "صباغ القرين",
    "sabaagh-alkswor": "صباغ القصور",
    "sabaagh-aladaan": "صباغ العدان",
}

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const title = titles[params.id as keyof typeof titles];

    return {
        title: `صباغ الكويت 51108895 - صباغ شاطر ورخيص - ${title}`,
        keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    };
}

const Page = ({ params: { id } }: { params: { id: string } }) => {
    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <LinksContent id={id} />
            </Stack>
        </Container>
    )
}

export default Page
