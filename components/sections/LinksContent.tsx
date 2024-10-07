"use client"
import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import aspagh from '@/app/Images/links-images/aspagh.jpg';
import sabaagh_rakhis from '@/app/Images/links-images/sabaagh-rakhis.webp';
import sabaagh_shatir from '@/app/Images/links-images/sabaagh-shatir.jpeg';
import muealim_sabagh from '@/app/Images/links-images/muealim-sabagh.jpg';
import sabaagh_alkuayt from '@/app/Images/links-images/sabaagh-alkuayt.webp';
import aisbgh_alkuayt from '@/app/Images/links-images/aisbgh_alkuayt.webp';
import sabaagh_shatir_bi_alkuayt from '@/app/Images/links-images/sabaagh_shatir_bi_alkuayt.webp';
import muealim_sabaagh_bi_alkuayt from '@/app/Images/links-images/muealim_sabaagh_bi_alkuayt.jpg';
import faniy_sabagh from '@/app/Images/links-images/faniy_sabagh.jpg';
import sabaagh_mumtaz_bi_alkuayt from '@/app/Images/links-images/sabaagh_mumtaz_bi_alkuayt.jpg';
import dikurat_sabagh_lilkuayt from '@/app/Images/links-images/dikurat_sabagh_lilkuayt.webp';
import manazil_sabaagh_bi_alkuayt from '@/app/Images/links-images/manazil_sabaagh_bi_alkuayt.jpg';
import shaqaq_sabaagh_bi_alkuayt from '@/app/Images/links-images/shaqaq_sabaagh_bi_alkuayt.jpg';
import sabaagh_buyut_aitfal from '@/app/Images/links-images/sabaagh_buyut_aitfal.jpg';
import sabaagh_rusumat_aitfal from '@/app/Images/links-images/sabaagh_rusumat_aitfal.jpeg';
import sabaagh_rakhisat_bi_alkuayt from '@/app/Images/links-images/sabaagh_rakhisat_bi_alkuayt.jpg';
import dihanat_alkuayt from '@/app/Images/links-images/dihanat_alkuayt.webp';
import tarkib_waraq_judran from '@/app/Images/links-images/tarkib_waraq_judran.jpg';
import asbagh_abwab_khashabia from '@/app/Images/links-images/asbagh_abwab_khashabia.jpg';
import muealim_jabs_burd from '@/app/Images/links-images/muealim_jabs_burd.jpg';
import sabaagh_alsaalimia from '@/app/Images/links-images/sabaagh_alsaalimia.jpg';
import sabaagh_sabah_alsaalim from '@/app/Images/links-images/sabaagh_sabah_alsaalim.webp';
// import sabaagh_hawli from '@/app/Images/links-images/sabaagh_hawli.webp';
// import sabaagh_jabir_alahamad from '@/app/Images/links-images/sabaagh_jabir_alahamad.jpg';
// import sabaagh_khaytan from '@/app/Images/links-images/sabaagh_khaytan.jpg';
import sabaagh_hawalli from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_jaber_alahmad from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_khaitan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfarwaniyah from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aljabriya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshaab from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_bayan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_janoub_alsura from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mubarak from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mishref from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alzahraa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsiddiq from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_hateen from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_salwa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshuhadaa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_salam from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_masila from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almasayel from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abu_alhasania from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_subhan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abu_ftaira from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_fintas from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mubarak_al_kabeer from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alaqeela from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfntas from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alraqa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abu_halifa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsabahiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almanqaf from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almahboula from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_ahmadi from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_khiran from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfhahil from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alwafra from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_jaber_alali from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_fahad_alahmad from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aldaiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aldasma from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aldohah from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alkhaldiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alrawdah from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alrai from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshuwaykh from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_asharq from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshamiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsurra from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alqadesiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alqurawan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfaihaa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aladiliya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsulaybikhat from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_kaifan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_qurtoba from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_ghranata from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abdullah_al_salim from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_dasman from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_bneid_alqar from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alnahda from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alnuzha from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almansouriya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mantiqa_al_ashira from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alandalus from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alqrean from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alkswor from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aladaan from "@/app/Images/links-images/aisbgh_alkuayt.webp"

import Information from './Information';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { zones } from './Links';

const generateLinkData = (title: string) => (
    <Stack alignItems="center" spacing={2}>
        <Stack spacing={2} alignItems="center">
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                {title} - صباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يعتبر {title} في منطقة الكويت هو الصباغ الاول في الوطن العربي لجميع اصباغ دولة الكويت اتصل الان علي صباغ السالمية واحصل علي خصم 30%علي جميع انواع الاصباغ
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
        <Stack spacing={2} alignItems="center">
            <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ - صباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يعتبر صباغ من اهم الكلمات المستخدمة في مجال اصباغ الكويت وتعني دهانات المنازل والشقق والقسائم وعمل ديكورات في البيوت وتصميم رسومات في شقق الاطفال داخل دولة الكويت تعتبر الصباغة جزءًا مهمًا لتجديد المنازل والمباني. في الكويت، هناك شركات متخصصة تقدم خدمات صباغة متنوعة. هذه الشركات تستخدم تقنيات حديثة ومواد عالية الجودة لتحقيق أفضل النتائج. تشمل خدمات الصباغة في الكويت صباغة داخلية وخارجية، ورق جدران، وحل مشاكل الجدران. الصباغ المحترف في الكويت يركز على السلامة ويعد المكان جيدًا قبل البدء بالعمل. 80% من الأفراد يشعرون بالسعادة بعد تغيير لون منازلهم. تحسين مظهر المنزل يمكن أن يزيد من قيمته. لذلك، اختيار شركة صباغة محترفة مهم للحصول على أفضل النتائج بأسعار معقولة.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>

    </Stack>

);

// Data for different IDs
const linksData: { [key: string]: React.ReactNode } = {
    aspagh: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                اصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_rakhis: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                اصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_shatir: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ شاطر - صباغ ممتاز - صباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    muealim_sabagh: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                اصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            {/* <Image src={sabaagh_alkuayt} alt="صباغ الكويت" objectFit="contain" height={400} /> */}
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت واحد من امهر الصباغين الموجودين في الكويت متخصص في دهان الحوائط وتركيب ورق الجدران ويمتلك خبرة في مجال الاصباغ ويعتبر من افضل الصباغين وهذا الان يتميز بالجودة في الخدمة ويتميز بالاحترافية العالية والخبرة والادوات والمعدات التي يمتلكها التي تعتبر من احداث المعدات داخل دوله الكويت ولان الكثير منا يحب فكره تجديد منزله فلابد من ان تعين صباغ خبير يوفر لك احسن الخامات والمعدات الموجودة في مجال الاصباغ
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    aisbgh_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                اصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_shatir_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ شاطر بالكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                عرف صباغ شاطر كيف ينسق الالوان ويختار الخامات المناسبة ويستخدم المعدات على أكمل وجه من اجل اعطائك أحسن النتيجة كما ان الصباغ عندما يكون الشغل المطلوب في غرف الاطفال يعرف كيف يقوم بتنسيق الغرفة بالألوان المناسبة للأطفال والجميلة والمميزة ويقوم برسم رسومات كرتونيه مهما كانت شكلها يحبها الاطفال وتكون محببه لهم وتناسب غرفتهم فيوجد لدى صباغ الكويت أفضل انواع الدهانات وورق الحائط وكل شيء لعمليات التجديد ويوفر لكم تشكيله مميزه ومنوعه وكبيره من ورق الحائط بجميع الاشكال والالوان والاحجام ويتوفر لديهم ايضا عمال متخصصون في اعمال تركيب ورق الجدران حيث انه يتطلب صباغ شاطر وجميع الوانها اتيه من الاشكال الطبيعية وهناك ايضا ورق حائط ثلاثي الابعاد نقوم بتوفيره لكم
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    muealim_sabaagh_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    معلم صباغ محترف لخدمات الطلاء المنزلي
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    هل تتساءل عن السر وراء جمال جدران المنزل المزهر بالألوان الجذابة؟ الإجابة هي وجود معلم صباغ محترف وراء ذلك. هذا المعلم يساعدك في تحويل جدرانك إلى لوحة فنية رائعة. إذا كنت ترغب في إعطاء منزلك أو مكتبك لمسة جديدة ومتميزة، فلا تتردد في الاستعانة بخدمات معلم صباغ محترف. سنقدم لك أفضل الحلول للصباغة بأحدث التقنيات والألوان الزاهية. دع جدرانك تعبر عن ذوقك الرفيع بخبرتنا في الدهانات والصباغة. سواء كنت تريد تجديد منزلك أو مكتبك، معلم صباغ محترف هو الحل الأمثل. نقدم خدمات صباغة متكاملة تناسب جميع الأذواق والميزانيات. اعتمد علينا لتحويل أحلامك إلى واقع بلمسة فنية رائعة. لا تتردد في التواصل معنا لاستشارة معلم صباغ محترف للقيام بعملية الصباغة بشكل احترافي. سنيساعدك في اختيار الألوان المناسبة وتقديم أفضل الحلول لإنجاز المشروع بكفاءة عالية.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    أهم النقاط معلم صباغ
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    خدمات صباغة احترافية باستخدام أحدث التقنيات والألوان إضفاء لمسة أنيقة على جدران المنزل أو الشقة أو الفيلا خبرة وإتقان في تنفيذ أعمال الصباغة المختلفة التعامل مع مختلف أنواع الأسطح والجدران تقديم نصائح للاختيار الأمثل للطلاء والألوان
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    لماذا تحتاج إلى معلم صباغ محترف؟
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    صباغة الجدران ليست مجرد طلاء بسيط. تحتاج إلى مهارات وخبرة خاصة. معلم صباغ محترف يقدم خدمات دهان متميزة للحصول على نتائج مثالية. هؤلاء الفنيون يعرفون كيف يختارون ألوان الجدران المناسبة. كما يعرفون كيف يعدون السطوح قبل البدء بالعمل. ويستخدمون تقنيات الصباغة الصحيحة للحصول على إنهاء متجانس. باستعانة بـعامل صباغ محترف، ستضمن جودة عالية في صبغ الجدران. هذا يخلق لك الوقت والجهد. ويضمن أن الطلاء يبقى جديدًا ومتماسكًا لسنوات. لإعطاء منزلك لمسة جديدة وفائقة الجمال، اختر فني صباغ محترف. هذا هو الخيار الأفضل. اختيار معلم دهان محترف مهم جدًا. هذا يضمن إنجاز مهمة الصباغة بطريقة مثالية. وسيضمن نتائج مرضية تستمر لفترة طويلة.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    اختيار معلم صباغ الجدران الصحيح
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    عند البحث عن معلم صباغ محترف، من المهم معرفة خبرته. يجب أن يكون لديه تدريب جيد وسجل إنجازات ممتازة. المعرفة بال ألوان والتقنيات مهمة لاختيار صباغ لمنزلك أو شققت. من المهم التحقق من سمعة معلم الصباغة وخبرته. يمكنك رؤية أعماله السابقة أو استشارة عملاء سابقين. هذا يساعد في الحصول على خدمات صباغة عالية الجودة. معلم الصباغ المحترف يجب أن يعرف التقنيات الحديثة والدهانات المتاحة. هذا يساعد في تقديم نصائح قيمة للعميل. اختيار الصباغ المناسب يضمن نجاح مشروع الطلاء.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    إعداد السطح قبل البدء بالصباغة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    قبل البدء بالصباغة، يجب إعداد السطح جيدًا. هذه الخطوة أساسية لنتيجة متميزة. تبدأ بإزالة أي دهانات قديمة أو متهالكة من الجدران. بعد ذلك، يتم سد الشقوق والثقوب بالمواد المناسبة. ثم، يتم تنظيف الجدران جيدًا من الأوساخ أو البقايا. هذه المرحلة مهمة لنجاح الصباغة. معلم الصباغ المحترف يضمن إتمام الخطوات بالشكل المطلوب. هذا يضمن نتيجة نهائية متميزة وطويلة الأمد.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    أهمية اختيار الألوان المناسبة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    لا يقتصر دور معلم دهان على وضع الطلاء على جدران لون فقط. اختيار الألوان المناسبة مهم جدًا ليعكس ذوقك وتتناسب مع ديكور المكان. صبغ جدران المحترف يقدم نصائح حول الألوان التي تضفي جمالًا وراحة على المكان. الألوان لها تأثير كبير على مزاجك وشعورك بالراحة. اللون الأخضر يُشعر بالاسترخاء والهدوء. أما الألوان الدافئة مثل الأحمر والبرتقالي فتضفي حيوية ونشاط. من المهم استشارة معلم دهان محترف لاختيار اللون المناسب. اختيار الألوان قد يكون صعبًا للبعض. يأتي دور معلم صباغ الخبير في هذا الوقت. سيساعدك على اختيار الألوان المثالية التي تمنح المكان المظهر المرغوب.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    تقنيات الصباغة المختلفة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    تجديد منزلك أو شقتك يحتاج إلى صباغة مهمة. الصباغة تعطي لمسة نهائية رائعة وتغير من ديكور المكان بشكل كبير. معلم صباغ محترف يستخدم تقنيات مختلفة لإنجاز هذه المهمة بشكل جيد. الرش بالبخاخ هو تقنية شائعة في الصباغة. هذه الطريقة توفر طلاء سلس ومتساوٍ على السطوح الكبيرة مثل الجدران والأسقف. أما الفرش اليدوية، فهي تمنح مظهرًا أكثر تفاصيلاً وإبداعًا، خاصةً على المساحات الصغيرة كالأبواب والنوافذ وزوايا الغرف. فني صباغ ماهر قد يستخدم منازل الطلاء الكهربائية للحصول على نتائج متميزة وسريعة، خاصةً في المساحات الكبيرة. من المهم اختيار التقنية المناسبة للحصول على أفضل النتائج، بناءً على نوع السطح والتأثير المطلوب.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    المعدات والأدوات المستخدمة في عملية الصباغة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    لنجاح عملية الصباغة، يحتاج معلم الصباغة إلى أدوات متخصصة. من الفرش والبخاخات إلى السقالات والمناشير الكهربائية، كل أداة مهمة. هذا يضمن جودة النتائج النهائية. الفرش المتخصصة تساعد على تطبيق الدهانات بشكل منتظم. البخاخات الكهربائية توزيع الطلاء بدقة. السقالات والمناشير الكهربائية مهمة لإعداد السطح. قد تحتاج الأدوات الأخرى مثل أدوات الحادة لإزالة الطبقات القديمة. والأجهزة الكهربائية لخلط الألوان بدقة. هذه الأدوات تضمن نتائج صباغة متميزة.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    معلم صباغ للمنازل والشقق والفلل
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    إذا كنت ترغب في تجديد منزلك أو شقتك أو فيلتك، لدينا فريق من معلمي الصباغ المحترفين. سيكونون قادرون على إنجاز المهمة بكفاءة. نحن نضمن لك نتائج مذهلة بلا فوضى أو إزعاج. فريقنا من معلمي الصباغ الماهرين يرعى كل التفاصيل بحرفية. من اختيار الألوان المناسبة إلى إعداد السطح والتطبيق الدقيق للطلاء. نقدم لك خدمات صباغة متكاملة وعالية الجودة، سواء كنت ترغب في تغيير ألوان الحوائط أو إضفاء لمسة جديدة. لا تقلق بشأن الفوضى أو الإزعاج. فريقنا من فني الصباغ يتعامل مع كل شيء بمهنية وحرفية. هذا يضمن لك نتائج استثنائية بلا إزعاج. استمتع بجمالية منزلك الجديد بسهولة!
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    أسعار خدمات معلم صباغ محترف
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    عند البحث عن خدمات طلاء للمنزل، السعر مهم جدًا. في شركتنا، نقدم أسعار تنافسية لخدمات معلم صباغ محترف. هذا يضمن لك أفضل قيمة مقابل المال. سواء كانت الغرفة الواحدة أو المنزل بأكمله، نقدم لك عرض شامل. يشمل هذا العرض جميع التكاليف للمواد والعمالة والمعدات. نؤمن بأن الجودة مهمة جدًا. لذلك، نقدم لك أفضل خدمة صباغة بأسعار معقولة. فريقنا من معلمي الصباغة المحترفين لديهم الخبرة والمهارة اللازمة. لا تتردد في طلب عرض سعر مجاني مننا. سوف نُفند لك تفاصيل التكاليف وخطوات العمل. نحن نريد مساعدتك في إنجاز خدمات الصباغة بكل سهولة وبالجودة العالية.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    نصائح لاختيار معلم صباغ موثوق
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    عند البحث عن معلم صباغ محترف، من المهم التأكد من خبرته. استشعر من أصدقائك أو سأل عن توصياتهم لمعلمي الصباغة السابقين. كما يجب البحث عن تقييمات العملاء السابقين. تأكد من أن فني الصباغة يمتلك التراخيص اللازمة. هذا مهم لضمان خدمات آمنة. لا تتردد في طرح أسئلة قبل البدء في العمل. باختيار معلم صباغ موثوق، ستضمن نتائج جيدة. القيام بالبحث الجيد يساعد في اتخاذ القرار الصحيح. هذا يضمن نجاح المشروع.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    العوامل التي تؤثر على عمر الطلاء
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    دور معلم الصباغة يمتد أكثر من مجرد وضع الطلاء على الجدران. هناك عوامل رئيسية تحدد عمر الطلاء. معلم الصباغ المحترف يجب أن يأخذها في الاعتبار. جودة المواد مهمة جدًا. المواد الجيدة تدوم أطول من المواد الرخيصة. كما أن الطريقة الصحيحة للتطبيق مهمة لضمان تماسك الطلاء. الصيانة المنتظمة مهمة أيضًا. التنظيف الدوري يحافظ على جودة الطلاء. معلم الصباغ يوجه العملاء بشأن أفضل الممارسات. الحرارة والرطوبة تؤثر على عمر الطلاء. ينصح باختيار المواد المناسبة للظروف المناخية. في النهاية، معلم الصباغ يمكنه إرشاد العملاء لتحافظون على طلاء الجدران لفترة أطول. يوصي باختيار المواد الجيدة وتطبيقها بشكل صحيح.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    معلم صباغ الكويت
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    هل تبحث عن معلم صباغ جيد و رخيص من أجل تنفيذ أعمال الدهانات و الصباغة لك في أسرع وقت ؟ إننا اليوم نعمل على توفير مجموعة من الصباغين ذو الخبرة و المهارة العالية في هذا المجال ، حيث أنهم نخبة مميزة من أفضل معلمين الصباغة الموجودين في الكويت ، ولكن عند التعامل معهم سوف تحصل على أفضل و أروع الخدمات الخاصة بمجال الصبغة و الدهانات ، حيث أن جميع أعمالهم يتم تنفيذها بناء على خبرة و مهارة عالية يمتلكونها ، و هذا نتيجة السنوات التي قضوها في العمل بهذا المجال ، مما جعل هذا الفريق الأفضل دائمًا ، و الاختيار الأول لجميع العملاء عند اتخاذ خطوة تجديد أو صباغة المنزل و الأماكن الخاصة بهم . و لكي تحصل على هذه الخدمات التي يقوم بها أفضل معلم صباغ بتقديمها ، كل ما عليك فعله هو التواصل معنا من خلال الأرقام الخاصة بنا ، حتى تستطيع أن تطلب جميع الخدمات التي تحتاج إليها ، و عند الاتصال سوف يرد عليك أحد من فريق خدمة العملاء الخاص بنا لكي يستقبل جميع الخدمات المطلوبة و العمل على توفيرها في أسرع وقت ،لذلك نحن نعمل على توفير و تنفيذ جميع الخدمات التي يحتاج إليها العملاء و التي تخص الصباغة و الدهانات في أي مكان يوجد به العميل و في أسرع وقت ممكن ، و هذا بعد أن تقوم بالتواصل معنا و طلب الأعمال التي تريد الحصول عليها
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
        </Stack>
    ),
    faniy_sabagh: (
        <Stack alignItems="center" spacing={2}>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    فني صباغ - صباغ الكويت
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    يعتبر صباغ فني في منطقة الكويت هو الصباغ الاول في الوطن العربي لجميع اصباغ دولة الكويت اتصل الان علي صباغ السالمية واحصل علي خصم 30%علي جميع انواع الاصباغ
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    صباغ -صباغ الكويت
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    يعتبر صباغ من اهم الكلمات المستخدمة في مجال اصباغ الكويت وتعني دهانات المنازل والشقق والقسائم وعمل ديكورات في البيوت وتصميم رسومات في شقق الاطفال داخل دولة الكويت تعتبر الصباغة جزءًا مهمًا لتجديد المنازل والمباني. في الكويت، هناك شركات متخصصة تقدم خدمات صباغة متنوعة. هذه الشركات تستخدم تقنيات حديثة ومواد عالية الجودة لتحقيق أفضل النتائج. تشمل خدمات الصباغة في الكويت صباغة داخلية وخارجية، ورق جدران، وحل مشاكل الجدران. الصباغ المحترف في الكويت يركز على السلامة ويعد المكان جيدًا قبل البدء بالعمل. 80% من الأفراد يشعرون بالسعادة بعد تغيير لون منازلهم. تحسين مظهر المنزل يمكن أن يزيد من قيمته. لذلك، اختيار شركة صباغة محترفة مهم للحصول على أفضل النتائج بأسعار معقولة.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
        </Stack>
    ),
    sabaagh_mumtaz_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ ممتاز الكويت - خدمات دهان احترافية
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                نحن في صباغ ممتاز الكويت، فخورون بخدمات الدهان التي نقدمها. فريقنا يوفر خدمات عالية الجودة بأسعار مناسبة. نحن نستخدم التقنيات الحديثة واصباغ ممتازة لتزويدكم بمظاهر جميلة وجذابة. إذا كنتم بحاجة لدهان لمنزلكم أو مشروعكم التجاري، اعتمدوا على خبرتنا. تواصلوا معنا اليوم لخدمات دهان مميزة في الكويت. خدمات صباغ ممتاز الكويت تحتوي على العديد من خدمات الدهان. تقدم لجميع أنواع المباني والمساحات خدماتنا. نحن نختص في تزيين المنازل والشقق وأماكن العمل مثل المحال والمصانع والورش. نقدم الأفضل بفضل سنوات الخبرة التي اكتسبناها. إننا دائما نحرص على تطوير مهاراتنا ومتابعة أحدث التقنيات. ذلك يساعدنا على تحقيق نتائج جميلةاختيار صباغ الكويت مرتبط بجودتنا العالية وكفاءتنا. نحن ندعم دهاناتنا ذات الجودة والاصباغ المثالية في صباغ ممتاز الكويت، نقدم مجموعة واسعة من أنواع الدهانات. تلبي احتياجات جميع عملائنا. الأنواع تتضمن المائية والزيتية والأكريليك والإيبوكسي والبلاستيكية. نحن نستخدم منتجات عالية الجودة لأفضل النتائج. تشكيلتنا من الاصباغ في الكويت هي الأوسع والأكثر تنوعًا. تم تصميمها لتناسب جميع الأذواق والغرض، بما يشمل منازل وشقق ومباني تجارية ومصانع وورش. اصباغنا تتميز بالجودة والمتانة والتنوع. إذا كنت تبحث عن دهان مائي للحوائط أو زيتي للأرضيات، صباغ ممتاز الكويت هو الخيار المثالي. تصل تشكيلتنا بين الجودة والأداء لنضمن لك النتائج المطلوبة. نحن نقدم خدمات دهان احترافية بفضل الاستثمار بأفضل المنتجات والتقنيات. صباغ ممتاز الكويت هو اختيارك الأمثل لأنواع الدهانات الفائقة في الجودة.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    dikurat_sabagh_lilkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                ديكورات الكويت - صباغ ديكورات - صباغ ممتاز ديكورات
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                احدث التصميمات والديكورات التى تناسب جميع الازواق واقل الأسعار هنقدمها لكم جميع اعمال النجاره احدث التصميمات والديكورات التى تناسب جميع الازواق واقل الأسعار هنقدمها لكم جميع اعمال النجاره بديل خشب . بديل رخام صبغ صدفي ناعم خشن. ايطالي . صبغ جوتن . ديكورات خشبية . ديكورات جبس بورد. جام . باركيه احدث ورق حائط ورق 3D ثلاثي الابعاد .رسومات. دقه في التنفيذ والتسليم .جميع الاصباغ بدون رائحة للتواصل مع صباغ الكويت برجاء التواصل عبر احدي وسائل التواصل الاتية – توفر أفضل الاصباغ والديكورات من أشهر الماركات العالمية والمحلية، مثل جوتن وكابارول وناشونال والجزيرة والسيف وغيرها. – تقدم أسعار منافسة ومناسبة لجميع الميزانيات والمستويات، مع توفير عروض وخصومات مميزة. – تضمن جودة العمل والنظافة والسرعة والدقة والالتزام بالمواعيد والمواصفات المطلوبة. – توفر ضمان على الاصباغ والديكورات لمدة تصل إلى 10 سنوات، مع تقديم خدمة ما بعد البيع والصيانة الدورية. – تمتلك فريق عمل مؤهل ومدرب ومحترف وملتزم ومتعاون، يتمتع بخبرة طويلة في مجال الصباغة والديكور. – تستخدم أحدث التقنيات والأدوات والمعدات في تنفيذ الاصباغ والديكورات، مع اتباع أعلى معايير السلامة والصحة المهنية.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    manazil_sabaagh_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ منازل الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ منازل الكويت عبئ التفكير في كيفية تغيير ديكورات جدران بيتك و حوائط منزلك , فان كنت تعاني من وجود قشرة علي الاسطح و الجدران او ظهور الالوان بمظهر باهت وغير انيق مما يعرضك الي الاحراج امام اصدقائك و ضيوفك. صباغ منازل الكويت وخدمات صباغ خشب بالكويت نحن بفضل الله تعالي افضل شركه في مجال الدهانات و الاصباغ بداخل الممكله و خارجها. نحن لدينا عدد كبير من الكتالوجات الحديثه التي تحتوي علي احدث التصميمات العصريه و التي تجمع تشكيله متنوعه و مختلفه من الالوان و الدهانات , ومن مميزات شركتنا اننا نملك خبره علي عبر السنوات القديمه الاخري. فنحن نملك خبره سنين عديده , ونسعي الي تقديم افضل حخدمه ممكنه لعميلنا العزيز في لاختيار النوع الانسب في التشطيب والتسمسم بشكل كامل الكستخدمه في عمليات التشطيب والصباغه. و التي نتاكد من انها سوف تحظي بسعادتك و رضاك كل ماعليك فعله هو زيارتنا بفروعنا او التواصل معنا و اخبارنا بكافة التفاصيل كنوع البنايه التي تريد دهانها سواء ان كان منزل او شركة , بالاضافه الي مساحتها حتي نتمكن من تحديد عدد العمال اللذين سوف ياتون الي زيارتك و عدد المعدات ايضا.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    shaqaq_sabaagh_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            {/* <Image
                src={dikurat_sabagh_lilkuayt}
                alt="صباغ شقق بالكويت -صباغ شقق -صباغ شقق شاطر بالكويت -صباغ شقق ممتاز بالكويت"
                placeholder="blur"
                sizes="(max-width: 600px) 250px, 400px"
            /> */}
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ شقق بالكويت - صباغ شقق - صباغ شقق شاطر بالكويت - صباغ شقق ممتاز بالكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يعتبر صباغ شقق في الكويت من أفضل الصباغين التي تساعدك على اختيار مجموعة متنوعة من التصميمات العصرية التي تساعد بدورها على عمل مجموعة متنوعة من التشطيبات التي تضاهي أفضل الديكورات العالمية، يتم عمل مجموعة ديكورات واجهة رائعة تجعل الجميع يتعجب من جمالها، كما يتم الاهتمام بتنسيق الـ بألوان بشكل كبير، يتم توفير مجموعة من التصميمات الجميلة لجميع الديكورات الداخلية في المنازل، نهتم بعمل كل ما هو جديد للمنازل، يتم الاتصال بنا ومن ثم التعرف على أفضل العروض والتصميمات. سيتم الاتفاق داخل بيتك بعد الاطلاع على الكتالوجات والاختيار الأنسب من حيث المساحة والتكاليف، حيث أن هناك مجموعة كبيرة من التصميمات والديكورات ليتم الاختيار من بينها، يتم تحديد الالوان على حسب المكان والعفش الموجود به ليتم عمل تناسق كلي في المكان، نهتم بعمل كل ما هو جديد لينال رضاء العملاء.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_buyut_aitfal: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ بيوت أطفال
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ بيوت هو افضل خدمة صباغ يقدمها صباغ الكويت في البيوت جميع انواع الدهانات المطفية والزيتة اذا كنت تبحث عن افضل و احدث تصميمات الثري دى التي اصبحت من احدث الصيحات فى مجال الديكورات. فان صباغ الكويت يمتلك باقة من الالبومات التي تضم افضل رسومات ورق الجدران التى تتناسب مع كل اذواق و اراء عملاء صباغ الكويت. ليس فقط الرسومات عزيزى العميل و لكن ايضا الجودة و السعر فصباغ الكويت يوفر لك ورق الجدار بالشكل الذى تريده و كذلك بافضل جودة و اعلي مستوى و ايضا اقل سعر. يقدم صباغ الكويت جبس بورد باشكال متعددة تتميز بالروعة و الجمال و كذلك تصميمات داخلية و خارجية من الجبس بورد و التى يتم صناعتها على ايدى نخبة من افضل المهندسين و الفنيين المختصين ذوى الخبرة الطويلة فى هذا المجال. مع استخدام افضل الخامات للحصول على اعلى جودة ممكنة للجبس بورد فصباغ الكويت يسعلى دائما للتميز و الجودة و ارضاء كل العملاء .
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_rusumat_aitfal: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ رسومات اطفال صباغ ممتاز رسومات اطفال - صباغ شاطر رسومات اطفال - صباغ فني رسومات اطفال
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                متوفر لدينا فريق متكامل في صبغ جميع انواع رسومات الاطفال الكرتوني داخل غرف الاطفال بافضل الالوان التي تناسب اعمارهم في الكويت واختيار كاتلوجات رسم لاطفال لاختيارهم افضل الرسومات
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_rakhisat_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ رخيص بالكويت - صباغ بالكويت رخيص - اصباغ رخيصة - فني صباغ رخيص
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يواكب الصباغ الشاطر دائمًا أحدث تقنيات الطلاء. من بين هذه التقنيات هي طلاء الرش، الذي يوفر طبقة ملساء ومتساوية على الجدران. إنها تقنية تضمن نتائج مدهشة في وقت قصير. اختيار صباغ شاطر يمكن أن يكون تحديًا، ولكنه يستحق الجهد. أولاً، يجب البحث عن تجارب الآخرين. التعليقات والمراجعات على الإنترنت يمكن أن تكون مفيدة جداً. إذا كان لديهم سجل جيد، فهذه بداية مشجعة. احصل علي صباغ- صباغ شاطر- صباغ رخيص- رقم صباغ رخيص- اصباغ وديكورات- اصباغ- جبس بورد- بديل رخام- ورق جدران- معلم جبس بورد- تركيب ورق جدران– تركيب جبس بورد- ديكورات جبس بورد- معلم جبس بورد باكستاني عن طريق موقعنا المتميز الأن بأفضل العروض. متخصصون فى تنفيذ كل اعمال الصبغ والدهانات وتنفيذ كافه الاع مال بدقه وتميز واتقان من كل اعمال الديكورات والصبغ وديكورات غرف النوم والاسقف والمداخل وغيرها … * لدينا جميع انواع الاصباغ الايطالية والترخيم صبغ لامع – صبغ مطفى – خشن – ناعم – الابداع – الخيال – الروشن – المششكو – سان ماركو – اسبنس ايطالى – ارابيسك – افكت – شمواه – تقليم – تدخين – اكسدة- دريم -فلفت – معجون بارز-
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    dihanat_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ فني دهانات - فني دهانات بالكويت - صباغ فني بالكويت - افضل فني صباغ دهانات بالكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                فني دهانات الكويت، هي شخص متخصص في العمل على تقديم جميع الخدمات التي تعلق بالدهانات لأي عميل داخل أي مكان داخل دولة الكويت، بشكل أكثر من رائع وتوفير جميع الديكورات الحديثة التي يرغب فيها العملاء، لذلك سنقوم بعرض أهم المعلومات التي تخص فني دهانات الكويت فني دهانات الكويت إن أعمال الدهانات تعد من أهم الأعمال التي تظهر الشكل النهائي للمنزل أو لأي مكان بشكل عام، ولكن تلك الأعمال لا يتمكن أي شخص من القيام بتقديمها للعملاء نظرًا لأنها من ضمن الأعمال التي تتطلب مزيد من المهارة الخاصة والتعليم المسبق لتلك المهنة لكي يتمكن هذا الشخص من تقديمها بالشكل المثالي لها بدون أي أخطاء أو عيوب أو انحرافات عامة، كما أنها تتطلب توفير مجموعة من العدد والأدوات من أجل القدرة على تقديم تلك الخدمة وتلك العدد والأدوات لا يتمكن أي شخص من استخدامها سوى الشخص الذي تعلم على استخدام تلك العدد من قبل، لذلك عن القيام بتشطيب أي مكان ودهانه بالكامل فيلجأ العملاء مباشرة إلى الاستعانة بفني دهانات الكويت لأنه يمتلك المهارات والقدرات والإمكانيات التي تساعده على تقديم تلك الخدمة للعملاء بأفضل شكل ممكن لها، كما أن هذا الشخص يمتلك الكثير من العدد والأدوات والأجهزة المتقدمة التي تساعده على ذلك، بخلاف الخبرات الواسعة جدًا التي يمتلكها هذا الشخص داخل هذا المجال أفضل فني دهانات الكويت يوجد أكثر من شخص يعمل فني دهانات في أي مكان سواء داخل دولة الكويت أو خارجها، ولكن كل شخص من الذين يقدمون هذه الخدمات للعملاء يقدم تلك الخدمة بشكل وأسلوب خاص به ومن الوارد أن يكون هذا الأسلوب غير متوافق مع طلبات ورغبات وأماني العملاء فيما يرغبون في القيام بتنفيذه داخل أي مكان يمتلكونه، لذلك يعتبر فني دهانات الكويت من أفضل الأشخاص الذين يتمكنوا من توفير تلك الخدمة للعملاء نظرًا لكمية المهارات العديدة التي يمتلكها هذا الشخص بشكل عام، كما أن لديه القدرة على القيام بتنفيذ جميع الديكورات والتصميمات العالمية التي يتمنى أي عميل القيام بتنفيذها داخل المكان الذي يخصه أيًا كان نوع هذا المكان ومهما كان نوع النشاط الذي يتم ممارسته داخل هذا المكان بشكل عام الخدمات التي يعرضها فني دهانات الكويت على عملائه يتمكن صباغ الكويت من عرض العديد من الخدمات المختلفة على جميع عملائه في كل مكان، حيث أن تلك الخدمات هي وسيلة التواصل بين الفني وبين العملاء،
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    tarkib_waraq_judran: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                تركيب ورق جدران - فني تركيب ورق جدران - معلم تركيب ورق جدران في الكويت - ورق جدران الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                تستخدم شركة تركيب ورق جدران الكويت افضل ورق الجدران من أفضل المحلات التجارية ومنها ورق جدران الفينيل بأنواعه وورق جدران معدني وآخر من النسيج العشبي وأوراق جدران ثلاثية الأبعاد بأشكال مختلفةيقدم معلم تركيب تركيب ورق جدران الكويت كافة خدمات تشطيبات ورق الجدران والدهانات مقابل أسعار مناسبة للجميع، بجانب أنه يوفر خصومات وعروض فعالة على خدمات تشطيبات كاملة لجدران الفلل والمنازليمكنكم الآن طلب خدمات تركيب ورق جدران رخيص الكويت من منازلكم عن طريق التواصل على ارقام الشركة المتاحة على الموقع على مدار الأسبوع وعلى الفور يقوم احد موظفين خدمة العملاء بالرد عليكم وأخذ كافة طلبات تركيب ورق جدران او خدمات الدهانات. ويتم تحديد موعد مناسب حتى يتمكن صباغ معلم تركيب ورق جدران بالكويت من القدوم إلى منازلكم وأخذ كافة مقاسات الجدران والأسقف لكافة الغرف. وكذلك يقوم صباغ الكويت بعرض تصاميم الدهانات وتصاميم اشكال اوراق الجدران على العملاء لاختيار الأشكال المفضلة لديهم على حسب أذواقهم وبعد ذلك يقوم الفني أو الصباغ بتوفير جميع المستلزمات من الادوات والدهانات واوراق الحائط ومعدات التركيب ويبدأ فورا في إنجاز المهام.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    asbagh_abwab_khashabia: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ ابواب خشب - صباغ ابواب خشب في الكويت - صباغ ممتاز ابواب خشب - صباغ فني ابواب خشب في الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغة الأبواب الخشبية مهمة للحفاظ على جمال المنزل. الأبواب الخشبية، مثل تلك من اللكر أو الناري الرمادي، تتعرض للعوامل الجوية. هذا يؤثر على مظهرها وجودتها. لذلك، الصباغة المحترفة ضرورية للحفاظ على جمال الأبواب. التلوين المنتظم يحمي الأبواب من التآكل. ويحافظ على شكلها الأنيق. الدهان الجيد يوفر حماية إضافية للخشب من الرطوبة والحشرات. ويحمي من أشعة الشمس الضارة. صباغة الأبواب الخشبية تساهم في تجديد مظهر الأبواب القديمة. يمكن إعادة صباغة الأبواب بألوان جذابة. هذا يضفي لمسة جمالية للمنزل ويحسن من المظهر العام. الأبواب الخشبية الملونة تضيف لمسة من الأناقة للمنزل. تعكس ذوقًا رفيعًا في الديكورات الداخلية. صباغة الأبواب الخشبية تعتبر استثمارًا مهمًا للحفاظ على جودة المنزل. تعزيز القيمة الجمالية للأبواب سواء كانت داخلية أو خارجية. عند البحث عن صباغ أبواب خشب ماهر في الكويت، من المهم التركيز على الخبرة والمهارة. الصباغ المحترف لديه معرفة واسعة بكل أنواع الدهانات وتقنيات رش طلاء الخشب بشكل احترافي. كما يتميز بالدقة والعناية لضمان نتائج مثالية
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    muealim_jabs_burd: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                معلم جبس بورد الكويت - جبس بورد -فني جبس بورد - جبس بورد الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                معلم جبس بورد الكويت للحصول علي قواطع وديكورات احترافية في اعمال الجبس تحويل منزلك الي تحفة فنية مع افضل فني ديكورات الجبسون بورد بالكويت افضل التصميمات المتغيرة والتي يمكنك وضعها في اي موضع للتناسب مع المكان المراد العمل عليه ابو مصطفى لاعمال الديكور والجبس هو خيارك الأمثل للحصول علي أحدث تقنيات وديكورات الجبس بورد الإحترافية فنيين يمكنهم تحويل منزلك الي تحفه فنيه للتميز بين الأقارب والأصحاب يمكنك الأن التواصل مع الفني لطلب معلم جبس بورد شاطر فنيين خبرة مسؤولون عن تركيب ألواح الجبس في مجموعة متنوعة من الأماكن ، بما في ذلك المباني السكنية والتجارية والصناعية. يضمنون تثبيت ألواح جبس بورد المنزل بشكل صحيح وآمن ، وفقًا لقوانين ولوائح البناء. تقديم افضل الحلول الهندسية في كل ما يخص الجبس بورد وصيانة الديكورات التي تحتاج الي تعديل او صيانة تجهيز المنزل باحدث صياحات الديكورات التي تظهر الزوق الرفيع لاصحاب المنزل يمكنك الحصول على المكان المثالي في الحداثة لمنزلك, مع افضل معلم جبس بورد بالكويت اتصل بنا الآن لتبدأ في مشروعك فريقنا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في إنجاز المهمة بالشكل الصحيح.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
};

zones.forEach(location => {
    if (location.href) {
        const _id = location.href.replace(/-/g, '_');
        linksData[_id] = generateLinkData(location.title);
    }
});

// Main component
const LinksContent = ({ id }: { id: string }) => {
    const _id = id.replace(/-/g, '_');

    const content = linksData[_id]; // Access the content based on ID
    const image = ImagesData[_id]

    console.log(_id);
    console.log(content);


    return (
        <Stack spacing={2} alignItems="center">
            {image ?? image}
            {!!content ? content : <Typography>Content not available.</Typography>}
            <Information />
        </Stack>
    );
};

export default LinksContent;

const ImageStyle = ({ src, alt }: { src: string | StaticImport, alt: string }) => {
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
            loading='lazy'
            alt={alt}
            // Importing an image will
            // automatically set the width and height
            src={src}
            // sizes="100vw"
            // Make the image display full width
            style={{
                width: '100%',
                height: 'auto',
                // maxHeight: "400px",
            }}
        />
    </div>
}

const de = {
    sabaagh_alsaalimia: <ImageStyle src={sabaagh_alsaalimia} alt={"صباغ السالمية"} />,
    sabaagh_sabah_alsaalim: <ImageStyle src={sabaagh_sabah_alsaalim} alt={"صباغ صباح السالم"} />,
    sabaagh_hawalli: <ImageStyle src={sabaagh_hawalli} alt={"صباغ حولي"} />,
    sabaagh_jaber_alahmad: <ImageStyle src={sabaagh_jaber_alahmad} alt={"صباغ جابر الاحمد"} />,
    sabaagh_khaitan: <ImageStyle src={sabaagh_khaitan} alt={"صباغ خيطان"} />,
    sabaagh_alfarwaniyah: <ImageStyle src={sabaagh_alfarwaniyah} alt={"صباغ الفروانية"} />,
    sabaagh_aljabriya: <ImageStyle src={sabaagh_aljabriya} alt={"صباغ الجابرية"} />,
    sabaagh_alshaab: <ImageStyle src={sabaagh_alshaab} alt={"صباغ الشعب"} />,
    sabaagh_bayan: <ImageStyle src={sabaagh_bayan} alt={"صباغ بيان"} />,
    sabaagh_janoub_alsura: <ImageStyle src={sabaagh_janoub_alsura} alt={"صباغ جنوب السرة"} />,
    sabaagh_mubarak: <ImageStyle src={sabaagh_mubarak} alt={"صباغ مبارك"} />,
    sabaagh_mishref: <ImageStyle src={sabaagh_mishref} alt={"صباغ مشرف"} />,
    sabaagh_alzahraa: <ImageStyle src={sabaagh_alzahraa} alt={"صباغ الزهراء"} />,
    sabaagh_alsiddiq: <ImageStyle src={sabaagh_alsiddiq} alt={"صباغ الصديق"} />,
    sabaagh_hateen: <ImageStyle src={sabaagh_hateen} alt={"صباغ حطين"} />,
    sabaagh_salwa: <ImageStyle src={sabaagh_salwa} alt={"صباغ سلوي"} />,
    sabaagh_alshuhadaa: <ImageStyle src={sabaagh_alshuhadaa} alt={"صباغ الشهداء"} />,
    sabaagh_al_salam: <ImageStyle src={sabaagh_al_salam} alt={"صباغ السلام"} />,
    sabaagh_al_masila: <ImageStyle src={sabaagh_al_masila} alt={"صباغ المسلية"} />,
    sabaagh_almasayel: <ImageStyle src={sabaagh_almasayel} alt={"صباغ المسايل"} />,
    sabaagh_abu_alhasania: <ImageStyle src={sabaagh_abu_alhasania} alt={"صباغ ابو الحصاني"} />,
    sabaagh_subhan: <ImageStyle src={sabaagh_subhan} alt={"صباغ صبحان"} />,
    sabaagh_abu_ftaira: <ImageStyle src={sabaagh_abu_ftaira} alt={"صباغ ابو فطيرة"} />,
    sabaagh_al_fintas: <ImageStyle src={sabaagh_al_fintas} alt={"صباغ الفينطيس"} />,
    sabaagh_mubarak_al_kabeer: <ImageStyle src={sabaagh_mubarak_al_kabeer} alt={"صباغ مبارك الكبير"} />,
    sabaagh_alaqeela: <ImageStyle src={sabaagh_alaqeela} alt={"صباغ العقيلة"} />,
    sabaagh_alfntas: <ImageStyle src={sabaagh_alfntas} alt={"صباغ الفنطاس"} />,
    sabaagh_alraqa: <ImageStyle src={sabaagh_alraqa} alt={"صباغ الرقة"} />,
    sabaagh_abu_halifa: <ImageStyle src={sabaagh_abu_halifa} alt={"صباغ ابو حليفة"} />,
    sabaagh_alsabahiya: <ImageStyle src={sabaagh_alsabahiya} alt={"صباغ الصباحية"} />,
    sabaagh_almanqaf: <ImageStyle src={sabaagh_almanqaf} alt={"صباغ المنقف"} />,
    sabaagh_almahboula: <ImageStyle src={sabaagh_almahboula} alt={"صباغ المهبولة"} />,
    sabaagh_al_ahmadi: <ImageStyle src={sabaagh_al_ahmadi} alt={"صباغ الاحمدي"} />,
    sabaagh_al_khiran: <ImageStyle src={sabaagh_al_khiran} alt={"صباغ الخيران"} />,
    sabaagh_alfhahil: <ImageStyle src={sabaagh_alfhahil} alt={"صباغ الفحيحيل"} />,
    sabaagh_alwafra: <ImageStyle src={sabaagh_alwafra} alt={"صباغ الوفرة"} />,
    sabaagh_jaber_alali: <ImageStyle src={sabaagh_jaber_alali} alt={"صباغ جابر العلي"} />,
    sabaagh_fahad_alahmad: <ImageStyle src={sabaagh_fahad_alahmad} alt={"صباغ فهد الاحمد"} />,
    sabaagh_aldaiya: <ImageStyle src={sabaagh_aldaiya} alt={"صباغ الدعية"} />,
    sabaagh_aldasma: <ImageStyle src={sabaagh_aldasma} alt={"صباغ الدسمة"} />,
    sabaagh_aldohah: <ImageStyle src={sabaagh_aldohah} alt={"صباغ الدوحة"} />,
    sabaagh_alkhaldiya: <ImageStyle src={sabaagh_alkhaldiya} alt={"صباغ الخالدية"} />,
    sabaagh_alrawdah: <ImageStyle src={sabaagh_alrawdah} alt={"صباغ الروضة"} />,
    sabaagh_alrai: <ImageStyle src={sabaagh_alrai} alt={"صباغ الري"} />,
    sabaagh_alshuwaykh: <ImageStyle src={sabaagh_alshuwaykh} alt={"صباغ الشويخ"} />,
    sabaagh_asharq: <ImageStyle src={sabaagh_asharq} alt={"صباغ الشرق"} />,
    sabaagh_alshamiya: <ImageStyle src={sabaagh_alshamiya} alt={"صباغ الشامية"} />,
    sabaagh_alsurra: <ImageStyle src={sabaagh_alsurra} alt={"صباغ السرة"} />,
    sabaagh_alqadesiya: <ImageStyle src={sabaagh_alqadesiya} alt={"صباغ القادسية"} />,
    sabaagh_alqurawan: <ImageStyle src={sabaagh_alqurawan} alt={"صباغ القروان"} />,
    sabaagh_alfaihaa: <ImageStyle src={sabaagh_alfaihaa} alt={"صباغ الفيحاء"} />,
    sabaagh_aladiliya: <ImageStyle src={sabaagh_aladiliya} alt={"صباغ العديلية"} />,
    sabaagh_alsulaybikhat: <ImageStyle src={sabaagh_alsulaybikhat} alt={"صباغ الصليبخات"} />,
    sabaagh_kaifan: <ImageStyle src={sabaagh_kaifan} alt={"صباغ كيفان"} />,
    sabaagh_qurtoba: <ImageStyle src={sabaagh_qurtoba} alt={"صباغ قرطبة"} />,
    sabaagh_ghranata: <ImageStyle src={sabaagh_ghranata} alt={"صباغ غرناطة"} />,
    sabaagh_abdullah_al_salim: <ImageStyle src={sabaagh_abdullah_al_salim} alt={"صباغ ضاحية عبدالله السالم"} />,
    sabaagh_dasman: <ImageStyle src={sabaagh_dasman} alt={"صباغ دسمان"} />,
    sabaagh_bneid_alqar: <ImageStyle src={sabaagh_bneid_alqar} alt={"صباغ بنيد القار"} />,
    sabaagh_alnahda: <ImageStyle src={sabaagh_alnahda} alt={"صباغ النهضة"} />,
    sabaagh_alnuzha: <ImageStyle src={sabaagh_alnuzha} alt={"صباغ النزهة"} />,
    sabaagh_almansouriya: <ImageStyle src={sabaagh_almansouriya} alt={"صباغ المنصورية"} />,
    sabaagh_mantiqa_al_ashira: <ImageStyle src={sabaagh_mantiqa_al_ashira} alt={"صباغ المنطقة العاشرة"} />,
    sabaagh_alandalus: <ImageStyle src={sabaagh_alandalus} alt={"صباغ الاندلس"} />,
    sabaagh_alqrean: <ImageStyle src={sabaagh_alqrean} alt={"صباغ القرين"} />,
    sabaagh_alkswor: <ImageStyle src={sabaagh_alkswor} alt={"صباغ القصور"} />,
    sabaagh_aladaan: <ImageStyle src={sabaagh_aladaan} alt={"صباغ العدان"} />
}

const ImagesData: { [key: string]: React.ReactNode } = {
    aspagh: <ImageStyle src={aspagh} alt='اصباغ الكويت' />,
    sabaagh_rakhis: <ImageStyle src={sabaagh_rakhis} alt="اصباغ الكويت" />,
    sabaagh_shatir: <ImageStyle src={sabaagh_shatir} alt="صباغ شاطر - صباغ ممتاز - صباغ الكويت" />,
    muealim_sabagh: <ImageStyle src={muealim_sabagh} alt="معلم صباغ" />,
    sabaagh_alkuayt: <ImageStyle src={sabaagh_alkuayt} alt="صباغ الكويت" />,
    aisbgh_alkuayt: <ImageStyle src={aisbgh_alkuayt} alt="اصباغ الكويت" />,
    sabaagh_shatir_bi_alkuayt: <ImageStyle src={sabaagh_shatir_bi_alkuayt} alt="صباغ شاطر بالكويت" />,
    muealim_sabaagh_bi_alkuayt: <ImageStyle src={muealim_sabaagh_bi_alkuayt} alt="معلم صباغ الكويت" />,
    faniy_sabagh: <ImageStyle src={faniy_sabagh} alt="فني صباغ - صباغ الكويت" />,
    sabaagh_mumtaz_bi_alkuayt: <ImageStyle src={sabaagh_mumtaz_bi_alkuayt} alt="صباغ ممتاز الكويت - خدمات دهان احترافية" />,
    dikurat_sabagh_lilkuayt: <ImageStyle src={dikurat_sabagh_lilkuayt} alt="ديكورات الكويت - صباغ ديكورات - صباغ ممتاز ديكورات" />,
    manazil_sabaagh_bi_alkuayt: <ImageStyle src={manazil_sabaagh_bi_alkuayt} alt="صباغ منازل الكويت" />,
    shaqaq_sabaagh_bi_alkuayt: <ImageStyle src={shaqaq_sabaagh_bi_alkuayt} alt="صباغ شقق بالكويت - صباغ شقق - صباغ شقق شاطر بالكويت - صباغ شقق ممتاز بالكويت" />,
    sabaagh_buyut_aitfal: <ImageStyle src={sabaagh_buyut_aitfal} alt="صباغ بيوت أطفال" />,
    sabaagh_rusumat_aitfal: <ImageStyle src={sabaagh_rusumat_aitfal} alt="صباغ رسومات اطفال صباغ ممتاز رسومات اطفال - صباغ شاطر رسومات اطفال - صباغ فني رسومات اطفال" />,
    sabaagh_rakhisat_bi_alkuayt: <ImageStyle src={sabaagh_rakhisat_bi_alkuayt} alt="صباغ رخيص بالكويت - صباغ بالكويت رخيص - اصباغ رخيصة - فني صباغ رخيص" />,
    dihanat_alkuayt: <ImageStyle src={dihanat_alkuayt} alt="صباغ فني دهانات - فني دهانات بالكويت - صباغ فني بالكويت - افضل فني صباغ دهانات بالكويت" />,
    tarkib_waraq_judran: <ImageStyle src={tarkib_waraq_judran} alt="تركيب ورق جدران - فني تركيب ورق جدران - معلم تركيب ورق جدران في الكويت - ورق جدران الكويت" />,
    asbagh_abwab_khashabia: <ImageStyle src={asbagh_abwab_khashabia} alt="صباغ ابواب خشب - صباغ ابواب خشب في الكويت - صباغ ممتاز ابواب خشب - صباغ فني ابواب خشب في الكويت" />,
    muealim_jabs_burd: <ImageStyle src={muealim_jabs_burd} alt="معلم جبس بورد الكويت - جبس بورد -فني جبس بورد - جبس بورد الكويت" />,
    ...de
}




