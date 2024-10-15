import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import { ImageStyle } from '@/components/layouts/ImageStyle'
import dikurat_sabagh_lilkuayt from '@/app/Images/links-images/dikurat_sabagh_lilkuayt.webp';

const title = "صباغ ديكورات بالكويت"

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
                    <ImageStyle src={dikurat_sabagh_lilkuayt} alt="ديكورات الكويت - صباغ ديكورات - صباغ ممتاز ديكورات" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        ديكورات الكويت - صباغ ديكورات - صباغ ممتاز ديكورات - 51108895
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        احدث التصميمات والديكورات التى تناسب جميع الازواق واقل الأسعار هنقدمها لكم جميع اعمال النجاره احدث التصميمات والديكورات التى تناسب جميع الازواق واقل الأسعار هنقدمها لكم جميع اعمال النجاره بديل خشب . بديل رخام صبغ صدفي ناعم خشن. ايطالي . صبغ جوتن . ديكورات خشبية . ديكورات جبس بورد. جام . باركيه احدث ورق حائط ورق 3D ثلاثي الابعاد .رسومات. دقه في التنفيذ والتسليم .جميع الاصباغ بدون رائحة للتواصل مع <b>صباغ الكويت</b> برجاء التواصل عبر احدي وسائل التواصل الاتية – توفر أفضل الاصباغ والديكورات من أشهر الماركات العالمية والمحلية، مثل جوتن وكابارول وناشونال والجزيرة والسيف وغيرها. – تقدم أسعار منافسة ومناسبة لجميع الميزانيات والمستويات، مع توفير عروض وخصومات مميزة. – تضمن جودة العمل والنظافة والسرعة والدقة والالتزام بالمواعيد والمواصفات المطلوبة. – توفر ضمان على الاصباغ والديكورات لمدة تصل إلى 10 سنوات، مع تقديم خدمة ما بعد البيع والصيانة الدورية. – تمتلك فريق عمل مؤهل ومدرب ومحترف وملتزم ومتعاون، يتمتع بخبرة طويلة في مجال الصباغة والديكور. – تستخدم أحدث التقنيات والأدوات والمعدات في تنفيذ الاصباغ والديكورات، مع اتباع أعلى معايير السلامة والصحة المهنية.
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
