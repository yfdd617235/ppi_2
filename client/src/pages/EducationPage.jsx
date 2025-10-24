import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaBookOpen, FaChalkboardTeacher, FaClock } from "react-icons/fa";

const EducationPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaGraduationCap className="text-green-700 text-4xl mb-4" />,
      title: t("education.features.professionalTraining.title"),
      description: t("education.features.professionalTraining.description"),
    },
    {
      icon: <FaBookOpen className="text-green-700 text-4xl mb-4" />,
      title: t("education.features.structuredPrograms.title"),
      description: t("education.features.structuredPrograms.description"),
    },
    {
      icon: <FaChalkboardTeacher className="text-green-700 text-4xl mb-4" />,
      title: t("education.features.expertInstructors.title"),
      description: t("education.features.expertInstructors.description"),
    },
    {
      icon: <FaClock className="text-green-700 text-4xl mb-4" />,
      title: t("education.features.soonAvailable.title"),
      description: t("education.features.soonAvailable.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-green-900">
      <ScrollToTop />

      {/* HERO SECTION */}
      <section className="py-10 pt-20 md:py-24 px-6 relative bg-gradient-to-br from-[#DDEEE0] to-white text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-green-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("education.hero.title")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("education.hero.subtitle")}
        </motion.p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-10 md:py-16 px-6 md:px-16 bg-white">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT SECTION */}
      <section className="py-10 md:py-20 px-6 md:px-16 bg-gradient-to-tl from-[#DDEEE0] to-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="project.jpg"
              alt={t("education.development.imageAlt")}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {t("education.development.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t("education.development.text")}
            </p>
            <p className="text-gray-600 italic">
              {t("education.development.note")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
