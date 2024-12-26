import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Shows = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black ">
      <motion.div
        className=" absolute top-0 left-0 right-0 flex flex-col justify-center items-center text-center pt-16  z-10"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }} 
      >
        <p className="text-white uppercase text-xl font-bold mb-4" >
          réalisations
        </p>
        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6  leading-tight">
          NOS DERNIERS PROJETS
        </h1>
      </motion.div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const [videoTitle, setVideoTitle] = useState("");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch(
          `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${card.videoId}`
        );
        const data = await response.json();
        const trimmedTitle = data.title
          ? data.title.slice(0, 20)
          : "Untitled Video";
        setVideoTitle(
          trimmedTitle + (data.title && data.title.length > 20 ? "..." : "")
        );
      } catch (error) {
        console.error("Error fetching video title:", error);
        setVideoTitle("Untitled Video");
      }
    };

    fetchTitle();
  }, [card.videoId]);

  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg cursor-pointer">
      
      <div
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${card.videoId}/maxresdefault.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-white z-10">
        <a
          href={`https://www.youtube.com/watch?v=${card.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold hover:underline"
        >
          {videoTitle}
        </a>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-lg font-medium">Plus Shows</span>
          <span className="text-lg font-medium inline-block translate-y-0.5 pb-2">&rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default Shows;

const cards = [
  { videoId: "oR8mwu1z-No", title: "Drone Show 1", id: 1 },
  { videoId: "fcMwT2knIB0", title: "Drone Show 2", id: 2 },
  { videoId: "VE328QesRVs", title: "Drone Show 3", id: 3 },
  { videoId: "c2B7Ns1P5_0", title: "Drone Show 4", id: 4 },
  { videoId: "VE328QesRVs", title: "Drone Show 5", id: 5 },
  { videoId: "gAwT6TvRKyA", title: "Drone Show 6", id: 6 },
  { videoId: "XhkhAuRmb0U", title: "Drone Show 7", id: 7 },
];
