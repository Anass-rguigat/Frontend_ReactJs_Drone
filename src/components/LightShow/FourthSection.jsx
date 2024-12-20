import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FourthSection = () => {
  const [inView, setInView] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); 
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10"
        ref={sectionRef} 
      >
        <div className="relative mx-auto max-w-5xl text-center">
          
          <motion.h2
            className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            Pourquoi nous choisir
          </motion.h2>
          <motion.p
            className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1.2 }}
          >
            Drone Cast Company, seule société Marocaine à disposer d'une licence d'importation de drones Lumineux.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {['Raconter une histoire', 'Conception de spectacle personnalisée', 'Production photo/vidéo'].map((title, index) => (
            <motion.div
              key={title}
              className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : -100,
              }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                  borderColor: 'rgb(93, 79, 240)',
                }}
              >
                {/* Updated SVG icons */}
                {index === 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-5 3l1-6l-4-4l6-1l2-5l2 5l6 1l-4 4l1 6z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                )}
              </div>
              <motion.h3
                className="mt-6 text-gray-400"
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : -100,
                }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : -100,
                }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {title === 'Raconter une histoire'
                  ? "Mettez en valeur l'authenticité de votre marque avec des spectacles de lumière UAV qui donnent vie à votre entreprise ou à votre événement. Créez des scènes, des animations 3D et des mouvements réalistes qui propulsent votre histoire vers le ciel."
                  : title === 'Conception de spectacle personnalisée'
                  ? "Nous travaillerons pour correspondre à votre marque. Nous pouvons placer votre logo dans le ciel, sur des centaines de pieds de diamètre. Plus de drones signifie plus de détails."
                  : "Créez quelque chose d'unique qui ne peut être falsifié.Vous n'avez pas votre propre équipe vidéo ? Nous pouvons nous charger du tournage et/ou de la diffusion en direct de votre spectacle de lumière par drone."}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FourthSection;
