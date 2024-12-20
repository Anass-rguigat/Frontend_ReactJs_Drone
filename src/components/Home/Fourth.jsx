import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurService = () => {
  const items = [
    {
      id: 1,
      link: "/Nettoyage",
      title: "Démoussage ou Nettoyage",
      subtitle: "Nettoyage de toitures et panneaux solaires",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqepIJ8b8YhMpcqE2YioXfdpJgtKxAzgxZQ&s",
    },
    {
      id: 2,
      link: "/Cartographie",
      title: "Cartographie Aérienne",
      subtitle: "Cartes précises avec LIDAR et caméras",
      imageUrl: "https://www.pacecat.net/wp-content/uploads/2024/06/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240604160133-800x450.webp",
    },
    {
      id: 3,
      link: "/Topographique",
      title: "Levée Topographique",
      subtitle: "Levées rapides avec GPS et capteurs",
      imageUrl: "https://doran.id/wp-content/uploads/2024/03/Drone-Survey-5-1024x538.jpg",
    },
    {
      id: 4,
      link: "/Agriculture",
      title: "Agriculture de précision",
      subtitle: "Surveillance des cultures et analyse",
      imageUrl: "https://www.laterre.ca/wp-content/uploads/2024/08/Drone_1.jpg",
    },
    {
      id: 5,
      link: "/Surveillance",
      title: "Surveillance & Inspection industrielle",
      subtitle: "Inspection d'infrastructures industrielles",
      imageUrl: "https://img.freepik.com/premium-photo/realistic-raw-photo-industrial-drone-work-panoramic-view_1061852-6140.jpg?w=740",
    },
    {
      id: 6,
      link: "/Thermographie",
      title: "Thermographie",
      subtitle: "Détection de fuites thermiques et inspection",
      imageUrl: "https://www.drone.actstudio.fr/wp-content/uploads/2022/01/Parrot-Anafi-thermal.jpg",
    },
    {
      id: 7,
      link: "/Amenagement",
      title: "Aménagement du territoire",
      subtitle: "Collecte de données aériennes pour l'urbanisme",
      imageUrl: "https://www.weka.fr/actualite/wp-content/uploads/2017/07/drone-nouvel-allie-finances-collectivites-territoriales.jpg",
    },
    {
      id: 8,
      link: "/Mines",
      title: "Mines & Carrières",
      subtitle: "Surveillance et sécurité des sites miniers",
      imageUrl: "https://media.licdn.com/dms/image/D4E12AQE629k9s1APBw/article-cover_image-shrink_720_1280/0/1674051133973?e=2147483647&v=beta&t=wvSZ5pvlYeg0ZuD1im2SHUMNKQJ1z8fB_W4HEvC-Ar0",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center w-full">
      <div className="mt-16 lg:mt-24 lg:ml-12 w-[80%] mb-16">
        <p style={{ color: "#48bdd2" }} className="uppercase text-sm font-bold mb-4">
          Service
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          Services sur Mesure pour Réaliser Vos Ambitions
        </h1>
      </div>
      <motion.div
        className="flex items-center justify-center w-full mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="group relative cursor-pointer items-center justify-center overflow-hidden rounded transition-shadow hover:shadow-xl hover:shadow-black/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white text-center mb-7">{item.title}</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center">
                  {item.subtitle}
                </p>
                <Link
                  to={item.link}
                  style={{ backgroundColor: "#48bdd2" }}
                  className="relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
                >
                  <span className="text-white pr-2">Plus Info</span>
                  <span className="absolute inset-y-0 right-4 flex items-center transition-transform duration-300 translate-x-0 group-hover:translate-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurService;
