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


import Information from './Information';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Data for different IDs
const linksData: { [key: string]: React.ReactNode } = {
    aspagh: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                أصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_rakhis: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                أصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_shatir: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                أصباغ الكويت
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
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                أصباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                صباغ الكويت يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز صباغ الكويت بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    sabaagh_shatir_bi_alkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    معلم صباغ محترف لخدمات الطلاء المنزلي
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    هل تتساءل عن السر وراء جمال جدران المنزل المزهر بالألوان الجذابة؟ الإجابة هي وجود معلم صباغ محترف وراء ذلك. هذا المعلم يساعدك في تحويل جدرانك إلى لوحة فنية رائعة. إذا كنت ترغب في إعطاء منزلك أو مكتبك لمسة جديدة ومتميزة، فلا تتردد في الاستعانة بخدمات معلم صباغ محترف. سنقدم لك أفضل الحلول للصباغة بأحدث التقنيات والألوان الزاهية. دع جدرانك تعبر عن ذوقك الرفيع بخبرتنا في الدهانات والصباغة. سواء كنت تريد تجديد منزلك أو مكتبك، معلم صباغ محترف هو الحل الأمثل. نقدم خدمات صباغة متكاملة تناسب جميع الأذواق والميزانيات. اعتمد علينا لتحويل أحلامك إلى واقع بلمسة فنية رائعة. لا تتردد في التواصل معنا لاستشارة معلم صباغ محترف للقيام بعملية الصباغة بشكل احترافي. سنيساعدك في اختيار الألوان المناسبة وتقديم أفضل الحلول لإنجاز المشروع بكفاءة عالية.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    أهم النقاط معلم صباغ
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    خدمات صباغة احترافية باستخدام أحدث التقنيات والألوان إضفاء لمسة أنيقة على جدران المنزل أو الشقة أو الفيلا خبرة وإتقان في تنفيذ أعمال الصباغة المختلفة التعامل مع مختلف أنواع الأسطح والجدران تقديم نصائح للاختيار الأمثل للطلاء والألوان
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    لماذا تحتاج إلى معلم صباغ محترف؟
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    صباغة الجدران ليست مجرد طلاء بسيط. تحتاج إلى مهارات وخبرة خاصة. معلم صباغ محترف يقدم خدمات دهان متميزة للحصول على نتائج مثالية. هؤلاء الفنيون يعرفون كيف يختارون ألوان الجدران المناسبة. كما يعرفون كيف يعدون السطوح قبل البدء بالعمل. ويستخدمون تقنيات الصباغة الصحيحة للحصول على إنهاء متجانس. باستعانة بـعامل صباغ محترف، ستضمن جودة عالية في صبغ الجدران. هذا يخلق لك الوقت والجهد. ويضمن أن الطلاء يبقى جديدًا ومتماسكًا لسنوات. لإعطاء منزلك لمسة جديدة وفائقة الجمال، اختر فني صباغ محترف. هذا هو الخيار الأفضل. اختيار معلم دهان محترف مهم جدًا. هذا يضمن إنجاز مهمة الصباغة بطريقة مثالية. وسيضمن نتائج مرضية تستمر لفترة طويلة.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    اختيار معلم صباغ الجدران الصحيح
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    عند البحث عن معلم صباغ محترف، من المهم معرفة خبرته. يجب أن يكون لديه تدريب جيد وسجل إنجازات ممتازة. المعرفة بال ألوان والتقنيات مهمة لاختيار صباغ لمنزلك أو شققت. من المهم التحقق من سمعة معلم الصباغة وخبرته. يمكنك رؤية أعماله السابقة أو استشارة عملاء سابقين. هذا يساعد في الحصول على خدمات صباغة عالية الجودة. معلم الصباغ المحترف يجب أن يعرف التقنيات الحديثة والدهانات المتاحة. هذا يساعد في تقديم نصائح قيمة للعميل. اختيار الصباغ المناسب يضمن نجاح مشروع الطلاء.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    إعداد السطح قبل البدء بالصباغة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    قبل البدء بالصباغة، يجب إعداد السطح جيدًا. هذه الخطوة أساسية لنتيجة متميزة. تبدأ بإزالة أي دهانات قديمة أو متهالكة من الجدران. بعد ذلك، يتم سد الشقوق والثقوب بالمواد المناسبة. ثم، يتم تنظيف الجدران جيدًا من الأوساخ أو البقايا. هذه المرحلة مهمة لنجاح الصباغة. معلم الصباغ المحترف يضمن إتمام الخطوات بالشكل المطلوب. هذا يضمن نتيجة نهائية متميزة وطويلة الأمد.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    أهمية اختيار الألوان المناسبة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    لا يقتصر دور معلم دهان على وضع الطلاء على جدران لون فقط. اختيار الألوان المناسبة مهم جدًا ليعكس ذوقك وتتناسب مع ديكور المكان. صبغ جدران المحترف يقدم نصائح حول الألوان التي تضفي جمالًا وراحة على المكان. الألوان لها تأثير كبير على مزاجك وشعورك بالراحة. اللون الأخضر يُشعر بالاسترخاء والهدوء. أما الألوان الدافئة مثل الأحمر والبرتقالي فتضفي حيوية ونشاط. من المهم استشارة معلم دهان محترف لاختيار اللون المناسب. اختيار الألوان قد يكون صعبًا للبعض. يأتي دور معلم صباغ الخبير في هذا الوقت. سيساعدك على اختيار الألوان المثالية التي تمنح المكان المظهر المرغوب.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    تقنيات الصباغة المختلفة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    تجديد منزلك أو شقتك يحتاج إلى صباغة مهمة. الصباغة تعطي لمسة نهائية رائعة وتغير من ديكور المكان بشكل كبير. معلم صباغ محترف يستخدم تقنيات مختلفة لإنجاز هذه المهمة بشكل جيد. الرش بالبخاخ هو تقنية شائعة في الصباغة. هذه الطريقة توفر طلاء سلس ومتساوٍ على السطوح الكبيرة مثل الجدران والأسقف. أما الفرش اليدوية، فهي تمنح مظهرًا أكثر تفاصيلاً وإبداعًا، خاصةً على المساحات الصغيرة كالأبواب والنوافذ وزوايا الغرف. فني صباغ ماهر قد يستخدم منازل الطلاء الكهربائية للحصول على نتائج متميزة وسريعة، خاصةً في المساحات الكبيرة. من المهم اختيار التقنية المناسبة للحصول على أفضل النتائج، بناءً على نوع السطح والتأثير المطلوب.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    المعدات والأدوات المستخدمة في عملية الصباغة
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    لنجاح عملية الصباغة، يحتاج معلم الصباغة إلى أدوات متخصصة. من الفرش والبخاخات إلى السقالات والمناشير الكهربائية، كل أداة مهمة. هذا يضمن جودة النتائج النهائية. الفرش المتخصصة تساعد على تطبيق الدهانات بشكل منتظم. البخاخات الكهربائية توزيع الطلاء بدقة. السقالات والمناشير الكهربائية مهمة لإعداد السطح. قد تحتاج الأدوات الأخرى مثل أدوات الحادة لإزالة الطبقات القديمة. والأجهزة الكهربائية لخلط الألوان بدقة. هذه الأدوات تضمن نتائج صباغة متميزة.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    معلم صباغ للمنازل والشقق والفلل
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    إذا كنت ترغب في تجديد منزلك أو شقتك أو فيلتك، لدينا فريق من معلمي الصباغ المحترفين. سيكونون قادرون على إنجاز المهمة بكفاءة. نحن نضمن لك نتائج مذهلة بلا فوضى أو إزعاج. فريقنا من معلمي الصباغ الماهرين يرعى كل التفاصيل بحرفية. من اختيار الألوان المناسبة إلى إعداد السطح والتطبيق الدقيق للطلاء. نقدم لك خدمات صباغة متكاملة وعالية الجودة، سواء كنت ترغب في تغيير ألوان الحوائط أو إضفاء لمسة جديدة. لا تقلق بشأن الفوضى أو الإزعاج. فريقنا من فني الصباغ يتعامل مع كل شيء بمهنية وحرفية. هذا يضمن لك نتائج استثنائية بلا إزعاج. استمتع بجمالية منزلك الجديد بسهولة!
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    أسعار خدمات معلم صباغ محترف
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    عند البحث عن خدمات طلاء للمنزل، السعر مهم جدًا. في شركتنا، نقدم أسعار تنافسية لخدمات معلم صباغ محترف. هذا يضمن لك أفضل قيمة مقابل المال. سواء كانت الغرفة الواحدة أو المنزل بأكمله، نقدم لك عرض شامل. يشمل هذا العرض جميع التكاليف للمواد والعمالة والمعدات. نؤمن بأن الجودة مهمة جدًا. لذلك، نقدم لك أفضل خدمة صباغة بأسعار معقولة. فريقنا من معلمي الصباغة المحترفين لديهم الخبرة والمهارة اللازمة. لا تتردد في طلب عرض سعر مجاني مننا. سوف نُفند لك تفاصيل التكاليف وخطوات العمل. نحن نريد مساعدتك في إنجاز خدمات الصباغة بكل سهولة وبالجودة العالية.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    نصائح لاختيار معلم صباغ موثوق
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    عند البحث عن معلم صباغ محترف، من المهم التأكد من خبرته. استشعر من أصدقائك أو سأل عن توصياتهم لمعلمي الصباغة السابقين. كما يجب البحث عن تقييمات العملاء السابقين. تأكد من أن فني الصباغة يمتلك التراخيص اللازمة. هذا مهم لضمان خدمات آمنة. لا تتردد في طرح أسئلة قبل البدء في العمل. باختيار معلم صباغ موثوق، ستضمن نتائج جيدة. القيام بالبحث الجيد يساعد في اتخاذ القرار الصحيح. هذا يضمن نجاح المشروع.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    العوامل التي تؤثر على عمر الطلاء
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    دور معلم الصباغة يمتد أكثر من مجرد وضع الطلاء على الجدران. هناك عوامل رئيسية تحدد عمر الطلاء. معلم الصباغ المحترف يجب أن يأخذها في الاعتبار. جودة المواد مهمة جدًا. المواد الجيدة تدوم أطول من المواد الرخيصة. كما أن الطريقة الصحيحة للتطبيق مهمة لضمان تماسك الطلاء. الصيانة المنتظمة مهمة أيضًا. التنظيف الدوري يحافظ على جودة الطلاء. معلم الصباغ يوجه العملاء بشأن أفضل الممارسات. الحرارة والرطوبة تؤثر على عمر الطلاء. ينصح باختيار المواد المناسبة للظروف المناخية. في النهاية، معلم الصباغ يمكنه إرشاد العملاء لتحافظون على طلاء الجدران لفترة أطول. يوصي باختيار المواد الجيدة وتطبيقها بشكل صحيح.
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                    فني صباغ - صباغ الكويت
                </Typography>
                <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                    يعتبر صباغ فني في منطقة الكويت هو الصباغ الاول في الوطن العربي لجميع اصباغ دولة الكويت اتصل الان علي صباغ السالمية واحصل علي خصم 30%علي جميع انواع الاصباغ
                </Typography>
                <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ ممتاز الكويت - خدمات دهان احترافية
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                نحن في صباغ ممتاز الكويت، فخورون بخدمات الدهان التي نقدمها. فريقنا يوفر خدمات عالية الجودة بأسعار مناسبة. نحن نستخدم التقنيات الحديثة وأصباغ ممتازة لتزويدكم بمظاهر جميلة وجذابة. إذا كنتم بحاجة لدهان لمنزلكم أو مشروعكم التجاري، اعتمدوا على خبرتنا. تواصلوا معنا اليوم لخدمات دهان مميزة في الكويت. خدمات صباغ ممتاز الكويت تحتوي على العديد من خدمات الدهان. تقدم لجميع أنواع المباني والمساحات خدماتنا. نحن نختص في تزيين المنازل والشقق وأماكن العمل مثل المحال والمصانع والورش. نقدم الأفضل بفضل سنوات الخبرة التي اكتسبناها. إننا دائما نحرص على تطوير مهاراتنا ومتابعة أحدث التقنيات. ذلك يساعدنا على تحقيق نتائج جميلةاختيار صباغ الكويت مرتبط بجودتنا العالية وكفاءتنا. نحن ندعم دهاناتنا ذات الجودة والأصباغ المثالية في صباغ ممتاز الكويت، نقدم مجموعة واسعة من أنواع الدهانات. تلبي احتياجات جميع عملائنا. الأنواع تتضمن المائية والزيتية والأكريليك والإيبوكسي والبلاستيكية. نحن نستخدم منتجات عالية الجودة لأفضل النتائج. تشكيلتنا من الأصباغ في الكويت هي الأوسع والأكثر تنوعًا. تم تصميمها لتناسب جميع الأذواق والغرض، بما يشمل منازل وشقق ومباني تجارية ومصانع وورش. أصباغنا تتميز بالجودة والمتانة والتنوع. إذا كنت تبحث عن دهان مائي للحوائط أو زيتي للأرضيات، صباغ ممتاز الكويت هو الخيار المثالي. تصل تشكيلتنا بين الجودة والأداء لنضمن لك النتائج المطلوبة. نحن نقدم خدمات دهان احترافية بفضل الاستثمار بأفضل المنتجات والتقنيات. صباغ ممتاز الكويت هو اختيارك الأمثل لأنواع الدهانات الفائقة في الجودة.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    dikurat_sabagh_lilkuayt: (
        <Stack alignItems="center" spacing={2}>
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
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
            <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ شقق بالكويت - صباغ شقق - صباغ شقق شاطر بالكويت - صباغ شقق ممتاز بالكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يعتبر صباغ شقق في الكويت من أفضل الصباغين التي تساعدك على اختيار مجموعة متنوعة من التصميمات العصرية التي تساعد بدورها على عمل مجموعة متنوعة من التشطيبات التي تضاهي أفضل الديكورات العالمية، يتم عمل مجموعة ديكورات واجهة رائعة تجعل الجميع يتعجب من جمالها، كما يتم الاهتمام بتنسيق الـ بألوان بشكل كبير، يتم توفير مجموعة من التصميمات الجميلة لجميع الديكورات الداخلية في المنازل، نهتم بعمل كل ما هو جديد للمنازل، يتم الاتصال بنا ومن ثم التعرف على أفضل العروض والتصميمات. سيتم الاتفاق داخل بيتك بعد الاطلاع على الكتالوجات والاختيار الأنسب من حيث المساحة والتكاليف، حيث أن هناك مجموعة كبيرة من التصميمات والديكورات ليتم الاختيار من بينها، يتم تحديد الالوان على حسب المكان والعفش الموجود به ليتم عمل تناسق كلي في المكان، نهتم بعمل كل ما هو جديد لينال رضاء العملاء.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
    ),
    // manazil_sabaagh_bi_alkuayt: (
    //     <Stack alignItems="center" spacing={2}>
    //         <Image src={dikurat_sabagh_lilkuayt} alt="" objectFit="contain" height={400} />

    //         <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">

    //         </Typography>
    //         <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>

    //         </Typography>
    //         <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
    //     </Stack>
    // ),
};

// Main component
const LinksContent = ({ id }: { id: string }) => {
    const content = linksData[id]; // Access the content based on ID
    const image = ImagesData[id]
    console.log("content", content)
    console.log("content", image)


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


const ImagesData: { [key: string]: React.ReactNode } = {
    aspagh: <ImageStyle src={aspagh} alt='أصباغ الكويت' />,
    sabaagh_rakhis: <ImageStyle src={sabaagh_rakhis} alt="أصباغ الكويت" />,
    sabaagh_shatir: <ImageStyle src={sabaagh_shatir} alt="صباغ شاطر - صباغ ممتاز - صباغ الكويت" />,
    muealim_sabagh: <ImageStyle src={muealim_sabagh} alt="معلم صباغ" />,
    sabaagh_alkuayt: <ImageStyle src={sabaagh_alkuayt} alt="صباغ الكويت" />,
    aisbgh_alkuayt: <ImageStyle src={aisbgh_alkuayt} alt="أصباغ الكويت" />,
    sabaagh_shatir_bi_alkuayt: <ImageStyle src={sabaagh_shatir_bi_alkuayt} alt="صباغ شاطر بالكويت" />,
    muealim_sabaagh_bi_alkuayt: <ImageStyle src={muealim_sabaagh_bi_alkuayt} alt="معلم صباغ الكويت" />,
    faniy_sabagh: <ImageStyle src={faniy_sabagh} alt="فني صباغ - صباغ الكويت" />,
    sabaagh_mumtaz_bi_alkuayt: <ImageStyle src={sabaagh_mumtaz_bi_alkuayt} alt="صباغ ممتاز الكويت - خدمات دهان احترافية" />,
    dikurat_sabagh_lilkuayt: <ImageStyle src={dikurat_sabagh_lilkuayt} alt="ديكورات الكويت - صباغ ديكورات - صباغ ممتاز ديكورات" />,
    manazil_sabaagh_bi_alkuayt: <ImageStyle src={manazil_sabaagh_bi_alkuayt} alt="صباغ منازل الكويت" />,
    shaqaq_sabaagh_bi_alkuayt: <ImageStyle src={shaqaq_sabaagh_bi_alkuayt} alt="صباغ شقق بالكويت - صباغ شقق - صباغ شقق شاطر بالكويت - صباغ شقق ممتاز بالكويت" />,
    // shaqaq_sabaagh_bi_alkuayt: <ImageStyle src={shaqaq_sabaagh_bi_alkuayt} alt="" />,
}
