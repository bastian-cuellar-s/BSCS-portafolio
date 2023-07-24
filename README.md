<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    Es un sitio web personal y una plantilla de portafolio alojada en GitHub Pages, diseñada para mostrar mis proyectos recientes. URL del sitio / Demo: 
    <a href="https://bastian-cuellar-s.github.io/home/">hashirshoaeb.github.io/home</a>
  </p>
</p>

[![Node Version](https://img.shields.io/static/v1?label=Node&message=v18.13.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=8.11.0&color=cb0000&style=for-the-badge)](https://nodejs.org)

[![Site preview](/public/social-image.png)](https://hashirshoaeb.github.io/home)

## Table of Contents

- [Technology Stack 🛠️](#technology-stack-)
- [Structure ⚓](#structure-)
- [Sharing 💗](#sharing-)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)
- [Showcase 🚀](#showcase-)

## Technology Stack 🛠️

Dependencies definidas en package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure ⚓

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements(

## Sharing 💗

El proyecto es de código abierto. Siéntete libre de crear tu propia versión. Todo lo que necesitas hacer es hacer un fork de este repositorio, editar src/editable-stuff/config.js y agregar tu currículum. ¡Marca con una estrella ⭐ si te gusta el proyecto!

## Prerequisites 🍪

Debes tener [Node.js](https://nodejs.org/en/) y [Git](https://git-scm.com/) instalados en tu PC. También debes tener una cuenta en GitHub.

## Setup And Deployment 🔧

1. Para comenzar, haz un Fork de este repositorio a tu cuenta de GitHub.
2. Clona el repositorio forkeado desde tu cuenta usando:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Abre el archivo [src/editable-stuff/config.js](./src/editable-stuff/config.js) en un editor y edítalo.


4. Agrega tu currículum como <resume.pdf> en lugar de [src/editable-stuff/resume.pdf](./src/editable-stuff/).

5. Edita el [title](./public/index.html#L34) y la [description](./public/index.html#L13) en el archivo [public/index.html](./public/index.html).

6. Cambia la URL en el archivo [package.json](./package.json).

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   O para desplegar en un dominio personalizado, consulta [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson).


7. Después de editar, ejecuta los siguientes comandos en la terminal:

   ```bash
   npm install
   npm start
   ```

8. Después de editar, ejecuta los siguientes comandos en la terminal:

   ```bash
    npm run build
    npm run deploy
   ```

   O para desplegar en <username>.github.io, consulta [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) y [pages.js](./pages.js).

9. ¡Felicitaciones! Tu sitio está en funcionamiento. Para verlo en vivo, visita:

   ```https
     https://<your-username>.github.io/home
   ```

10. Para cambiar la imagen en miniatura:

    - Navega hasta la carpeta "public".  
    - Allí encontrarás "social-image.png".
    - Bórrala.   
    - Toma una captura de pantalla de tu versión y renómbrala como "social-image.png" y colócala en la misma carpeta.  
    
   La próxima vez que hagas cambios, repite desde el paso 8.


## Showcase 🚀

Have you changed something in the code to create your own version? Feel free to share with me, I will list them in this space.