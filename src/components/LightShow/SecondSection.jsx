import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SecondSection = () => {
  return (
    <div className="bg-black">
      <TextParallaxContent
        imgUrl="https://images.squarespace-cdn.com/content/v1/63e52de8d10880064dde1060/1697569214873-N7HBYO7DHBERLD6V3DZT/IMG_1479.jpg"
        heading="Un Événement Privé Éblouissant"
      >
        <Content 
          title="100 DRONES" 
          subtitle="Un Événement Privé Éblouissant" 
          description="Découvrez la puissance et les capacités de notre flotte de 100 drones, parfait pour les événements privés. Ce pack est conçu pour impressionner vos invités avec des performances aériennes captivantes et un spectacle lumineux qui saura marquer les esprits." 
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://skyelementsdrones.com/wp-content/uploads/2023/08/sacramento-drone-show.jpg"
        heading="Une Activation de Marque à Couper le Souffle"
      >
        <Content 
          title="200 DRONES" 
          subtitle="Une Activation de Marque à Couper le Souffle" 
          description="Pour les activations de grande marque qui exigent complexité et un facteur « WOW » garanti, notre pack de 300 drones offre une résolution inégalée. Ce choix ultime propulse votre événement ou votre publicité vers de nouveaux sommets, créant une expérience immersive qui captivera votre public." 
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://i.ytimg.com/vi/ZI-qtMTS8fM/maxresdefault.jpg"
        heading="L'Apogée du Divertissement Aérien"
      >
        <Content 
          title="500 DRONES" 
          subtitle="L'Apogée du Divertissement Aérien" 
          description="Faites passer votre événement au niveau supérieur avec notre forfait 500 drones. Offrant une expérience immersive et une résolution exceptionnelle, ce pack représente le summum du divertissement et de la publicité. C'est le choix idéal pour ceux qui souhaitent laisser une empreinte indélébile dans l'esprit des spectateurs." 
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
        paddingTop: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh] w-[90%] mx-auto">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(50vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        opacity,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, -300]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [1, 0 , 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content = ({ title, subtitle, description}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 flex items-center justify-center">
    <motion.h2
      className="col-span-1 text-3xl font-bold md:col-span-4 text-gray-50 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {title}
    </motion.h2>
    <div className="col-span-1 md:col-span-8">
      <motion.p
        className="mb-4 text-xl text-gray-50 md:text-2xl text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.p
        className="mb-8 text-xl text-gray-50 md:text-2xl text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {description}
      </motion.p>

    </div>
  </div>
);


export default SecondSection;
