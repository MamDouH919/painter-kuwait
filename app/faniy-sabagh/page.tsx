import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import faniy_sabagh from '@/app/Images/links-images/faniy_sabagh.jpg';
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "فني صباغ الكويت"

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
                    <ImageStyle src={faniy_sabagh} alt="فني صباغ - صباغ الكويت" />

                    <Stack spacing={2} alignItems="center">
                        <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                            فني صباغ - <strong>صباغ الكويت</strong> - 51108895
                        </Typography>
                        <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                            يعتبر صباغ فني في منطقة الكويت هو الصباغ الاول في الوطن العربي لجميع اصباغ دولة الكويت اتصل الان علي صباغ السالمية واحصل علي خصم 30%علي جميع انواع الاصباغ
                        </Typography>
                        <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                    </Stack>
                    <Stack spacing={2} alignItems="center">
                        <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                            صباغ -<strong>صباغ الكويت</strong>
                        </Typography>
                        <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                            يعتبر صباغ من اهم الكلمات المستخدمة في مجال ا<strong>صباغ الكويت</strong> وتعني دهانات المنازل والشقق والقسائم وعمل ديكورات في البيوت وتصميم رسومات في شقق الاطفال داخل دولة الكويت تعتبر الصباغة جزءًا مهمًا لتجديد المنازل والمباني. في الكويت، هناك شركات متخصصة تقدم خدمات صباغة متنوعة. هذه الشركات تستخدم تقنيات حديثة ومواد عالية الجودة لتحقيق أفضل النتائج. تشمل خدمات الصباغة في الكويت صباغة داخلية وخارجية، ورق جدران، وحل مشاكل الجدران. الصباغ المحترف في الكويت يركز على السلامة ويعد المكان جيدًا قبل البدء بالعمل. 80% من الأفراد يشعرون بالسعادة بعد تغيير لون منازلهم. تحسين مظهر المنزل يمكن أن يزيد من قيمته. لذلك، اختيار شركة صباغة محترفة مهم للحصول على أفضل النتائج بأسعار معقولة.
                        </Typography>
                        <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                    </Stack>
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
