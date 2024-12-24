import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPlus } from "react-icons/lu";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className={`w-full max-w-3xl  bg-gray-100 rounded-md border mb-4 overflow-hidden ${
        isOpen ? "border-blue-400/40" : ""
      }`}

      style={{backgroundColor:"gba(228,229,230,1)"}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <button
        className={`flex items-center justify-between text-black w-full p-4 text-left ${
          isOpen ? "bg-neutral-200" : ""
        }`}
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
        >
          <LuPlus
            className={`w-6 h-6 ${
              isOpen ? "text-red-500" : "text-black"
            }`}
          />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
            className="overflow-hidden"
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  return (
    <motion.div
      className="bg-white w-full flex-1 flex items-center justify-center flex-col pb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p
          className="text-redOne uppercase text-xl mt-10 font-bold mb-4"
        >
          FAQ
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-black font-extrabold mb-6 leading-tight">
          Foire aux questions
        </h1>
      </motion.div>
      <motion.div
        className="w-full flex flex-col items-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Accordion title={"Comment réserver un spectacle de drones lumineux ?"}>
          <p className="text-base text-black font-light">
            Vous pouvez réserver un spectacle de drones lumineux en nous
            contactant directement via notre site web ou par téléphone. Nous
            nous assurerons de planifier et personnaliser l'événement selon vos
            besoins.
          </p>
        </Accordion>
        <Accordion
          title={
            "Quelle est la différence entre un spectacle de drones et un feu d’artifice ?"
          }
        >
          <p className="text-base text-black font-light">
            Contrairement aux feux d'artifice, les spectacles de drones sont
            silencieux, écologiques et peuvent être personnalisés pour afficher
            des logos, des animations et des messages uniques.
          </p>
        </Accordion>
        <Accordion
          title={
            "Les spectacles de drones sont-ils adaptés à tous les lieux et tous les publics ?"
          }
        >
          <p className="text-base text-neutral-black font-light">
            Oui, nos spectacles de drones sont adaptés à divers environnements
            et publics, tant qu’il y a un espace dégagé et des conditions
            météorologiques favorables.
          </p>
        </Accordion>
        <Accordion
          title={
            "Combien de temps à l’avance faut-il réserver un spectacle de drones ?"
          }
        >
          <p className="text-base text-black font-light">
            Nous recommandons de réserver au moins 2 à 4 semaines à l’avance
            afin de préparer et planifier votre spectacle personnalisé.
          </p>
        </Accordion>
        <Accordion title={"Quelles sont les conditions météorologiques requises ?"}>
          <p className="text-base text-black font-light">
            Les conditions idéales incluent un ciel clair, sans pluie ni vents
            forts. Nous surveillons toujours la météo pour garantir un spectacle
            en toute sécurité.
          </p>
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
