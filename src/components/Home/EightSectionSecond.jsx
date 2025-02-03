import React from "react";

const logos = [
  {
    src: "https://static.wixstatic.com/media/9e80ac_19ef34629b2e4d32aa6d370671cb19b8~mv2.png/v1/crop/x_38,y_0,w_1239,h_990/fill/w_161,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DRONESOCCER_LOGO.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_643e32dbd3d244e4b57247d274ef0fea~mv2.jpg/v1/fill/w_129,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/drotek_logo.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_3060fad188fb445e958821b78d951260~mv2.jpg/v1/fill/w_129,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/C-12295__04959.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_1c4f47f6d4d24158a7ceada148d3c4cd~mv2.jpg/v1/fill/w_129,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/axial-facilities.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_3710185f7a1948278feb04f999da9f60~mv2.jpg/v1/fill/w_129,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/arma_environnement_logo.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_701fb7431f5c43269b676c33737a210c~mv2.jpg/v1/fill/w_129,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20ipf%20300x300.jpg",
    alt: "aaa",
  }
];

const ScrollInfinitSecond = ({ title, phrase }) => {
  return (
    <section className="bg-gray-100 text-black pt-8 pb-4">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8">{title}</h2>
      <p className="text-center text-lg font-extralight leading-8">{phrase}</p>

      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <img key={index} className="h-16" src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollInfinitSecond;