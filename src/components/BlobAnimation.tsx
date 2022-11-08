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
    {
      blob: (
        <>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.9,-17.2C30.5,-2.7,46.8,5.9,47.9,14.9C49,23.9,34.9,33.5,23,33.9C11.1,34.3,1.5,25.5,-13.4,20.9C-28.2,16.4,-48.4,16,-58.5,4.1C-68.6,-7.8,-68.7,-31.3,-57.2,-46.1C-45.8,-60.8,-22.9,-66.8,-9.1,-59.6C4.7,-52.3,9.4,-31.8,19.9,-17.2Z"
              transform="translate(100 100)"
              className="fill-current text-orange-400"
            />
          </svg>
        </>
      ),
    },
    {
      blob: (
        <>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M56.8,-58.6C71.8,-55,80.9,-35.5,84,-15.2C87.1,5,84.2,26,70.4,32.1C56.7,38.2,32.2,29.6,15.1,31.6C-2,33.6,-11.7,46.2,-25.2,49.8C-38.8,53.4,-56.1,47.9,-61.3,36.5C-66.5,25.2,-59.5,8,-50.9,-3.4C-42.3,-14.8,-32.1,-20.4,-23.3,-25.1C-14.5,-29.8,-7.3,-33.7,6.8,-41.8C20.9,-49.9,41.7,-62.2,56.8,-58.6Z"
              transform="translate(100 100)"
              className="fill-current text-gray-400"
            />
          </svg>
        </>
      ),
    },
    {
      blob: (
        <>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M27.5,-21.8C41.8,-13.2,63.7,-6.6,63.6,-0.1C63.4,6.3,41.2,12.6,26.9,21.8C12.6,31.1,6.3,43.3,-6,49.3C-18.4,55.3,-36.7,55.2,-39.7,46C-42.6,36.7,-30.1,18.4,-29.5,0.6C-28.8,-17.1,-40,-34.1,-37.1,-42.7C-34.1,-51.4,-17.1,-51.5,-5.2,-46.3C6.6,-41,13.2,-30.4,27.5,-21.8Z"
              transform="translate(100 100)"
              className="fill-current text-green-400"
            />
          </svg>
        </>
      ),
    },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute -top-20 -left-20  w-[40rem] h-[40rem] sm:animate-blob-2 mix-blend-multiply ">
        {blobTypes[3].blob}
      </div>

      <div className="absolute animation-delay-3000 -bottom-20 right-0 mx-auto w-[40rem] h-[40rem] sm:animate-blob-2 mix-blend-multiply ">
        {blobTypes[2].blob}
      </div>
      <div className="absolute top-40 bottom-0 my-auto animation-delay-5000 -left-80 right-80 mx-auto w-[45rem] h-[45rem] sm:animate-blob mix-blend-multiply ">
        {blobTypes[0].blob}
      </div>

      <div className="absolute animation-delay-3000 top-0 bottom-80 my-auto left-0 right-0 mx-auto w-[30rem] h-[30rem] sm:animate-blob mix-blend-multiply ">
        {blobTypes[1].blob}
      </div>

      <div className="absolute -bottom-40 -left-40  w-[45rem] h-[45rem] sm:animate-blob mix-blend-multiply ">
        {blobTypes[4].blob}
      </div>

      <div className="absolute animation-delay-5000 -top-20 -right-40 mx-auto w-[45rem] h-[45rem] sm:animate-blob-2 mix-blend-multiply ">
        {blobTypes[5].blob}
      </div>
    </div>
  );
}

export default BlobAnimation;
