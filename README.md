## Tools
[iloveimg](https://www.iloveimg.com/crop-image)

[Mockups](https://shots.so/)

# Despliege de la web creada con React js

Para desplegar una página hecha con React JS en GitHub Pages, hay varios pasos que debes seguir:

- Primero, debes crear un repositorio en GitHub con el mismo nombre que tu proyecto de React JS. Por ejemplo, si tu proyecto se llama <username>.github.io, tu repositorio debe tener el mismo nombre.
- Segundo, debes instalar el paquete gh-pages como una dependencia de desarrollo en tu proyecto. Puedes hacerlo con el comando `npm i -D gh-pages` o `pnpm add -D gh-pages`.
- Tercero, debes agregar una propiedad llamada homepage en tu archivo `package.json`, con el valor de la URL donde se va a desplegar tu página. Por ejemplo: 
```json
"homepage": "https://<username>.github.io"
```
- Cuarto, debes agregar dos scripts en tu archivo package.json, uno para precompilar tu proyecto y otro para desplegarlo en GitHub Pages. Por ejemplo, `"predeploy": "npm run build"` y `"deploy": "gh-pages -d dist"`.
- Quinto, debes ejecutar el comando `npm run deploy` o `pnpm deploy` para enviar tu proyecto a una rama llamada gh-pages en tu repositorio de GitHub.
- Sexto, debes ir a la configuración de tu repositorio en GitHub y habilitar la opción de GitHub Pages, seleccionando la rama gh-pages como fuente.
- Séptimo, debes esperar unos minutos a que GitHub Pages publique tu página y luego podrás acceder a ella desde la URL que especificaste en el paso tres.