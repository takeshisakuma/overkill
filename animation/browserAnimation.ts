import { gsap } from "gsap";


const setAnimation = () => {
  gsap.fromTo(
    ".browserAnimation",

    {
      opacity: 0,
      x: -20,
      y: 0,
      scale: 1,
      rotate: -10
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 0.6,
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".browserAnimation",
        start: "top 50%",
        markers: false,
      },
    }
  );
};


export default setAnimation;
