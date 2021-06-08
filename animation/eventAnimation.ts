import { gsap } from "gsap";


const setAnimation = () => {


  gsap.fromTo(
    ".eventAnimation",

    {
      opacity: 0,
      x: 0,
      y: -20,
      scale: 1
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,

      scrollTrigger: {
        trigger: ".eventAnimation",
        start: "top 50%",
        markers: false,
      },
    }
  );
};


export default setAnimation;
