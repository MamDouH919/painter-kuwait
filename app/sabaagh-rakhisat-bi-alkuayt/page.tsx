import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import sabaagh_rakhisat_bi_alkuayt from '@/app/Images/links-images/sabaagh_rakhisat_bi_alkuayt.jpg';
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ رخيص بالكويت"

export const metadata: Metadata = {
    title: `صباغ الكويت 51108895 - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
}

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <Typography color='primary.main' component={"h1"} variant='h1' fontSize={35} textAlign={"center"}>{title} | 51108895</Typography>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <Stack alignItems="center" spacing={2}>
                    <ImageStyle src={sabaagh_rakhisat_bi_alkuayt} alt="صباغ رخيص بالكويت - صباغ بالكويت رخيص - اصباغ رخيصة - فني صباغ رخيص" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ رخيص بالكويت - صباغ بالكويت رخيص - اصباغ رخيصة - فني صباغ رخيص - 51108895
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        يواكب الصباغ الشاطر دائمًا أحدث تقنيات الطلاء. من بين هذه التقنيات هي طلاء الرش، الذي يوفر طبقة ملساء ومتساوية على الجدران. إنها تقنية تضمن نتائج مدهشة في وقت قصير. اختيار صباغ شاطر يمكن أن يكون تحديًا، ولكنه يستحق الجهد. أولاً، يجب البحث عن تجارب الآخرين. التعليقات والمراجعات على الإنترنت يمكن أن تكون مفيدة جداً. إذا كان لديهم سجل جيد، فهذه بداية مشجعة. احصل علي صباغ- صباغ شاطر- صباغ رخيص- رقم صباغ رخيص- اصباغ وديكورات- اصباغ- جبس بورد- بديل رخام- ورق جدران- معلم جبس بورد- تركيب ورق جدران– تركيب جبس بورد- ديكورات جبس بورد- معلم جبس بورد باكستاني عن طريق موقعنا المتميز الأن بأفضل العروض. متخصصون فى تنفيذ كل اعمال الصبغ والدهانات وتنفيذ كافه الاع مال بدقه وتميز واتقان من كل اعمال الديكورات والصبغ وديكورات غرف النوم والاسقف والمداخل وغيرها … * لدينا جميع انواع الاصباغ الايطالية والترخيم صبغ لامع – صبغ مطفى – خشن – ناعم – الابداع – الخيال – الروشن – المششكو – سان ماركو – اسبنس ايطالى – ارابيسك – افكت – شمواه – تقليم – تدخين – اكسدة- دريم -فلفت – معجون بارز-
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
