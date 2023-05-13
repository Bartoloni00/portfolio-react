//import React from 'react'; lo comente porque no era nacesario
// Importamos los componentes necesarios de react-bootstrap y nuestro componente Tarjeta
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Tarjeta } from './Tarjeta';

// Importamos los íconos y el archivo JSON con los proyectos
import proyectos from '../proyectos.json';
import { IconoDiseno, IconoOtros, IconoProgramador } from './Iconos';

// Creamos una instancia de require.context para poder importar las imágenes de los proyectos
const proyectosImg = require.context('../assets/mockups', true);


export const Projects = ()=> {
  return (
    <section id='proyectos'>
        <h2>Proyectos</h2>
    <Tabs
      id="justify-tab-example"
      className="mb-3"
      justify
      defaultActiveKey='programacion'
    >
      <Tab eventKey="disenos" title={<><IconoDiseno /> Diseño</>} >
      <div className='proyecto-seccion'>
          {proyectos.proyectos
        .filter((proyecto) => proyecto.categoria === "diseno")
        .map((proyecto, index) => (
          <Tarjeta
            key = {index}
            img={proyectosImg(`./${proyecto.img}.png`)}
            alt={proyecto.alt}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            link={proyecto.link}
          />
        ))}
      </div>
      </Tab>
      <Tab eventKey="programacion" title={<><IconoProgramador /> Programacion</>}>
      <div className='proyecto-seccion'>
          {proyectos.proyectos
        .filter((proyecto) => proyecto.categoria === "programacion")
        .map((proyecto, index) => (
          <Tarjeta
            key = {index}
            img={proyectosImg(`./${proyecto.img}.png`)}
            alt={proyecto.alt}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            link={proyecto.link}
          />
        ))}
      </div>
      </Tab>
      <Tab eventKey="otros" title={<><IconoOtros /> Otros</>}>
      <div className='proyecto-seccion'>
      {proyectos.proyectos
    .filter((proyecto) => proyecto.categoria === "otros")
    .map((proyecto, index) => (
      <Tarjeta
        key = {index}
        img={proyectosImg(`./${proyecto.img}.png`)}
        alt={proyecto.alt}
        titulo={proyecto.titulo}
        descripcion={proyecto.descripcion}
        link={proyecto.link}
      />
    ))}
      </div>
      </Tab>
    </Tabs>
    </section>
  );
}
