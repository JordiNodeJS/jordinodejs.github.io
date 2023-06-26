## Tools
[iloveimg](https://www.iloveimg.com/crop-image)

[Mockups](https://shots.so/)

# Despliege de la web creada con React js

Para desplegar una página hecha con React JS en GitHub Pages, hay varios pasos que debes seguir:

- Primero, debes crear un repositorio en GitHub con el mismo nombre que tu proyecto de React JS. Por ejemplo, si tu proyecto se llama <username>.github.io, tu repositorio debe tener el mismo nombre.
- Segundo, debes instalar el paquete gh-pages como una dependencia de desarrollo en tu proyecto. Puedes hacerlo con el comando `npm i -D gh-pages` o `pnpm add -D gh-pages`.
- Tercero, debes agregar una propiedad llamada homepage en tu archivo `package.json`, con el valor de la URL donde se va a desplegar tu página. Por ejemplo: 
```json
{
  ...
  "homepage": "https://jordinodejs.github.io/",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
  ..
  },
  "dependencies": {
            ...
  },
  "devDependencies": {
            ...
  }
}

"homepage": "https://<username>.github.io"
```
- Cuarto, debes agregar dos scripts en tu archivo package.json, uno para precompilar tu proyecto y otro para desplegarlo en GitHub Pages. Por ejemplo, `"predeploy": "npm run build"` y `"deploy": "gh-pages -d dist"`.
- Quinto, debes ejecutar el comando `npm run deploy` o `pnpm deploy` para enviar tu proyecto a una rama llamada gh-pages en tu repositorio de GitHub.
- Sexto, debes ir a la configuración de tu repositorio en GitHub y habilitar la opción de GitHub Pages, seleccionando la rama gh-pages como fuente.
- Séptimo, debes esperar unos minutos a que GitHub Pages publique tu página y luego podrás acceder a ella desde la URL que especificaste en el paso tres.

## dev config
` nano ~/.profile `

```bash

  GNU nano 5.8                 /c/Users/neo/.profile

alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gco="git checkout"
alias gcb="git checkout -b"
alias gb="git branch"
alias gba="git branch -a"
alias gbvva="git branch -vva"
alias gm="git merge"
alias gbd="git branch -d"
alias gbD="git branch -D"
alias gpush="git push"
alias gpull="git pull"
alias gpusho="git push origin"
alias gl="git log --oneline --graph"
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Crese>
alias dev="npm run dev"
alias gcamend="git commit --amend -m"
alias grm="git remote remove origin"
alias gremote="git remote -vv"
alias gset="git remote set-url origin git:" #url here

```