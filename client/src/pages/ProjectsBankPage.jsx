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
      <section className="py-10 pt-16 md:py-20 p-6 relative bg-gradient-to-br from-[#DDEEE0] to-white  text-center">
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
      <section className="py-10 md:py-16 px-6 md:px-16 bg-white">
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
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-md bg-[#F9FBFA] hover:shadow-lg transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {step.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{index+1}- {step.title}</h3>
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
                    className="h-1 bg-green-700 flex-1 mx-4 rounded-full opacity-10"
                  ></div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-10 md:py-20 px-6 md:px-16 bg-gradient-to-tl from-[#DDEEE0] to-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
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
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {t("projects.value.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t("projects.value.text")}
            </p>
           <div className="flex justify-left">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("director@panamericanprivateinvestments.com");
                  alert("Email copiado al portapapeles 📋");
                }}
                className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors bg-green-900 rounded-full px-6 py-3.5"
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

export default ProjectsBankPage;
