import { useState, useEffect } from "react";


function Marquesina() {
  let array = ['javascript', 'react', 'jquery', 'php', 'css', 'bootstrap' , 'html' , 'seo/sem' ,'ux', 'illustraitor', 'photoshop'];
  const habilidades = array.map((skil,index) =>
    <span key={index}>{skil}</span>
  );
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const watermarkStyle = {
    transform: `translateX(${scrollPos}px)`
  };
  return (
    <div className="watermark" style={watermarkStyle}>
      {habilidades}
    </div>
  );
}

export default Marquesina;
