import { useEffect } from "react";
import { Link } from "react-router-dom";
import { wakeUpServer } from "../api/axios";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

const HomaPage = () => {
  useEffect(() => {
    wakeUpServer();
  }, []);


  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("director@panamericanprivateinvestments.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-10 text-sm md:text-base lg:text-lg leading-relaxed">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          src={`${import.meta.env.BASE_URL}tech_.mp4`}
          poster={`${import.meta.env.BASE_URL}tech_.png`}
          muted
          autoPlay
          loop
          playsInline
          onError={(e) => (e.target.style.display = "none")}
        />

        <img
          src={`${import.meta.env.BASE_URL}tech.png`}
          alt="Video Poster"
          className="absolute w-full h-full object-cover bg-black opacity-30"
          style={{ display: "none" }}
          onLoad={(e) => {
            const video = document.querySelector("video");
            if (video && video.style.display === "none") {
              e.target.style.display = "block";
            }
          }}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10" />

        <img
          className="relative z-10 max-w-full max-h-full lg:p-32"
          src={`${import.meta.env.BASE_URL}logoT.png`}
          alt="Logo"
        />
      </div>

      {/* We Make It Possible Section */}
      <div className="bg-white text-black py-24 px-6 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}lightbulbgears2.jpeg`}
              alt="Project Realization"
              className="max-w-full h-auto"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-6">
              {t("weMake.title")}
            </h2>
            <p className="text-justify">
              <Trans
                i18nKey="weMake.text1"
                components={{
                  highlight: <span className="font-bold text-green-900" />,
                }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="text-white py-20 px-6 lg:px-20 2xl:px-60" style={{ backgroundColor: '#00261B' }}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              {t("about.title")}
            </h2>
          </div>
          <div className="md:w-3/4 space-y-6">
            <p className="text-justify">{t("about.text1")}</p>
            <p className="text-justify">{t("about.text2")}</p>
            <p className="text-justify">{t("about.text3")}</p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mx-auto py-32 px-4 lg:px-20  2xl:px-60 text-black">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-green-900 mb-6">
          {t("cards.title")}
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              id: 1,
              img: "trading.jpg",
              link: "/trading",
            },
            {
              id: 2,
              img: "lightbulb.jpg",
              link: "/",
            },
            {
              id: 3,
              img: "project.jpg",
              link: "/",
            },
            {
              id: 4,
              img: "global.jpg",
              link: "/",
            },
          ].map(({ id, img, link }) => (
            <div
              key={id}
              className="h-full shadow-lg shadow-green-900 rounded-lg hover:bg-green-50 transition-transform hover:-translate-y-1 duration-300"
            >
              <Link to={link}>
                <img
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt={`Project ${id}`}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h5 className="text-green-900 text-center font-bold text-lg md:text-xl">
                    {t(`cards.title${id}`)}
                  </h5>
                  <p className="mt-3 text-justify">{t(`cards.message${id}`)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>


      {/* Prefooter */}
      {/* <div
        className="w-full text-left mt-16 p-4 md:p-8 bg-center min-h-[400px]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent, black),
            linear-gradient(to top, transparent, black),
            url('${import.meta.env.BASE_URL}banner.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <img
                className="h-48 md:h-64"
                src={`${import.meta.env.BASE_URL}logoT.png`}
                alt="Logo"
              />
            </div>

            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="font-bold text-lg md:text-xl">Services</h5>
                <p>- Trading and financial investments</p>
                <p>- Project evaluation, structuring and management</p>
                <p>- International business consulting</p>
                <p>- Software and AI development</p>
              </div>
            </div>

            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="font-bold text-lg md:text-xl">Contact Us</h5>
                <p>
                  Address: Cra 42 C #3 Sur 81, Torre 1, Piso 15 <br />
                  CE Milla de Oro, Medellín Colombia
                </p>
                <a
                  href="mailto:director@panamericanprivateinvestments.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" />
                  <span>director@panamericanprivateinvestments.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/panamerican-private-investments/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.01a2.07 2.07 0 11-.001-4.138 2.07 2.07 0 010 4.138zm15.18 13.01h-3.56v-5.941c0-1.417-.028-3.245-1.975-3.245-1.976 0-2.278 1.543-2.278 3.14v6.045h-3.56V9h3.42v1.563h.049c.476-.9 1.636-1.846 3.368-1.846 3.602 0 4.267 2.369 4.267 5.452v6.283z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default HomaPage;
