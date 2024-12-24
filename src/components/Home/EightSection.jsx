import React from "react";

const logos = [
  {
    src: "https://static.wixstatic.com/media/9e80ac_5642ffddc71e40f7b9929b08ac64de8b~mv2.jpg/v1/fill/w_187,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20-%20Minist%C3%A8re%20de%20l'%C3%A9ducation%20Nationale%2C%20du%20pr%C3%A9scolaire%20et%20des%20Sports.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_ca8e36545932403e8ab0386347accd00~mv2.png/v1/fill/w_187,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rabat.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_304157ba7c7446e2a7249839edca4bdf~mv2.jpg/v1/fill/w_187,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/accor-logo.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_70dc976c21e649019530fe2a8c046e29~mv2.png/v1/fill/w_187,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ministere%20de%20jeuness.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_89750da9e43e4f8fb037782443bbc2da~mv2.jpg/v1/fill/w_187,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sonarges.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_0c4189bd1aa44cd594c531a3c680f161~mv2.png/v1/crop/x_0,y_7,w_225,h_212/fill/w_188,h_177,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/oasis.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_74c80aa2173b476087946a55da3b5c80~mv2.png/v1/fill/w_187,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/isf.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_f949d7a8c7314a0cad7187d4e8f56077~mv2.png/v1/crop/x_10,y_52,w_206,h_165/fill/w_188,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/frmss.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_47421c6e9e6d49168fae9e30224c3b70~mv2.jpg/v1/crop/x_76,y_0,w_361,h_288/fill/w_188,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_8d8ae84a2aa742babe412e18a3218a21~mv2.png/v1/crop/x_243,y_0,w_815,h_650/fill/w_188,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/labelvie.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_1135ea66c47a45bca24a21166a01ab67~mv2.png/v1/crop/x_261,y_0,w_877,h_700/fill/w_188,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Auto-Hall.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_66151483cb9b4d6e9183cedda08998b3~mv2.jpg/v1/crop/x_0,y_207,w_2048,h_1634/fill/w_188,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jawjab.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_f555bdd2334a4c3da3ff4dc26a0b7830~mv2.png/v1/crop/x_47,y_0,w_476,h_291/fill/w_245,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-carrion-cafe.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_689b8e8941ea4196b38f95b6a180b878~mv2.png/v1/fill/w_257,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_marrakechairshow.png",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_ac5a9c2c27a040c8a24136f7e780ab7f~mv2.jpg/v1/crop/x_0,y_132,w_1837,h_1466/fill/w_188,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-Choiseul-Africa-1.jpg",
    alt: "aaa",
  },
  {
    src: "https://static.wixstatic.com/media/9e80ac_2a770fe7f28f47879a38b95033c6a74d~mv2.png/v1/crop/x_9,y_0,w_1982,h_1581/fill/w_188,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_TotalEnergies_svg.png",
    alt: "aaa",
  },
];

const ScrollInfinit = ({ title, phrase }) => {
  const animationClass = "animate-slide-left-infinite";
  return (
    <section className="bg-gray-100 text-black pt-8 pb-4">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8">{title}</h2>
      <p className="text-center text-lg font-extralight leading-8">{phrase}</p>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className={`inline-flex w-max ${animationClass} group-hover:animation-pause`}>
          {logos.map((logo, index) => (
            <img key={index} className="mx-4 h-16" src={logo.src} alt={logo.alt} />
          ))}
          {/* Duplicate for seamless infinite scrolling */}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} className="mx-4 h-16" src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollInfinit;