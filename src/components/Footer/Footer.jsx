import React from "react";

const Footer = () => {
  return (
    <footer  className="text-center text-surface/75 bg-neutral-900/50 dark:text-white/75 lg:text-left">
      {/*
  <div className="flex bg-gray-900 items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
    <div className="me-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div className="flex justify-center">
      {[
        "facebook-f",
        "twitter",
        "google",
        "instagram",
      ].map((icon) => (
        <a key={icon} href="#!" className="me-6 text-gray-600 dark:text-gray-300">
          <i className={`fab fa-${icon} text-lg`}></i>
        </a>
      ))}
    </div>
  </div>

  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          DRONE CAST
        </h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, dolor cumque? Excepturi natus quod atque magnam animi esse officia doloribus eaque, architecto sequi quo nobis nemo, dolorum incidunt ipsa omnis.
          Ratione perferendis voluptates numquam excepturi laborum, accusamus quae fuga dolorem magnam aut eius voluptatibus laboriosam. Ducimus officiis.
        </p>
      </div>

      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Drones
        </h6>
        {["Angular", "React", "Vue", "Laravel"].map((product) => (
          <p key={product} className="mb-4">
            <a href="#!" className="text-gray-600 dark:text-gray-300">
              {product}
            </a>
          </p>
        ))}
      </div>

      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Useful Links
        </h6>
        {["Carriere", "Settings", "Orders", "Help"].map((link) => (
          <p key={link} className="mb-4">
            <a href="#!" className="text-gray-600 dark:text-gray-300">
              {link}
            </a>
          </p>
        ))}
      </div>

      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3">
            <i className="fas fa-home"></i>
          </span>
          Rue Ardanne, Imm 14, Appt 8, Mahaj Ryad - 10000 Rabat, Maroc
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3">
            <i className="fas fa-envelope"></i>
          </span>
          contact@dronecast.io
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3">
            <i className="fas fa-phone"></i>
          </span>
          +212 537 713 659
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <span className="me-3">
            <i className="fas fa-print"></i>
          </span>
          +212 661 736 073
        </p>
      </div>
    </div>
  </div> 
*/}
      <div className="bg-neutral-900/50 p-6 text-center">
        <span>© 2025 Copyright:</span>
        <a
          href="https://tw-elements.com/"
          className="font-semibold text-gray-600 dark:text-gray-300"
        >
          ANASS RGUIGAT
        </a>
      </div>
    </footer>
  );
};

export default Footer;
