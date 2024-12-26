import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white w-full  text-gray-600 body-font relative flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-full rounded-lg overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.369241739508!2d-6.868405673660905!3d33.95734777273387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda713a5d2f007b3%3A0xd958042b90a96062!2sDrone%20Cast%20Company%20-%20N%C2%B01%20au%20Maroc%20Drone%20Show%20Light!5e0!3m2!1sfr!2sma!4v1735076452959!5m2!1sfr!2sma"
            style={{ filter: " opacity(1)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADRESSE</h2>
              <p className="mt-1">Rue Ardanne, Imm 14, Appt 8, Mahaj Ryad - 10000 Rabat, Maroc</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-redOne leading-relaxed">contact@dronecast.io</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TÉLÉPHONE</h2>
              <p className="leading-relaxed">+212 537 713 659</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="lg:w-1/3 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">CONTACTEZ-NOUS</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Nous sommes à votre écoute pour toute question ou demande concernant nos services. Que ce soit pour organiser un spectacle de drones, obtenir des informations sur nos prestations ou discuter d'un projet personnalisé, nous serons ravis de vous répondre.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nom Complet</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="telephone" className="leading-7 text-sm text-gray-600">Numéro de téléphone</label>
            <input
              type="number"
              id="telephone"
              name="telephone"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
