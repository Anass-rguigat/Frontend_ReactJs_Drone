import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FirstSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [videoTitles, setVideoTitles] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const [visibleVideos, setVisibleVideos] = useState(12);
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
        className="bg-white text-black p-6 lg:p-16 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-xl font-bold text-redOne mb-3">
            Nos Réalisations
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold">
            Innovation pour vos besoins spécifiques
          </h1>
        </motion.div>

        {/* Grid for Video Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {videos.slice(0, visibleVideos).map((video, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a
                onClick={() => handleModalShow(video.id)}
                href="#"
                className="block relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                  alt={videoTitles[index]}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-lg font-medium text-white absolute top-0 left-0 p-4">
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
        </motion.div>

        {/* Show More Button */}
        {visibleVideos < videos.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="bg-redOne relative px-6 py-3 text-white rounded-full group focus:outline-none focus:ring-4 transition-all"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
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