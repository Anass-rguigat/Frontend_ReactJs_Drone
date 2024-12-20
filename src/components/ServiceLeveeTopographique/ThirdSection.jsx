import React from "react";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <motion.section
      className="bg-black text-white py-12 px-6 lg:px-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="w-[60%] mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-royalBlue uppercase text-sm font-bold mb-4">
          Fonctionnement
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
        Précision et Efficacité dans les Levés Topographiques avec Drones
        </h1>
        <p className="text-gray-400 text-lg">
        Nos solutions de levés topographiques par drone offrent une efficacité incomparable dans la collecte de
          données de terrain avec une précision millimétrique. Grâce à nos drones équipés de technologies avancées,
          nous fournissons des cartes et des modèles 3D extrêmement détaillés pour des projets de grande envergure.
        </p>
      </motion.div>

      {/* Steps and Image */}
      <motion.div
        className="w-[60%] flex flex-col lg:flex-row gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Content - Steps */}
        <div className="flex-1">
          {["Collecte de Données Précises", "Analyse Rapide du Terrain", "Modélisation 3D Avancée"].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 rounded-full bg-royalBlue flex items-center justify-center text-white font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step}</h3>
                <p className="text-gray-400">
                  {index === 0
                    ? "Nos drones capturent des données topographiques de manière extrêmement précise grâce à des capteurs LiDAR et photogrammétriques."
                    : index === 1
                    ? "Grâce à la rapidité des drones, nous réduisons les délais de collecte de données et permettons une analyse en temps réel."
                    : "Nous créons des modèles 3D interactifs et des cartes détaillées du terrain, utiles pour l’urbanisme, la construction, et l’aménagement du territoire."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Content - Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnt1MNEgLQd2NqN0AxNtf-bnn3ibdBXq7p2gV9PVf73wVw2GWLXgecoT_iEWQagzI41o&usqp=CAU"
            alt="Drone Show"
            className="w-full h-auto rounded-lg object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Security and Compliance */}
      <motion.div
        className="w-[60%] bg-royalBlue p-6 rounded-lg mt-8 lg:mt-12 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-4 text-black">Gagnez en Précision et en Productivité avec nos Solutions par Drone</h3>
        <p className="leading-relaxed text-black">
        Avec l’utilisation de nos drones, nous vous permettons de réaliser des levés topographiques dans des
          zones difficiles d'accès, tout en obtenant des résultats d'une précision inégalée. Nos solutions
          sont adaptées à des secteurs variés, allant de l’agriculture à l’urbanisme et la construction.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
