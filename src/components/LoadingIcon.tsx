import React from 'react';
import Loading from "../assets/images/loading_icon.gif";

function LoadingIcon() {
  return (
    <div className="w-8 flex items-center gap-2">
        <img
          src={Loading}
          alt="new"
          className="h-full aspect-square mix-blend-multiply rounded-xl object-cover"
        />
      </div>
  );
}

export default LoadingIcon;