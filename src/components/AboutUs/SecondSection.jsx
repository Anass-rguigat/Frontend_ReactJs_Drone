import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecondSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      className="w-[80%] mx-auto text-white py-10 lg:py-20 px-5 lg:px-20"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-center"
      >
        Découvrez Drone Cast et nos spectacles aériens
      </motion.h1>

      {/* Section 1: Présentation de Drone Cast */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-8 mb-10 lg:mb-20"
      >
        <motion.div className="w-full lg:w-1/2">
          <img
            src="https://ao-technology.com/wp-content/uploads/2024/01/projects_szf-nye2324_01d.jpg"
            alt="Drone team at work"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Qui sommes-nous ?
          </motion.h2>
          <p className="text-lg leading-relaxed mb-4">
            Drone Cast est une équipe dynamique et multidisciplinaire spécialisée dans les solutions par drone. Notre équipe est composée de :
          </p>
          <ul className="list-disc pl-6 text-lg space-y-3">
            <li><span className="font-bold">Pilotes de drones professionnels</span> certifiés.</li>
            <li><span className="font-bold">Ingénieurs spécialisés</span> en technologie drone.</li>
            <li><span className="font-bold">Infographistes et créateurs 3D</span> pour des designs uniques.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            Nous combinons <span className="font-bold">technologie de pointe</span> et <span className="font-bold">créativité</span> pour offrir des prestations sur mesure et innovantes.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2: Spectacles Aériens de Drones au Maroc */}
      <motion.div
        className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-10 lg:mb-20"
      >
        <motion.div className="w-full lg:w-1/2">
          <img
            src="https://www.allumee.com/wp-content/uploads/2024/01/allumee-drones-prets-a-decoller.webp"
            alt="Drones ready for launch"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Spectacles de drones lumineux
          </motion.h2>
          <p className="text-lg leading-relaxed mb-4">
            Nous sommes le seul prestataire autorisé à organiser des spectacles de drones lumineux au Maroc. Nos services incluent :
          </p>
          <ul className="list-disc pl-6 text-lg space-y-3">
            <li><span className="font-bold">Événements d'entreprise</span> : lancements de produits, anniversaires, etc.</li>
            <li><span className="font-bold">Célébrations publiques</span> : fêtes nationales, festivals, etc.</li>
            <li><span className="font-bold">Spectacles personnalisés</span> : adaptés à vos besoins spécifiques.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            Avec des milliers de drones synchronisés, nous créons des animations époustouflantes qui marquent les esprits.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 3: Technologie et Créativité */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-8 mb-10 lg:mb-20"
      >
        <motion.div className="w-full lg:w-1/2">
          <img
            src="https://ao-technology.com/wp-content/uploads/2024/01/projects_szf-nye2324_01d.jpg"
            alt="Team collaborating on a project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Innovation au service de vos événements
          </motion.h2>
          <p className="text-lg leading-relaxed mb-4">
            Chez Drone Cast, nous utilisons des technologies avancées pour :
          </p>
          <ul className="list-disc pl-6 text-lg space-y-3">
            <li>Créer des <span className="font-bold">spectacles lumineux personnalisés</span>.</li>
            <li>Synchroniser les drones avec des <span className="font-bold">effets visuels et sonores</span>.</li>
            <li>Offrir une <span className="font-bold">expérience immersive</span> à votre public.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            Chaque événement est une occasion unique de marquer les esprits grâce à notre créativité et notre expertise.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 4: Collaboration avec des Artistes */}
      <motion.div
        className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-10 lg:mb-20"
      >
        <motion.div className="w-full lg:w-1/2">
          <img
            src="https://www.allumee.com/wp-content/uploads/2024/01/allumee-drones-prets-a-decoller.webp"
            alt="Drones preparing for a show"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Collaboration artistique
          </motion.h2>
          <p className="text-lg leading-relaxed mb-4">
            Pour sublimer nos spectacles, nous collaborons avec :
          </p>
          <ul className="list-disc pl-6 text-lg space-y-3">
            <li><span className="font-bold">Compositeurs musicaux</span> pour des bandes-son uniques.</li>
            <li><span className="font-bold">Artistes voix off</span> pour des narrations captivantes.</li>
            <li><span className="font-bold">Studios d'enregistrement</span> pour une qualité audio exceptionnelle.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            La synchronisation des drones avec la musique et les effets sonores crée une immersion totale pour votre public.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SecondSection;