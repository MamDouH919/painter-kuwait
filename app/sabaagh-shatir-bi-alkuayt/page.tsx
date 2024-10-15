import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import sabaagh_shatir_bi_alkuayt from '@/app/Images/links-images/sabaagh_shatir_bi_alkuayt.webp';
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ شاطر بالكويت"

export const metadata: Metadata = {
    title: `صباغ الكويت - 51108895 - صباغ شاطر ورخيص - ${title}`,
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
                    <ImageStyle src={sabaagh_shatir_bi_alkuayt} alt="صباغ شاطر بالكويت" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ شاطر بالكويت - 51108895
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        عرف صباغ شاطر كيف ينسق الالوان ويختار الخامات المناسبة ويستخدم المعدات على أكمل وجه من اجل اعطائك أحسن النتيجة كما ان الصباغ عندما يكون الشغل المطلوب في غرف الاطفال يعرف كيف يقوم بتنسيق الغرفة بالألوان المناسبة للأطفال والجميلة والمميزة ويقوم برسم رسومات كرتونيه مهما كانت شكلها يحبها الاطفال وتكون محببه لهم وتناسب غرفتهم فيوجد لدى <b>صباغ الكويت</b> أفضل انواع الدهانات وورق الحائط وكل شيء لعمليات التجديد ويوفر لكم تشكيله مميزه ومنوعه وكبيره من ورق الحائط بجميع الاشكال والالوان والاحجام ويتوفر لديهم ايضا عمال متخصصون في اعمال تركيب ورق الجدران حيث انه يتطلب صباغ شاطر وجميع الوانها اتيه من الاشكال الطبيعية وهناك ايضا ورق حائط ثلاثي الابعاد نقوم بتوفيره لكم
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
