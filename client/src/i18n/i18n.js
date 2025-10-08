// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en diferentes idiomas
const resources = {
    en: {
        translation: {
            navbar: {
            },
            jumbotron: {

            },
            cards: {
                title1: "Software Development",
                message1: "We create customized technology tools for automated investment and advisory, optimizing financial and operational processes.",

                title2: "Project Analysis and Investment",
                message2: "We evaluate high-potential projects and invest in those with the strongest prospects.",

                title3: "Consulting and Training",
                message3: "We provide advisory and training in strategy, financial markets, and risk management.",

                title4: "Structuring and Implementation",
                message4: "We support the full investment cycle, from evaluation to project execution."

            },

            about: {
                title: "About Us",
                text1: "We are a dedicated team of professionals committed to driving growth and innovation in business. Our mission is to provide comprehensive solutions in business consulting, software development, and project management.",
                text2: "We focus on building strong relationships with our clients, understanding their unique needs, and crafting personalized strategies that deliver sustainable results. With expertise in project evaluation and international trade, we ensure our clients receive the support they need to thrive in a competitive environment.",
                text3: "We believe in collaboration and transparency, working closely with our partners to achieve common goals while maximizing opportunities at every step."
            }

        },
    },
    es: {
        translation: {
            navbar: {
            },
            jumbotron: {
            },
            cards: {
                title1: "Desarrollo de Software",
                message1: "Creamos a medida herramientas tecnológicas para aviso e inversión automatizada, optimizando procesos financieros y operativos.",

                title2: "Análisis e Inversión en Proyectos",
                message2: "Evaluamos proyectos con potencial y participamos como inversionistas en los más prometedores.",

                title3: "Consultoría y Formación",
                message3: "Ofrecemos asesoría y capacitación en estrategia, mercados financieros y gestión del riesgo.",

                title4: "Estructuración e Implementación",
                message4: "Acompañamos todo el ciclo de inversión, desde la evaluación hasta la ejecución del proyecto."
            },

            about: {
                title: "Sobre nosotros",
                text1: "Somos un equipo de profesionales comprometidos con impulsar el crecimiento y la innovación empresarial. Nuestra misión es ofrecer soluciones integrales en consultoría de negocios, desarrollo de software y gestión de proyectos.",
                text2: "Nos enfocamos en construir relaciones sólidas con nuestros clientes, comprendiendo sus necesidades únicas y diseñando estrategias personalizadas que generen resultados sostenibles. Con experiencia en evaluación de proyectos y comercio internacional, aseguramos que nuestros clientes reciban el apoyo necesario para destacar en un entorno competitivo.",
                text3: "Creemos en la colaboración y la transparencia, trabajando de la mano con nuestros aliados para alcanzar objetivos comunes y maximizar las oportunidades en cada etapa."
            }


        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Idioma predeterminado
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
