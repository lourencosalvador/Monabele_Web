import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export const Test = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: "#pin-windmill",
        start: "50% 50%",
        endTrigger: "#pin-windmill-wrap",
        end: "bottom 50%",
      },
    });

    tl.to("#pin-windmill-div", {
      x: -1200,
    });

    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id="pin-windmill-wrap" className="h-screen bg-gray-200">
      <div id="pin-windmill" className="mt-40 h-64 flex justify-center items-center">
        <div id="pin-windmill-div" className="fixed w-20 h-20 bg-red-500"></div>
      </div>
    </div>
  );
};

