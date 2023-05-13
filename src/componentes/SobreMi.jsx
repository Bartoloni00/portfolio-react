import React,{useRef} from "react";
import styled from 'styled-components'
import Imgprueba from '../assets/about.png';
import sobremi2 from '../assets/imagenes-sobre-mi_Mesa de trabajo 1.svg';
import sobremi3 from '../assets/imagenes-sobre-mi-03.svg';
import sobremi4 from '../assets/imagenes-sobre-mi-02.svg';





export const SobreMi = ()=>{
    const slideshow = useRef(null);

    const siguiente = ()=>{
        
        //comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){
            //obtenemos el primer elemento del slidershow
            const primerElemento = slideshow.current.children[0];
            //establecemos la transicion para el slideshow
            slideshow.current.style.transition = `300ms ease-out all`;

            const tamanoSlide = slideshow.current.children[0].offsetWidth;
            //movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            const transicion = ()=>{
                //reiniciamos la posicion del slideshow
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0px)`;
            //tomamos el elemento y lo mandamos al final
            slideshow.current.appendChild(primerElemento);
            slideshow.current.removeEventListener('transitionend',transicion);
            }

            slideshow.current.addEventListener('transitionend',transicion);

        }
    }
    const anterior = ()=>{
        if(slideshow.current.children.length > 0){
            //obtenemos el ultimo elemento del slideshow
            const index = slideshow.current.children.length -1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            //movemos el slideshow
            const tamanoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            },30);
        }
    }

    return(
        <ContendorPrincipal id="sobreMi">
            <h2>Sobre mi</h2>
            <ContenedorSlideShow ref={slideshow}>
                <Slide>
                        <img src={Imgprueba} alt=""/>
                        <TextoSlide>
                            <h3>
                            ¡Hola! Mi nombre es Abraham Bartoloni, soy programador y diseñador web.
                            </h3>
                            <p>
                            Soy un apasionado del desarrollo web y aplicaciones con experiencia de usuario intuitiva y atractiva. Tengo habilidades en programación, diseño gráfico, front-end y back-end. Busco mejorar y aprender continuamente para ofrecer lo mejor a mis clientes. Emocionado por nuevas oportunidades y llevar mis habilidades al siguiente nivel.
                            </p>
                        </TextoSlide>
                </Slide>
                <Slide>
                        <img src={sobremi2} alt=""/>
                        <TextoSlide>
                            <h3>
                            Aprendizaje continuo y autodidactismo
                            </h3>
                            <p>
                            Como estudiante de la carrera de diseño y programación web, tengo una gran pasión por el aprendizaje continuo y la adquisición de nuevas habilidades. Soy autodidacta y he participado en múltiples cursos para mejorar mi conocimiento y habilidades en programación, diseño y otras tecnologías relacionadas, constantemente buscando nuevas formas de mejorar mi trabajo y ofrecer lo mejor a mis clientes.
                            </p>
                        </TextoSlide>
                </Slide>
                <Slide>
                        <img src={sobremi3} alt=""/>
                        <TextoSlide>
                            <h3>
                            Comunicación efectiva y trabajo en equipo
                            </h3>
                            <p>
                            Además de mi experiencia en programación y diseño web, poseo habilidades en comunicación efectiva y trabajo en equipo adquiridas en mi amplia experiencia laboral como camarero en eventos, casinos y restaurantes. Estos trabajos me permitieron interactuar con diferentes tipos de personas y mejorar mi capacidad para trabajar en equipo, colaborar con otros y mantener una comunicación clara y efectiva. Estoy seguro de que estas habilidades serán una ventaja en cualquier proyecto de desarrollo de software que requiera colaboración y trabajo en equipo.
                            </p>
                        </TextoSlide>
                </Slide>
                <Slide>
                        <img src={sobremi4} alt=""/>
                        <TextoSlide>
                            <h3>
                            Atención al detalle y calidad del trabajo
                            </h3>
                            <p>
                            Tengo una gran atención al detalle y enfoco en la calidad de mi trabajo como programador y diseñador web. Busco mantener un código limpio y fácil de entender, y busco la retroalimentación de mis clientes para asegurar su satisfacción y la calidad de mi trabajo. Considero que estas habilidades me hacen un candidato fuerte en cualquier proyecto de desarrollo web.
                            </p>
                        </TextoSlide>
                </Slide>
            </ContenedorSlideShow>
            <Controles className="slider-buttons">
                <Boton onClick={anterior}>prev</Boton>
                <Boton derecho onClick={siguiente}>sig</Boton>
            </Controles>
        </ContendorPrincipal>
    );
};

const ContendorPrincipal = styled.div`
    position: relative;
`;
const ContenedorSlideShow = styled.div`
width: inherit;//ajusta el ancho a su contenedor padre
    display: flex;
    flex-wrap:nowrap;
`;
const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    vertical-align: top;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const TextoSlide = styled.div`
background: rgba(0, 0, 0, 0.5);
color: #fff;
width: 100%;
padding: 10px 60px;
text-align: left;
align-self: flex-end;

h3 {
  text-align: center;
}

@media screen and (max-width: 992px) {
  position: relative;
  width: 100%;
}
`;

const Controles = styled.div`
    position: absolute;
    top: 17%;
    z-index: 20;
    width:100%;
    height:100%;
    pointer-events: none;
`;
const Boton = styled.button`
    pointer-events: all;
    background: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
    }

    path {
        filter:${props=>props.derecho ? 'drop-shadow(-2px 8px 0px #fff)': 'drop-shadow(2px 8px 0px #fff)'};
    }

    ${props => props.derecho ? 'right: 0;': 'left: 0;'}
`;