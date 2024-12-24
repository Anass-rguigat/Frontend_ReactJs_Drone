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
      className=" w-[80%] mx-auto text-white py-10 lg:py-20 px-5 lg:px-20"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
       
      >
        Découvrez Drone Cast et nos spectacles aériens
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row items-center gap-8 mb-10 lg:mb-20"
        
      >
        <motion.div className="w-full lg:w-1/2" >
          <img
            src="https://ao-technology.com/wp-content/uploads/2024/01/projects_szf-nye2324_01d.jpg"
            alt="Drone team at work"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Présentation de Drone Cast</motion.h2>
          <p className="text-lg leading-relaxed">
            Drone Cast est une équipe dynamique et multidisciplinaire composée de pilotes de drones professionnels, d’ingénieurs spécialisés, d'infographistes, ainsi que de créateurs 3D. Grâce à l’expertise de chacun de ses membres, Drone Cast se distingue par sa capacité à offrir des prestations sur mesure et innovantes, alliant technologie de pointe et créativité. Notre équipe passionnée met son savoir-faire au service de vos événements pour créer des expériences inoubliables et marquer les esprits.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-10 lg:mb-20"
       
      >
        <motion.div className="w-full lg:w-1/2" >
          <img
            src="https://www.allumee.com/wp-content/uploads/2024/01/allumee-drones-prets-a-decoller.webp"
            alt="Drones ready for launch"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Spectacles Aériens de Drones au Maroc</motion.h2>
          <p className="text-lg leading-relaxed">
            Nous sommes fiers d’être le seul prestataire autorisé à organiser des spectacles de drones lumineux au Maroc. Que vous souhaitiez célébrer une occasion spéciale, organiser un événement d'entreprise ou marquer le lancement d'un nouveau produit, nos spectacles aériens sauront captiver votre public. Avec des milliers de drones synchronisés pour créer des animations époustouflantes, nous transformons vos événements en moments mémorables et visuellement impressionnants.
          </p>
        </motion.div>
      </motion.div>

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
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Technologie et Créativité au Service de Votre Événement</motion.h2>
          <p className="text-lg leading-relaxed">
            Chez Drone Cast, chaque événement est une occasion unique d’illustrer la créativité et l'innovation. Nous utilisons des technologies avancées pour concevoir des spectacles lumineux personnalisés, adaptés à vos besoins spécifiques. Grâce à la synchronisation parfaite entre les drones et les éléments visuels, nous offrons une expérience sensorielle complète qui captive le regard et l’imagination de vos invités, tout en renforçant l’impact de votre message ou de votre marque.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-10 lg:mb-20"

      >
        <motion.div className="w-full lg:w-1/2" >
          <img
            src="https://www.allumee.com/wp-content/uploads/2024/01/allumee-drones-prets-a-decoller.webp"
            alt="Drones preparing for a show"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Collaboration avec des Artistes et Compositeurs</motion.h2>
          <p className="text-lg leading-relaxed">
            Pour sublimer l’expérience de nos spectacles, nous collaborons avec des compositeurs musicaux, des studios d’enregistrement et des artistes voix off. La synchronisation des drones lumineux avec la musique et les effets sonores crée une immersion totale dans l'événement. Chaque spectacle devient ainsi une œuvre audiovisuelle où lumière, son et technologie s’entrelacent pour offrir une expérience captivante et inoubliable, qui ravira le public et laissera une empreinte durable.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SecondSection;
