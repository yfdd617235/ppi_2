import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaProjectDiagram, FaCogs, FaChartLine, FaRobot, FaGlobe } from "react-icons/fa";

const ConsultingPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaChartLine className="text-green-700 text-4xl mb-4" />,
      title: t("consulting.services.treasury.title"),
      description: t("consulting.services.treasury.description"),
    },
    {
      icon: <FaProjectDiagram className="text-green-700 text-4xl mb-4" />,
      title: t("consulting.services.projectAdmin.title"),
      description: t("consulting.services.projectAdmin.description"),
    },
    {
      icon: <FaCogs className="text-green-700 text-4xl mb-4" />,
      title: t("consulting.services.processOptimization.title"),
      description: t("consulting.services.processOptimization.description"),
    },
    {
      icon: <FaRobot className="text-green-700 text-4xl mb-4" />,
      title: t("consulting.services.automation.title"),
      description: t("consulting.services.automation.description"),
    },
    {
      icon: <FaGlobe className="text-green-700 text-4xl mb-4" />,
      title: t("consulting.services.offshore.title"),
      description: t("consulting.services.offshore.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-green-900">
      <ScrollToTop />

      {/* HERO SECTION */}
      <section className="px-6 relative bg-gradient-to-b from-[#E8F2EB] to-white py-24 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-green-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("consulting.hero.title")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("consulting.hero.subtitle")}
        </motion.p>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-[#E8F2EB] ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="global.jpg"
              alt={t("consulting.value.imageAlt")}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {t("consulting.value.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t("consulting.value.text")}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("director@panamericanprivateinvestments.com");
                  alert("Email copiado al portapapeles 📋");
                }}
                className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors bg-green-900 rounded-md p-2"
                title="Click para copiar email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15Zm2.16.5 7.81 6.2a1 1 0 0 0 1.26 0l7.82-6.2H3.66ZM20 19.5a.5.5 0 0 0 .5-.5V8.56l-6.6 5.22a3 3 0 0 1-3.8 0L3.5 8.56V19a.5.5 0 0 0 .5.5h16Z" />
                </svg>
                <span>{t("footer.contactTitle")}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPage;
