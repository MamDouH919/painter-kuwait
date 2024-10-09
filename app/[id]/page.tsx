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
    "sabaagh_alsaalimia": "صباغ السالمية",
    "sabaagh_sabah_alsaalim": "صباغ صباح السالم",
    "sabaagh_hawalli": "صباغ حولي",
    "sabaagh_jaber_alahmad": "صباغ جابر الاحمد",
    "sabaagh_khaitan": "صباغ خيطان",
    "sabaagh_alfarwaniyah": "صباغ الفروانية",
    "sabaagh_aljabriya": "صباغ الجابرية",
    "sabaagh_alshaab": "صباغ الشعب",
    "sabaagh_bayan": "صباغ بيان",
    "sabaagh_janoub_alsura": "صباغ جنوب السرة",
    "sabaagh_mubarak": "صباغ مبارك",
    "sabaagh_mishref": "صباغ مشرف",
    "sabaagh_alzahraa": "صباغ الزهراء",
    "sabaagh_alsiddiq": "صباغ الصديق",
    "sabaagh_hateen": "صباغ حطين",
    "sabaagh_salwa": "صباغ سلوي",
    "sabaagh_alshuhadaa": "صباغ الشهداء",
    "sabaagh_al_salam": "صباغ السلام",
    "sabaagh_al_masila": "صباغ المسلية",
    "sabaagh_almasayel": "صباغ المسايل",
    "sabaagh_abu_alhasania": "صباغ ابو الحصاني",
    "sabaagh_subhan": "صباغ صبحان",
    "sabaagh_abu_ftaira": "صباغ ابو فطيرة",
    "sabaagh_al_fintas": "صباغ الفينطيس",
    "sabaagh_mubarak_al_kabeer": "صباغ مبارك الكبير",
    "sabaagh_alaqeela": "صباغ العقيلة",
    "sabaagh_alfntas": "صباغ الفنطاس",
    "sabaagh_alraqa": "صباغ الرقة",
    "sabaagh_abu_halifa": "صباغ ابو حليفة",
    "sabaagh_alsabahiya": "صباغ الصباحية",
    "sabaagh_almanqaf": "صباغ المنقف",
    "sabaagh_almahboula": "صباغ المهبولة",
    "sabaagh_al_ahmadi": "صباغ الاحمدي",
    "sabaagh_al_khiran": "صباغ الخيران",
    "sabaagh_alfhahil": "صباغ الفحيحيل",
    "sabaagh_alwafra": "صباغ الوفرة",
    "sabaagh_jaber_alali": "صباغ جابر العلي",
    "sabaagh_fahad_alahmad": "صباغ فهد الاحمد",
    "sabaagh_aldaiya": "صباغ الدعية",
    "sabaagh_aldasma": "صباغ الدسمة",
    "sabaagh_aldohah": "صباغ الدوحة",
    "sabaagh_alkhaldiya": "صباغ الخالدية",
    "sabaagh_alrawdah": "صباغ الروضة",
    "sabaagh_alrai": "صباغ الري",
    "sabaagh_alshuwaykh": "صباغ الشويخ",
    "sabaagh_asharq": "صباغ الشرق",
    "sabaagh_alshamiya": "صباغ الشامية",
    "sabaagh_alsurra": "صباغ السرة",
    "sabaagh_alqadesiya": "صباغ القادسية",
    "sabaagh_alqurawan": "صباغ القروان",
    "sabaagh_alfaihaa": "صباغ الفيحاء",
    "sabaagh_aladiliya": "صباغ العديلية",
    "sabaagh_alsulaybikhat": "صباغ الصليبخات",
    "sabaagh_kaifan": "صباغ كيفان",
    "sabaagh_qurtoba": "صباغ قرطبة",
    "sabaagh_ghranata": "صباغ غرناطة",
    "sabaagh_abdullah_al_salim": "صباغ ضاحية عبدالله السالم",
    "sabaagh_dasman": "صباغ دسمان",
    "sabaagh_bneid_alqar": "صباغ بنيد القار",
    "sabaagh_alnahda": "صباغ النهضة",
    "sabaagh_alnuzha": "صباغ النزهة",
    "sabaagh_almansouriya": "صباغ المنصورية",
    "sabaagh_mantiqa_al_ashira": "صباغ المنطقة العاشرة",
    "sabaagh_alandalus": "صباغ الاندلس",
    "sabaagh_alqrean": "صباغ القرين",
    "sabaagh_alkswor": "صباغ القصور",
    "sabaagh_aladaan": "صباغ العدان",
}

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const _id = params.id.replace(/-/g, '_');

    const title = titles[_id as keyof typeof titles];

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
