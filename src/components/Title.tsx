import React from "react";

import {motion} from "framer-motion"

function Title() {

  const transition = { duration: 0.5, ease: "easeInOut" }

  return (
    <div className="relative w-[40rem] h-max 2xl:scale-[0.6] 3xl:scale-100 origin-left">
      <h1 className="font-raleway font-black leading-tight tracking-wide text-7xl text-black">
        Cocktails Made Easy.
      </h1>
      <svg
        width="91"
        height="21"
        viewBox="0 0 91 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-20 right-16"

      >
        <motion.path
          d="M4 4C21.2148 13.8101 61.9156 27.5443 87 4"
          stroke="black"
          strokeWidth="7"
          strokeLinecap="round"
        
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      
    </div>
  );
}

export default Title;
