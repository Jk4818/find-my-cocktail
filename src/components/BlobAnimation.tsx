import React from "react";
import { blob } from "stream/consumers";

function BlobAnimation() {
  const blobTypes = [
    {
      blob: (
        <>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.9,-67.3C40.7,-54.9,32,-32.7,39.8,-17.6C47.6,-2.4,71.9,5.7,75.6,14C79.3,22.3,62.3,30.8,47.6,33.2C33,35.7,20.7,32.2,9,39.6C-2.6,47.1,-13.7,65.6,-26.6,70.8C-39.5,76,-54.4,68,-66.5,56.3C-78.6,44.7,-87.9,29.3,-86.8,14.5C-85.7,-0.2,-74.2,-14.4,-63.8,-25.8C-53.4,-37.1,-44,-45.6,-33.6,-55C-23.1,-64.4,-11.6,-74.7,2.5,-78.6C16.5,-82.4,33,-79.7,36.9,-67.3Z"
              transform="translate(100 100)"
              className="fill-current text-blue-400"
            />
          </svg>
        </>
      ),
    },
    {
      blob: (
        <>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 350"
            className="fill-current text-red-400"
          >
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </>
      ),
    },
    {
      blob: (
        <>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.7,-49.3C35.6,-38.2,41.2,-29.8,51.2,-19.9C61.2,-9.9,75.6,1.5,75.5,11.7C75.4,22,60.8,31,49.4,41.1C38,51.2,29.8,62.5,18.7,67.4C7.6,72.4,-6.4,71,-21,68.2C-35.6,65.4,-50.7,61.2,-60.1,51.5C-69.5,41.7,-73.1,26.4,-74.6,11.1C-76.2,-4.1,-75.7,-19.2,-68.4,-29.6C-61.2,-40.1,-47.1,-45.8,-34.6,-54.7C-22.1,-63.7,-11,-75.9,-0.5,-75C10,-74.2,19.9,-60.4,27.7,-49.3Z"
              transform="translate(100 100)"
              className="fill-current text-purple-400"
            />
          </svg>
        </>
      ),
    },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute animation-delay-5000 top-80 bottom-0 my-auto left-40 right-0 mx-auto w-[40rem] h-[40rem] animate-blob mix-blend-multiply filter blur-xl">
        {blobTypes[2].blob}
      </div>
      <div className="absolute top-0 bottom-0 my-auto left-0 right-80 mx-auto w-[45rem] h-[45rem] animate-blob mix-blend-multiply filter blur-xl">
        {blobTypes[0].blob}
      </div>

      <div className="absolute animation-delay-3000 top-0 bottom-80 my-auto left-0 right-0 mx-auto w-[30rem] h-[30rem] animate-blob mix-blend-multiply filter blur-xl">
        {blobTypes[1].blob}
      </div>
    </div>
  );
}

export default BlobAnimation;
