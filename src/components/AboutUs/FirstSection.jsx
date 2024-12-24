import { useState } from "react";
import { motion } from "framer-motion";

function FirstSection() {
  const images = [
    "https://www.allumee.com/wp-content/uploads/2024/01/allumee-drones-prets-a-decoller.webp",
    "https://proteklabofrance.com/wp-content/uploads/2021/03/inspection-tructure-drone.jpg",
    "https://www.pacecat.net/wp-content/uploads/2024/06/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240604160133-800x450.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      className=" text-white p-6 lg:p-16 w-full max-w-screen-xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="uppercase text-xs font-bold text-redOne mb-3">À Propos</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
        QUI SOMMES-NOUS ?
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row w-full px-4 lg:px-8 py-8 gap-8 lg:gap-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="flex flex-col justify-center lg:w-1/2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-base lg:text-lg mb-5 leading-relaxed">
          Drone Cast Company est un prestataire de services spécialisé dans les solutions par drone. Notre offre de services s’articule autour de 3 principales branches :
          </p>
          <ul className="list-disc pl-5 text-base space-y-3">
            <li> <span className="font-bold">L’Evénementiel </span>avec essentiellement les spectacles de drones lumineux (ou Drone Light Show).
            </li>
            <li><span className="font-bold">Les services </span>où l’on propose à nos clients une palette de solutions dans le domaine de l’inspection industrielle, la sécurité, l’agriculture de précision, la vidéo, le cinéma, etc., à l’aide de drones équipés de caméras HD dotées de capteurs spécialisés (Lidar, thermique, infrarouge).
            </li>
            <li><span className="font-bold">Le Sport </span>en développant au Maroc le Drone Soccer, une nouvelle discipline « sportive » très en vogue en Asie et en Amérique du Nord.</li>
          </ul>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative flex flex-col justify-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Main Image */}
          <div className="relative w-full h-56 sm:h-72 lg:h-96">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />

            <motion.button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 hover:bg-opacity-50"
              
            >
              &#8249;
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 hover:bg-opacity-50"
              
            >
              &#8250;
            </motion.button>
          </div>

          <motion.div
            className="flex justify-center mt-5 space-x-4 overflow-x-auto py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 ${
                  currentIndex === index
                    ? "border-blue-400 scale-110"
                    : "border-gray-600"
                }`}
                onClick={() => handleThumbnailClick(index)}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default FirstSection;
