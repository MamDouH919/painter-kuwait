import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import { ImageStyle } from '@/components/layouts/ImageStyle'
import dihanat_alkuayt from '@/app/Images/links-images/dihanat_alkuayt.webp';

const title = "دهانات الكويت"

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
                    <ImageStyle src={dihanat_alkuayt} alt="صباغ فني دهانات - فني دهانات بالكويت - صباغ فني بالكويت - افضل فني صباغ دهانات بالكويت" />
                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ فني دهانات - فني دهانات بالكويت - صباغ فني بالكويت - افضل فني صباغ دهانات بالكويت - 51108895
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        فني دهانات الكويت، هي شخص متخصص في العمل على تقديم جميع الخدمات التي تعلق بالدهانات لأي عميل داخل أي مكان داخل دولة الكويت، بشكل أكثر من رائع وتوفير جميع الديكورات الحديثة التي يرغب فيها العملاء، لذلك سنقوم بعرض أهم المعلومات التي تخص فني دهانات الكويت فني دهانات الكويت إن أعمال الدهانات تعد من أهم الأعمال التي تظهر الشكل النهائي للمنزل أو لأي مكان بشكل عام، ولكن تلك الأعمال لا يتمكن أي شخص من القيام بتقديمها للعملاء نظرًا لأنها من ضمن الأعمال التي تتطلب مزيد من المهارة الخاصة والتعليم المسبق لتلك المهنة لكي يتمكن هذا الشخص من تقديمها بالشكل المثالي لها بدون أي أخطاء أو عيوب أو انحرافات عامة، كما أنها تتطلب توفير مجموعة من العدد والأدوات من أجل القدرة على تقديم تلك الخدمة وتلك العدد والأدوات لا يتمكن أي شخص من استخدامها سوى الشخص الذي تعلم على استخدام تلك العدد من قبل، لذلك عن القيام بتشطيب أي مكان ودهانه بالكامل فيلجأ العملاء مباشرة إلى الاستعانة بفني دهانات الكويت لأنه يمتلك المهارات والقدرات والإمكانيات التي تساعده على تقديم تلك الخدمة للعملاء بأفضل شكل ممكن لها، كما أن هذا الشخص يمتلك الكثير من العدد والأدوات والأجهزة المتقدمة التي تساعده على ذلك، بخلاف الخبرات الواسعة جدًا التي يمتلكها هذا الشخص داخل هذا المجال أفضل فني دهانات الكويت يوجد أكثر من شخص يعمل فني دهانات في أي مكان سواء داخل دولة الكويت أو خارجها، ولكن كل شخص من الذين يقدمون هذه الخدمات للعملاء يقدم تلك الخدمة بشكل وأسلوب خاص به ومن الوارد أن يكون هذا الأسلوب غير متوافق مع طلبات ورغبات وأماني العملاء فيما يرغبون في القيام بتنفيذه داخل أي مكان يمتلكونه، لذلك يعتبر فني دهانات الكويت من أفضل الأشخاص الذين يتمكنوا من توفير تلك الخدمة للعملاء نظرًا لكمية المهارات العديدة التي يمتلكها هذا الشخص بشكل عام، كما أن لديه القدرة على القيام بتنفيذ جميع الديكورات والتصميمات العالمية التي يتمنى أي عميل القيام بتنفيذها داخل المكان الذي يخصه أيًا كان نوع هذا المكان ومهما كان نوع النشاط الذي يتم ممارسته داخل هذا المكان بشكل عام الخدمات التي يعرضها فني دهانات الكويت على عملائه يتمكن <b>صباغ الكويت</b> من عرض العديد من الخدمات المختلفة على جميع عملائه في كل مكان، حيث أن تلك الخدمات هي وسيلة التواصل بين الفني وبين العملاء،
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page