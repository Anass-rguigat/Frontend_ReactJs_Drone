import React from 'react';
import { motion } from 'framer-motion';

const ThirdSection = () => {
    return (
        <motion.div
            className="bg-gray-100 dark:bg-black py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }} 
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[600px] rounded-lg bg-black mb-4">
                        <img
                            className="w-full h-full object-cover rounded"
                            src="https://drotek.com/wp-content/uploads/2023/12/Drotek-IOS2-Eclate_1500px-1.png"
                            alt="Drone IO Star product view"  
                        />
                        </div>
                    </div>
                    <div className="md:flex-1 mt-10 px-4">
                        <h2 className="text-4xl font-bold dark:text-white mb-8">
                            PRÉSENTATION DU DRONE IO STAR
                        </h2>
                        <p className="text-2xl font-bold dark:text-redOne mb-8">
                            Les caractéristiques
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 bold dark:text-gray-300">POIDS : </span>
                                <span className="text-gray-600 dark:text-gray-300">283g</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">DIMENSIONS :</span>
                            <span className="text-gray-600 dark:text-gray-300">190 X 190 X 52 MM (sans les hélices)</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">POSITIONNEMENT :</span>
                            <span className="text-gray-600 dark:text-gray-300">GNSS RTK (précision centimétrique)</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">VITESSE :</span>
                            <span className="text-gray-600 dark:text-gray-300">5 m/s</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">BATTERIE :</span>
                            <span className="text-gray-600 dark:text-gray-300">Jusqu'à 20 minutes</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">FRÉQUENCES RADIO :</span>
                            <span className="text-gray-600 dark:text-gray-300">5GHz, redondance 2.4GHz</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">CHARGE UTILE :</span>
                            <span className="text-gray-600 dark:text-gray-300">Jusqu'à 70 g (en option)</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ThirdSection;
