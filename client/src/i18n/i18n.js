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
            weMake: {
                title: "We make it possible",
                text1:
                    "We turn your ideas into real projects through a structured process. Following the key stages of professional project management <highlight>-Evaluation, Planning, Execution, and Control-</highlight> we transform your vision into tangible results. We analyze and assess potential, design strategies, implement solutions, and accompany you until your project is fully operational.",
            },
            cards: {
                title: "Our Services",

                title4: "Software Development",
                message4: "We create customized technology tools for automated investment and advisory, optimizing financial and operational processes.",

                title2: "Projects Portfolio and Private Equity",
                message2: "We evaluate high-potential projects and invest in those with the strongest prospects.",

                title3: "Training",
                message3: "We provide advisory and training in strategy, financial markets, and risk management.",

                title1: "Corporative Consulting",
                message1: "We support the full investment cycle, from evaluation to project execution."

            },

            about: {
                title: "About Us",
                text1: "We are a dedicated team of professionals committed to driving growth and innovation in business. Our mission is to provide comprehensive solutions in business consulting, software development, and project management.",
                text2: "We focus on building strong relationships with our clients, understanding their unique needs, and crafting personalized strategies that deliver sustainable results. With expertise in project evaluation and international trade, we ensure our clients receive the support they need to thrive in a competitive environment.",
                text3: "We believe in collaboration and transparency, working closely with our partners to achieve common goals while maximizing opportunities at every step."
            },
            global: {
                title: "Making it Real",
                text: "We focus on transforming ideas into tangible and measurable results. Through strategy, collaboration, and precision, we bring every project to life.",
                projects: "Projects Managed",
                partners: "Allied Partners",
                experience: "Years of Experience",
                goals: "Goals Achieved"
            },


            trading: {
                titleDisclaimer: "Disclaimer",
                textDisclaimer: "The information provided on this website is purely informational and educational in nature. It is not intended as an invitation or encouragement to engage in any trading activity. We do not offer any financial advice or recommendations. Please be aware that trading is not a game, and it involves significant risks, including the potential loss of money. We urge you to carefully consider your financial situation and risk tolerance before participating in any form of trading. Always seek professional advice if needed.",

                titleWhatIsTrading: "What is Trading?",
                textWhatIsTrading: "Trading refers to the act of buying and selling financial assets such as stocks, bonds, commodities, or currencies, with the goal of making a profit. Traders attempt to capitalize on price fluctuations in the market by entering and exiting positions at opportune times. It is important to understand that trading is a complex and speculative activity that requires knowledge, skill, and experience. By using this website, you acknowledge that you understand the risks involved in trading and agree to use the information provided solely for educational purposes. We are not responsible for any financial losses incurred as a result of actions taken based on the information on this site.",

                titleAlgoTrading: "What is Algorithmic Trading?",
                textAlgoTrading1: "Algorithmic trading, also known as algo trading or automated trading, refers to the use of computer programs and algorithms to execute financial market trades. These algorithms follow predefined rules based on factors such as price, volume, and timing to capitalize on market opportunities with speed and accuracy beyond human capability.",
                textAlgoTrading2: "Algorithmic trading can involve simple strategies, like following a moving average, or complex systems that analyze large amounts of data and make decisions using artificial intelligence (AI) and machine learning.",
                textAlgoTrading3: "Key Benefits:",
                textAlgoTradingBenefits: "- Speed: Executes trades in milliseconds, faster than any human.\n- Accuracy: Reduces human error by following strict rules.\n- Efficiency: Monitors and reacts to multiple markets simultaneously.",
                textAlgoTrading4: "Despite its advantages, algorithmic trading carries significant risks. It requires a deep understanding of both markets and algorithms. Poorly designed strategies or glitches can cause major losses and even increase market volatility.",

                video1: "Trading 525 USD in two minutes. SP500 futures",
                video2: "Premarket Analysis",
                video3: "Fibonacci Retracement",
                video4: "Expert Advisor",
                video5: "Balance",
            },
            footer: {
                subtitle: "Innovation, precision, and integrity in every project we undertake.",
                centralTitle: "We Make It Possible",
                centralText: "From vision to execution — we transform ideas into tangible results through strategy, innovation, and excellence.",
                contactTitle: "Contact Us"
            },

            consulting: {
                hero: {
                    title: "Corporate Consulting",
                    subtitle: "We design financial and operational strategies that drive efficiency, sustainability, and global expansion for your company."
                },
                services: {
                    treasury: {
                        title: "Treasury Management",
                        description: "We optimize cash flow, financial planning, and resource management to maximize liquidity and profitability."
                    },
                    projectAdmin: {
                        title: "Subrogated Project Administration",
                        description: "We take on the operational and administrative management of strategic projects, ensuring transparency, compliance, and efficiency at every stage."
                    },
                    processOptimization: {
                        title: "Process Optimization",
                        description: "We analyze and redesign key processes to reduce costs, eliminate bottlenecks, and improve overall productivity."
                    },
                    automation: {
                        title: "Process Automation",
                        description: "We implement digital solutions integrating artificial intelligence and automation to minimize repetitive tasks and improve accuracy."
                    },
                    offshore: {
                        title: "Offshore Structuring Advisory",
                        description: "We provide specialized advice for designing secure, efficient, and compliant international corporate structures."
                    }
                },
                value: {
                    title: "Long-Term Strategic Support",
                    text: "At Panamerican Private Investments, we offer comprehensive solutions that go beyond traditional consulting. We focus on sustainability, confidentiality, and operational efficiency to build solid and profitable corporate structures.",
                    button: "Contact Us",
                    imageAlt: "Corporate consulting"
                }
            }



        },
    },
    es: {
        translation: {
            navbar: {
            },
            jumbotron: {
            },
            weMake: {
                title: "Lo hacemos posible",
                text1:
                    "Convertimos tus ideas en proyectos reales a través de un proceso estructurado. Siguiendo las etapas clave de la gestión profesional de proyectos <highlight>-Evaluación, Planificación, Ejecución y Control-</highlight> transformamos tu visión en resultados tangibles. Analizamos y evaluamos el potencial, diseñamos la estrategia, implementamos soluciones y acompañamos hasta su puesta en marcha.",
            },
            about: {
                title: "Sobre nosotros",
                text1: "Somos un equipo de profesionales comprometidos con impulsar el crecimiento y la innovación empresarial. Nuestra misión es ofrecer soluciones integrales en consultoría de negocios, desarrollo de software y gestión de proyectos.",
                text2: "Nos enfocamos en construir relaciones sólidas con nuestros clientes, comprendiendo sus necesidades únicas y diseñando estrategias personalizadas que generen resultados sostenibles. Con experiencia en evaluación de proyectos y comercio internacional, aseguramos que nuestros clientes reciban el apoyo necesario para destacar en un entorno competitivo.",
                text3: "Creemos en la colaboración y la transparencia, trabajando de la mano con nuestros aliados para alcanzar objetivos comunes y maximizar las oportunidades en cada etapa."
            },
            cards: {
                title: "Nuestros Servicios",

                title4: "Desarrollo de Software",
                message4: "Creamos herramientas tecnológicas personalizadas para la automatización de inversiones y asesorías, optimizando los procesos financieros y operativos.",

                title2: "Banco de Proyectos y Capital Privado",
                message2: "Evaluamos proyectos con alto potencial e invertimos en aquellos con las mejores perspectivas.",

                title3: "Educación",
                message3: "Ofrecemos asesoría y formación en estrategia, mercados financieros y gestión de riesgos.",

                title1: "Consultoría Corporativa",
                message1: "Acompañamos todo el ciclo de inversión, desde la evaluación hasta la ejecución del proyecto."

            },
            global: {
                title: "Haciendo que ocurra",
                text: "Nos enfocamos en transformar ideas en resultados reales y medibles. A través de la estrategia, la colaboración y la precisión, damos vida a cada proyecto.",
                projects: "Proyectos Gestionados",
                partners: "Aliados",
                experience: "Años de Experiencia",
                goals: "Metas Alcanzadas"
            },


            trading: {
                titleDisclaimer: "Aviso Legal",
                textDisclaimer: "La información proporcionada en este sitio web es de carácter puramente informativo y educativo. No pretende ser una invitación o incentivo para realizar actividades de trading. No ofrecemos asesoramiento financiero ni recomendaciones. Tenga en cuenta que el trading no es un juego y conlleva riesgos significativos, incluido el posible riesgo de pérdida de dinero. Le recomendamos analizar cuidadosamente su situación financiera y tolerancia al riesgo antes de participar en cualquier forma de trading. Busque siempre asesoría profesional si es necesario.",

                titleWhatIsTrading: "¿Qué es el Trading?",
                textWhatIsTrading: "El trading se refiere a la compra y venta de activos financieros como acciones, bonos, materias primas o divisas, con el objetivo de obtener ganancias. Los traders buscan aprovechar las fluctuaciones del mercado entrando y saliendo de posiciones en los momentos adecuados. Es importante entender que el trading es una actividad compleja y especulativa que requiere conocimiento, habilidad y experiencia. Al usar este sitio web, usted reconoce que comprende los riesgos involucrados y acepta usar la información únicamente con fines educativos. No nos hacemos responsables por pérdidas financieras derivadas de decisiones basadas en la información aquí publicada.",

                titleAlgoTrading: "¿Qué es el Trading Algorítmico?",
                textAlgoTrading1: "El trading algorítmico, también conocido como trading automático, consiste en el uso de programas y algoritmos informáticos para ejecutar operaciones en los mercados financieros. Estos algoritmos siguen reglas predefinidas basadas en factores como precio, volumen y tiempo, buscando aprovechar oportunidades con rapidez y precisión más allá de la capacidad humana.",
                textAlgoTrading2: "Puede incluir estrategias simples, como seguir una media móvil, o sistemas complejos que analizan grandes volúmenes de datos y toman decisiones mediante inteligencia artificial (IA) y aprendizaje automático.",
                textAlgoTrading3: "Beneficios clave:",
                textAlgoTradingBenefits: "- Velocidad: Ejecuta operaciones en milisegundos, más rápido que cualquier humano.\n- Precisión: Reduce el error humano al seguir reglas estrictas.\n- Eficiencia: Supervisa y reacciona simultáneamente en múltiples mercados.",
                textAlgoTrading4: "A pesar de sus ventajas, el trading algorítmico conlleva riesgos importantes. Requiere un profundo conocimiento de los mercados y de los algoritmos. Estrategias mal diseñadas o fallos técnicos pueden causar grandes pérdidas y aumentar la volatilidad del mercado.",

                video1: "Trading 525 USD en dos minutos. Futuros del SP500",
                video2: "Análisis Premercado",
                video3: "Retroceso de Fibonacci",
                video4: "Asesor Experto",
                video5: "Balance",
            },
            footer: {
                subtitle: "Innovación, precisión e integridad en cada proyecto que desarrollamos.",
                centralTitle: "Lo hacemos posible",
                centralText: "De la visión a la ejecución: transformamos ideas en resultados tangibles mediante estrategia, innovación y excelencia.",
                contactTitle: "Contáctanos"
            },

            consulting: {
                hero: {
                    title: "Consultoría Corporativa",
                    subtitle: "Diseñamos estrategias financieras y operativas que impulsan la eficiencia, la sostenibilidad y la expansión global de su empresa."
                },
                services: {
                    treasury: {
                        title: "Gestión de Tesorería",
                        description: "Optimizamos los flujos de efectivo, la planificación financiera y el manejo de recursos para maximizar la liquidez y la rentabilidad de su empresa."
                    },
                    projectAdmin: {
                        title: "Administración Subrogada de Proyectos",
                        description: "Asumimos la gestión operativa y administrativa de proyectos estratégicos, garantizando transparencia, cumplimiento y eficiencia en cada etapa."
                    },
                    processOptimization: {
                        title: "Optimización de Procesos Productivos",
                        description: "Analizamos y rediseñamos procesos clave para reducir costos, eliminar cuellos de botella y aumentar la productividad general."
                    },
                    automation: {
                        title: "Automatización de Procesos",
                        description: "Implementamos soluciones digitales que integran inteligencia artificial y automatización para minimizar tareas repetitivas y mejorar la precisión."
                    },
                    offshore: {
                        title: "Asesoría en Estructuración Offshore",
                        description: "Ofrecemos asesoría especializada para el diseño de estructuras corporativas internacionales seguras, eficientes y en cumplimiento con la normativa vigente."
                    }
                },
                value: {
                    title: "Acompañamiento estratégico a largo plazo",
                    text: "En Panamerican Private Investments ofrecemos soluciones integrales que van más allá de la consultoría tradicional. Nos enfocamos en la sostenibilidad, la confidencialidad y la eficiencia operativa para construir estructuras corporativas sólidas y rentables.",
                    button: "Contáctanos",
                    imageAlt: "Consultoría corporativa"
                }
            }


        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // Idioma predeterminado
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
