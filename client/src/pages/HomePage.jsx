import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { wakeUpServer } from "../api/axios";
import { useTranslation, Trans } from "react-i18next";

const HomePage = () => {
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
    <div className="flex flex-col text-sm md:text-base lg:text-lg leading-relaxed">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          src={`${import.meta.env.BASE_URL}landscape.mp4`}
          poster={`${import.meta.env.BASE_URL}tech_.png`}
          muted
          autoPlay
          loop
          playsInline
          onError={(e) => (e.target.style.display = "none")}
        />

        <img
          src={`${import.meta.env.BASE_URL}blackscreen.png`}
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

        <div className="absolute top-0 left-0 w-full h-full bg-green-950 opacity-80 -z-10" />

        <img
          className="p-14 md:p-0 md:w-1/4 lg:w-1/6 relative z-10 max-w-full max-h-full "
          src={`${import.meta.env.BASE_URL}logoTC.png`}
          alt="Logo"
        />
      </div>

      {/* We Make It Possible Section */}
      <div className="bg-white text-black py-24 px-6 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="md:w-1/2 flex justify-center">
            <ScrollImage />
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

            <br />
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
          </div>
        </div>
      </div>

      {/* About Us */}
      <div
        className="text-black py-20 px-6 lg:px-20 2xl:px-60"
        style={{ backgroundColor: "#E8F2EB" }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
            <img
              src="/weare.jpg"
              alt="Who we are"
              className="w-full max-w-5xl rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-3/4 space-y-6">
            <p className="text-justify">{t("about.text1")}</p>
            <p className="text-justify">{t("about.text2")}</p>
            <p className="text-justify">{t("about.text3")}</p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mx-auto py-32 px-4 lg:px-20 2xl:px-60 text-black">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-green-900 mb-6">
          {t("cards.title")}
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {[
            { id: 1, img: "global.jpg", link: "/trading" },
            { id: 2, img: "lightbulb.jpg", link: "/" },
            { id: 3, img: "project.jpg", link: "/" },
            { id: 4, img: "trading.jpg", link: "/" },
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
                  <p className="mt-3 text-left">
                    {t(`cards.message${id}`)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence Section */}
      <div className="flex flex-col items-center bg-[#E8F2EB] text-black py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          {t("global.title")}
        </h2>
        <p className="max-w-3xl mx-auto mb-10">{t("global.text")}</p>

        <div className="grid grid-cols-2 md:w-1/2 text-green-900 font-semibold">
          <div >
            <h3 className="text-4xl">30M+ USD</h3>
            <p>{t("global.projects")}</p>
          </div>
          <div>
            <h3 className="text-4xl">5+ yrs</h3>
            <p>{t("global.experience")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 👇 Componente que cambia de imagen al hacer scroll */
const ScrollImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div ref={imgRef} className="transition-all duration-700 ease-in-out">
      <img
        src={`${import.meta.env.BASE_URL}${isVisible ? "lightbulbgears3.jpeg" : "lightbulbgears2.jpeg"
          }`}
        alt="Project Realization"
        className="max-w-full h-auto transition-opacity duration-700 ease-in-out"
      />
    </div>
  );
};

export default HomePage;
