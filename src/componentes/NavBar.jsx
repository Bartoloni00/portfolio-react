import logo from '../assets/logo.svg';

import React, { useState, useEffect } from 'react';
import { IconoDescargar, IconoGithub, IconoLinkeding, IconoHamburguesa} from './Iconos';

// Definimos el componente de React como una función que devuelve un elemento JSX.
export const NavScrollExample = () => {

  // Definimos el estado inicial del componente con el hook useState.
  const [mostrarMenu, setMostrarMenu] = useState(true); // Estado que indica si se debe mostrar o no el menú
  const [prevScrollTop, setPrevScrollTop] = useState(0); // Estado que almacena la posición anterior de scroll
  const [scrollDirection, setScrollDirection] = useState('down'); // Estado que almacena la dirección del scroll ('up' o 'down')
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const menuClass = isOpen ? 'show' : 'hide';

  // Usamos el hook useEffect para añadir un listener de evento 'scroll' en la ventana del navegador 
  // y actualizar el estado del componente en base a la posición de scroll del usuario. 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Si el usuario scrollea hacia abajo y el menú está visible (mostrarMenu = true), se oculta el menú. 
      if (scrollTop > prevScrollTop && mostrarMenu) {
        setMostrarMenu(false);
        setScrollDirection('down');
      } 
      // Si el usuario scrollea hacia arriba y el menú está oculto (mostrarMenu = false), se muestra el menú.
      else if (scrollTop < prevScrollTop && !mostrarMenu) {
        setMostrarMenu(true);
        setScrollDirection('up');
      }

      // Actualizamos prevScrollTop con la posición actual de scroll.
      setPrevScrollTop(scrollTop);
    };

    // Agregamos el listener de evento 'scroll'.
    window.addEventListener('scroll', handleScroll);

    
    // Devolvemos una función de limpieza que elimina el listener de evento 'scroll' cuando el componente se desmonta.
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollTop, mostrarMenu]);

  // Creamos un objeto estiloMenu que se usará para aplicar un estilo CSS al elemento de navegación (nav) 
  // dependiendo del valor de mostrarMenu.
  const estiloMenu = {
    top: mostrarMenu ? 0 : '-50px',
    transitionDelay: scrollDirection === 'down' ? '2s' : '0s',
  };

  // Devolvemos un elemento JSX que contiene el elemento de navegación (nav) con el estilo aplicado. 
  // Aquí es donde iría el contenido del menú que queremos mostrar u ocultar dependiendo del scroll del usuario.
  return (
    <nav className={`menu-responsive ${isOpen ? 'mostrar' : ''}`} style={estiloMenu}> 
    <div className="ToggleMenu" onClick={toggleMenu}>
      <IconoHamburguesa />
    </div>
    <a href="#header"><img src={logo} alt="logo" className="logo"  onClick={toggleMenu}/></a>
    <ul>
      <li>
        <a href="#sobreMi"  onClick={toggleMenu}>Sobre mi</a>
      </li>
      <li>
        <a href="#proyectos"  onClick={toggleMenu}>Proyectos</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/abraham-bartoloni-068a7b1b5/" target='_blank'  onClick={toggleMenu}>
          <IconoLinkeding />
        </a>
      </li>
      <li>
        <a href="https://github.com/Bartoloni00" target='_blank'  onClick={toggleMenu}>
          <IconoGithub />
        </a>
      </li>
      <li>
        <a href="https://issuu.com/bartoloni/docs/curriculum_compressed" target='_blank'  onClick={toggleMenu}>
          <IconoDescargar />
        </a>
      </li>
      <li>
        <a href="#formulario"  onClick={toggleMenu}>
          <span id="btn-contacto">
            Contactame
          </span>
        </a>
      </li>
    </ul>
  </nav>
  
  );
}