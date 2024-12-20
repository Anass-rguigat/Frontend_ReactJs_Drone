import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FirstSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [videoTitles, setVideoTitles] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const [visibleVideos, setVisibleVideos] = useState(11);
  const API_KEY = "AIzaSyAxFRApWcjBFt9XD_Rt8bpHDb8-HXcpPjY";
  const videos = [
    { id: "oR8mwu1z-No" },
    { id: "EC7PDevbOtE" },
    { id: "gAwT6TvRKyA" },
    { id: "Tx8r0zCnFuE" },
    { id: "fcMwT2knIB0" },
    { id: "VE328QesRVs" },
    { id: "XhkhAuRmb0U" },
    { id: "V5Kd6JFuMMA" },
    { id: "mZ0-O48iVsA" },
    { id: "Yk1pi2pT404" },
    { id: "kVtvAXG_42I" },
    { id: "hKFFMPPlXsw" },
    { id: "Jpq5DXxOghY" },
    { id: "FCmuejXPszE" },
    { id: "u-KtKlzVk90" },
    { id: "c2B7Ns1P5_0" },
    { id: "-5k8ga6CxKY" },
  ];

  useEffect(() => {
    const fetchTitles = async () => {
      const videoIdList = videos.map((video) => video.id).join(",");
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdList}&key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const titles = data.items.map((item) => {
          const title = item.snippet.title;
          return title.length > 20 ? title.slice(0, 20) + "..." : title;
        });
        setVideoTitles(titles);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };
  
    fetchTitles();
  }, []);

  const handleModalShow = (id) => {
    setVideoId(id);
    setShowModal(true);
  };

  const handleShowMore = () => {
    setVisibleVideos((prev) => prev + 10);
  };

  
  return (
    <>
      <motion.section
      className="bg-black text-gray-50 p-6 lg:p-16 w-full "
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      {/*Title */}
      
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase text-xl font-bold text-royalBlue mb-3"
        
        >
          Nos Realisations</p>
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold"
        
        >
        Innovation pour vos besoins spécifiques
        </h1>
        </motion.div>
          <motion.div className="py-4 px-2 mx-auto max-w-full sm:py-4 lg:px-6"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full w-full"
              >
              {/*Card */}
              <motion.div className="col-span-2 sm:col-span-1 md:col-span-2 bg-black h-auto md:h-full flex flex-col"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <a
                  onClick={() => handleModalShow(videos[0].id)}
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videos[0].id}/0.jpg`}
                    alt="1"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-1xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-1xl">
                    {videoTitles[0]}
                  </h3>
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>

              {/* Card*/}
              <motion.div className="col-span-2 sm:col-span-1 md:col-span-2 bg-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                <a
                  onClick={() => handleModalShow(videos[1].id)}
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videos[1].id}/0.jpg`}
                    alt="Gin"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-1xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-1xl">
                  {videoTitles[1]}
                  </h3>
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </div>
                </a>
              <motion.div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                {/* Card */}
                <a
                  onClick={() => handleModalShow(videos[2].id)}
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videos[2].id}/0.jpg`}
                    alt="Whiskey"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-1xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-1xl">
                  {videoTitles[2]}
                  </h3>
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </div>
                </a>

                {/* Card */}
                <a
                  onClick={() => handleModalShow(videos[3].id)}
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videos[3].id}/0.jpg`}
                    alt="Vodka"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-1xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-1xl">
                  {videoTitles[3]}
                  </h3>
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
              </motion.div>

            {/* Section */}
            <motion.div className="col-span-2 sm:col-span-1 md:col-span-1 bg-black h-auto md:h-full flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
              <a
                onClick={() => handleModalShow(videos[4].id)}
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={`https://img.youtube.com/vi/${videos[4].id}/0.jpg`}
                  alt="Brandy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-1xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-1xl">
                {videoTitles[4]}
                </h3>
                {/* Play Icon */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
          </motion.div>
          {/* New Row with 3 Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
  {videos.slice(5, visibleVideos).map((video, index) => (
    <motion.div
      key={index}
      className="bg-black h-auto flex flex-col relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <a
        onClick={() => handleModalShow(video.id)}
        href="#"
        className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
          alt={video.title}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>

        {/* Title */}
        <h3 className="z-10 font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-1xl">
          {videoTitles[index]}
        </h3>

        {/* Play Icon */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3l14 9-14 9V3z"
            />
          </svg>
        </div>
      </a>
    </motion.div>
  ))}
  </div>

        
        {/* Show More Button */}
        {visibleVideos < videos.length && (
          <div className="text-center mt-6">
            
            <button
            onClick={handleShowMore}
            style={{ backgroundColor: "#48bdd2" }}
            className="relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
          >
            <span className="text-white pr-5">Plus Info</span>
            <span className="absolute inset-y-0 right-4 flex items-center transition-transform duration-300 translate-x-0 group-hover:translate-y-2">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-white rotate-90"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>

            </span>
          </button>
          </div>
        )}
      </motion.section>

      {/* Modal for YouTube Video */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClose}
        >
          <div
            className="bg-black p-4 rounded-lg relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstSection;
