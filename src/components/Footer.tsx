import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

function Footer() {



  //Product usestate
  const [product, setProduct] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/product")) {
      setProduct(true);
    } else {
      setProduct(false);
    }
  }, [location]);


  return (
    <div className={`${product && `hidden`} relative p-2 text-center text-sm font-roboto-mono tracking-tighter font-black text-gray-700 hover:text-black transition-all`}>
      <a href="https://jkeung.tech/">Designed & Developed with 💖 by Jason Keung 2022</a>
    </div>
  );
}

export default Footer;
