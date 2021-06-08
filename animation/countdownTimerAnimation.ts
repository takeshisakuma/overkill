import { gsap } from "gsap";


const setAnimation = () => {
  gsap.fromTo(
    "#countdownTimerAnimation",

    {
      opacity: 0,
      x: -200,
      y: 0,
      scale: 1
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,

      scrollTrigger: {
        trigger: "#countdownTimerAnimation",
        start: "top 80%",
        markers: false,
      },
    }
  );
};


export default setAnimation;
