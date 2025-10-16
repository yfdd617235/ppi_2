import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaSearch, FaClipboardList, FaCogs, FaChartBar } from "react-icons/fa";

const ProjectsBankPage = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaSearch className="text-green-700 text-4xl mb-3" />,
      title: t("projects.steps.evaluation.title"),
      description: t("projects.steps.evaluation.description"),
    },
    {
      icon: <FaClipboardList className="text-green-700 text-4xl mb-3" />,
      title: t("projects.steps.planning.title"),
      description: t("projects.steps.planning.description"),
    },
    {
      icon: <FaCogs className="text-green-700 text-4xl mb-3" />,
      title: t("projects.steps.execution.title"),
      description: t("projects.steps.execution.description"),
    },
    {
      icon: <FaChartBar className="text-green-700 text-4xl mb-3" />,
      title: t("projects.steps.control.title"),
      description: t("projects.steps.control.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-green-900">
      <ScrollToTop />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#E8F2EB] to-white py-24 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-green-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("projects.hero.title")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("projects.hero.subtitle")}
        </motion.p>
      </section>

      {/* DIAGRAM SECTION */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-green-900 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t("projects.diagram.title")}
          </motion.h2>

          {/* Diagrama en flujo */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center max-w-xs p-6 border rounded-2xl shadow-md bg-[#F9FBFA] hover:shadow-lg transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {step.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}

            {/* Conectores entre los pasos */}
            {/* <div className="hidden md:block absolute w-full top-1/2 transform -translate-y-1/2">
              <div className="flex justify-between px-10">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 bg-green-700 flex-1 mx-4 rounded-full opacity-50"
                  ></div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-20 px-6 md:px-16 bg-[#E8F2EB]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="lightbulb.jpg"
              alt={t("projects.value.imageAlt")}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {t("projects.value.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t("projects.value.text")}
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition"
            >
              {t("projects.value.button")}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsBankPage;
