# Introduccion al proyecto

"Este proyecto es un portfolio personal de un diseñador y desarrollador web. Aquí, podrás encontrar información sobre mi experiencia, habilidades y algunos de los proyectos en los que he trabajado utilizando diversas tecnologías.

El portfolio está construido utilizando la librería de JavaScript React y también cuenta con algunos archivos en PHP y JSON. El objetivo principal de este proyecto es demostrar mis habilidades y experiencia en el desarrollo web y proporcionar a los reclutadores una visión detallada de mis proyectos anteriores para facilitar el proceso de aplicación al mercado laboral.

En este portfolio, encontrarás secciones dedicadas a mi experiencia laboral, habilidades técnicas y proyectos destacados, los cuales están organizados por tecnología y categoría. También se incluyen enlaces a mis perfiles en redes sociales y mi dirección de correo electrónico para contactarme directamente.

Espero que este portfolio sea útil para que los reclutadores conozcan mis habilidades y experiencia, y para que pueda demostrar mi capacidad para diseñar y desarrollar proyectos web de alta calidad."

# Estructura del proyecto

Todo el codigo se encuentra en la carpeta src en la cual te encontraras los archivos que finalmente se renderizaran en la web, junto con procesar.php (el cual se encarga de enviar el formulario al email) y proyectos.json en el cual se encuentran todos los proyectos que se renderizaran en la pagina.
ademas src posee dos carpetas: assets y componentes
en la carpeta assets todas las imagenes utilizadas en la web junto a una carpeta llamada mockups las cuales son las imagenes que acompañan a cada proyecto.
en la carpeta componentes encontraras cada componente utilizado Form, Header, Iconos (archivo que contiene varios componentes svg de iconos creados por mi) marquee (componente el cual utilizamos en otro componente llamado Skills) navBar, projects, SobreMi y Tarjeta(componente el cual utilizamos en otro componente llamado Projects)

# Propiedades
propiedades: el unico componente que utiliza propiedades es Tarjeta : el cual podemos ver que se utiliza en Projects.jsx, cada propiedad (exeptuando key) podemos apreciar que viene del archivo json

# Librerias utilizadas:
react-bootstrap: la utilizo en Projects.jsx para hacer las  Tabs.
styled-components: Utilizada en SobreMi.jsx para crear componentes con styled

# Como iniciar el proyecto

abre la consola y coloca: "npm start" (sin las comillas) y se abrira la app en localhost:3000
