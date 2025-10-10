import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";

function TradingPage() {
    const { t } = useTranslation();

    return (
        <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed">
            <ScrollToTop />

            {/* Disclaimer Section */}
            <div className="mx-auto py-20 px-4 lg:px-20 2xl:px-60 text-green-400 bg-black">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    {t("trading.titleDisclaimer")}
                </h1>
                <p className="text-justify">{t("trading.textDisclaimer")}</p>
            </div>

            {/* What is Trading Section */}
            <div className="mt-20">
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto py-14 px-4 lg:px-20 2xl:px-60 gap-10">
                    <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
                        <h2 className="text-2xl md:text-3xl text-green-900 font-bold text-center">
                            {t("trading.titleWhatIsTrading")}
                        </h2>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-justify">{t("trading.textWhatIsTrading")}</p>
                    </div>
                </div>
            </div>

            {/* Videos Section */}
            <div className="mx-auto py-20 px-4 lg:px-20 2xl:px-60">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            id: 1,
                            src: "https://www.youtube.com/embed/m2q0tIxgevQ",
                            title: "Trading 525 USD",
                        },
                        {
                            id: 2,
                            src: "https://www.youtube.com/embed/5x9nIEBr8QA",
                            title: "Análisis premercado",
                        },
                        {
                            id: 3,
                            src: "https://www.youtube.com/embed/gWySnIDaWUQ",
                            title: "Retroceso de Fibonacci",
                        },
                    ].map((video) => (
                        <div
                            key={video.id}
                            className="h-full shadow-lg shadow-green-900 rounded-lg hover:bg-green-50"
                        >
                            <iframe
                                src={video.src}
                                title={video.title}
                                className="w-full h-64 rounded-t-lg"
                                allowFullScreen
                            ></iframe>
                            <div className="p-6">
                                <p className="text-green-900 font-bold text-center">
                                    {t(`trading.video${video.id}`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Algorithmic Trading Section */}
            <div className="my-20">
                <div className="flex flex-col gap-12 md:flex-row justify-center items-center mx-auto py-14 px-4 lg:px-20 2xl:px-60">
                    <div className="md:w-3/5">
                        <h2 className="text-2xl md:text-3xl text-green-900 font-bold text-center mb-6">
                            {t("trading.titleAlgoTrading")}
                        </h2>
                        <p className="text-justify mb-4">{t("trading.textAlgoTrading1")}</p>
                        <p className="text-justify mb-4">{t("trading.textAlgoTrading2")}</p>
                        <p className="text-green-900 font-bold text-justify mb-4">
                            {t("trading.textAlgoTrading3")}
                        </p>
                        <p className="text-justify text-base md:text-lg my-4 whitespace-pre-line">
                            {t('trading.textAlgoTradingBenefits')}
                        </p>
                        <p className="text-justify">{t("trading.textAlgoTrading4")}</p>
                    </div>

                    {/* Right Column - Videos */}
                    <div className="flex flex-col md:w-2/5 justify-center items-center space-y-10">
                        {/* Expert Advisor Video */}
                        <div className="w-full">
                            <h3 className="text-green-900 font-bold text-center text-lg mb-3">
                                {t("trading.video4")}
                            </h3>
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full rounded-lg shadow-md"
                            >
                                <source src="https://res.cloudinary.com/dopqozfgb/video/upload/v1732650612/Expert_Advisor__qeegsx.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Balance Video */}
                        <div className="w-full">
                            <h3 className="text-green-900 font-bold text-center text-lg mb-3">
                                {t("trading.video5")}
                            </h3>
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full rounded-lg shadow-md"
                            >
                                <source src="https://res.cloudinary.com/dopqozfgb/video/upload/v1732651712/Balance__oj3j36.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingPage;
