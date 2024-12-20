import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const CardsGrid = () => {
  const cards = [
    {
      title: "ÉVÉNEMENTS",
      description:
        "Des spectacles de drones pour des événements inoubliables avec des chorégraphies lumineuses captivantes.",
      image: "https://i.ytimg.com/vi/C8jXyv2q-Bw/maxresdefault.jpg",
    },
    {
      title: "ENTREPRISES ET MARQUES",
      description:
        "Valorisez votre marque avec des shows de drones personnalisés et spectaculaires.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlmsj6xAqJVpePsN9kZai0FgvZVJQWgZ_ag&s",
    },
    {
      title: "COLLECTIVITÉS",
      description:
        "Illuminez vos célébrations publiques avec des spectacles de drones innovants.",
      image: "https://assets.nationalbankopen.com/production/news/drone-show1.jpg",
    },
    {
      title: "OCCASIONS SPÉCIALES",
      description:
        "Sublimez vos moments uniques avec des animations lumineuses personnalisées.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQad3En0DrIMvV4eT2l_z-0gky2gs2Rky0rIw&s",
    },
  ];

  return (
    <section className="bg-black text-white p-10">
      <div className="mt-16 ml-8 sm:ml-16 md:ml-[40px] lg:ml-[100px] xl:ml-[150px] w-[80%] mb-16">
        <p
          style={{ color: "#48bdd2" }}
          className="uppercase text-sm font-bold mb-4"
        >
          DRONE LIGHT SHOW
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
          SPECTACLES DE DRONES : L'ART AU SERVICE DE L'ÉVÉNEMENTIEL
        </h1>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 transition-opacity duration-300 group-hover:bg-opacity-60">
        <div>
          <Link to="/contact">
            <h2 className="text-2xl font-bold text-white">{card.title}</h2>
            <p className="text-gray-200">{card.description}</p>
          </Link>
        </div>

        {/* Arrow */}
        <div className="absolute top-6 right-6 text-white text-2xl">→</div>
      </div>
    </motion.div>
  );
};

export default CardsGrid;
