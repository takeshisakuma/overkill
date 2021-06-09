import { gsap } from "gsap";


const setAnimation = () => {
  gsap.fromTo(
    ".serviceIconAnimation",

    {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,

      scrollTrigger: {
        trigger: ".serviceIconAnimation",
        start: "top 90%",
        markers: false,
      },
    }
  );
};


export default setAnimation;
