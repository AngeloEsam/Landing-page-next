'use client';

import { motion } from "framer-motion";

export default function SafetyZoneSection4() {
    const clientBenefits = [
        {
            title: "الفرصة المضافة والممنوحة",
            description:
                "تحسين تجربة العميل - العملاء الجدد يقوم مزود الخدمة بقبولهم في حالة لم يتم الالتزام بموعد الخدمة المتفق عليها.",
            image: "/images/gem1.jpg",
        },
        {
            title: "التحليل والنتائج",
            description:
                "التقارير اليومية التفصيلية - اللوحات التفاعلية خلال بحث العميل، عدم توفر بيانات أو تأخير، تنبيه موظف المتابعة فورًا.",
            image: "/images/gem2.png",
        },
        {
            title: "إدارة وتقديم الخدمات بكفاءة عالية",
            description:
                "إرسال طلبات العملاء للجهات المختصة - استقبال الطلبات عبر النظام الإلكتروني، متابعة المعاملات، تقارير الأداء الدورية.",
            image: "/images/gem3.jpg",
        },
        {
            title: "إدارة وتقديم الخدمات بكفاءة عالية",
            description:
                "إرسال طلبات العملاء للجهات المختصة - استقبال الطلبات عبر النظام الإلكتروني، متابعة المعاملات، تقارير الأداء الدورية.",
            image: "/images/gem4.png",
        },
    ];

    const providerBenefits = [
        {
            title: "الفرصة المضافة",
            description:
                "تحسين تجربة العميل والوصول إلى شريحة أوسع من العملاء.",
            image: "/images/gem5.jpg",
        },
        {
            title: "التحليل والنتائج",
            description:
                "التقارير اليومية التفصيلية - اللوحات التفاعلية خلال بحث العميل، تنبيه موظف المتابعة فورًا.",
            image: "/images/gem6.png",
        },
        {
            title: "إدارة وتقديم الخدمات بكفاءة عالية",
            description:
                "إرسال طلبات العملاء للجهات المختصة - متابعة المعاملات وتقارير الأداء.",
            image: "/images/gem7.jpg",
        },
        {
            title: "إدارة وتقديم الخدمات بكفاءة عالية",
            description:
                "إرسال طلبات العملاء للجهات المختصة - متابعة المعاملات وتقارير الأداء.",
            image: "/images/gem8.png",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className=" py-20 px-6 text-right font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    مزايا التحول الإلكتروني في سَفتي زون
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    عقدك ساري؟ خدماتنا مجانية! <br />
                    لا تنتظر انتهاء عقدك، طوّر إدارتك اليوم. سجّل الآن واستخدم منصتنا
                    لإدارة عقد صيانـتك الحالي، تتبع البلاغات، واستقبال التنبيهات بكفاءة
                    أعلى. <br />
                    كل هذا مجاناً تماماً، دون أي تكاليف عليك، أو على مزود خدمتك الحالي.
                </motion.p>

                {/* مزايا العميل */}
                <motion.h3
                    className="text-2xl font-semibold text-[#C7A64E] mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    مزايا التحول الإلكتروني لأعمالك (للعميل)
                    <span className="text-sm text-gray-500">
                        {" "}
                        (هذه الخدمات مجانية على العميل)
                    </span>
                </motion.h3>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {clientBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* مزايا المزود */}
                <motion.h3
                    className="text-2xl font-semibold text-[#C7A64E] mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    مزايا التحول الإلكتروني لأعمالك (لمزود الخدمة)
                </motion.h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {providerBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
