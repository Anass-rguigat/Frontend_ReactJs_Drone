import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white flex justify-center py-16 px-8 w-full bg-cover bg-center relative"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Content Wrapper */}
    
      <motion.div
        className="w-[80%] relative z-10 text-black rounded-lg"
        variants={itemVariants}
      >
        {/* Title Section with Overlay */}
        <motion.div
          className=" bg-opacity-50 px-5 py-6 rounded-lg mb-10"
          variants={itemVariants}
        >
          <p className="uppercase  text-redOne text-xl font-bold mb-4">
            Pourquoi
          </p>
          <h1 className="text-2xl text-black sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Pourquoi devriez-vous travailler avec nous ?
          </h1>
        </motion.div>

        {/* Content Section with Overlay */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: "EXPERTISE INÉGALÉE",
              content:
                "Nous combinons des années d'expérience avec une technologie de pointe pour offrir des spectacles de drones lumineux spectaculaires et personnalisés, adaptés à vos besoins uniques.",
            },
            {
              title: "ÉCORESPONSABILITÉ",
              content:
                "Engagés dans une démarche RSE, nos drones respectent les dernières normes environnementales, garantissant des événements innovants et respectueux de l’environnement.",
            },
            {
              title: "PRÉCISION ET INNOVATION",
              content:
                "Grâce à notre technologie de positionnement au centimètre près, nos drones délivrent un rendu visuel parfait, transformant vos idées en une expérience inoubliable.",
            },
            {
              title: "FLEXIBILITÉ ET PERSONNALISATION",
              content:
                "Qu'il s'agisse d’un logo, d’un texte ou d’une animation complexe, nous personnalisons chaque détail pour correspondre exactement à votre vision.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-left text-black p-4 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-4 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhyUs;
