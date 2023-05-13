import homeImg from '../assets/home-img-min.png';
import { useState, useEffect, useCallback } from "react";

export const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Programador Web","Diseñador Web"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const period = 1500;
  
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, period, text, toRotate]);
  
  useEffect(() => {
    let ticker = setInterval(tick, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);
  

  return (
    <section id="header">
      <div>
        <p>Encantado de conocerte</p>
        <h1>Soy Bartoloni Abraham</h1>
        <h2>{text}</h2>
      </div>
      <img src={homeImg} alt='Programador web'/>
    </section>
  )
}
