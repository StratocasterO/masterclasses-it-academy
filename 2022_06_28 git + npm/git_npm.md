# Masterclass GIT avançat i inicialització de projectes

Masterclass feta el 28 de juny de 2022 per aprendre funcionalitats avançades de Git i inicialització de projectes de Node a l'itinerari de Node.js de la [IT Academy](https://www.barcelonactiva.cat/es/itacademy). Sobretot  orientada a les especialitzacions que tenen entregues mitjançant pull requests, però serà útil per tothom.

>### Git:
>- Ús diari
>- Inicialització d'un repositori
>- Sincronització del remot des de VSC
>- Fork d'un altre repositori
>- Branques de treball
>- Pull requests al repo propi i a l'original
>
>### NPM:
>- npm init
>- scripts `prod` i `dev`
>- instalació de dependències
>- documentació

## Ús de Git

### Setup:
- crear repo a Github (amb `README.md` i `.gitignore`)
- clonar el repo desde VSC (inicialitza el repo i fixa el remote)
- `git config --global user.name "Omar Olmedo"`
- `git config --global user.email "omar@olmedo.com"`

### Workflow:
- sincronitzar canvis (pull o sync al VSC)
- commits a mesura que treballem (canvis significatius)
- rinse and repeat
- sincronitzar canvis (push o sync al VSC)

### Extres:
- Afegir un `.gitignore` per no pujar al repo coses com `node_modules` o `.env` (veure el `.gitignore` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/.gitignore))
- Recordar **sincronitzar canvis** al final del dia de treball (no cal fer-ho a cada _commit_, però si cada cop que anem a canviar d'ordinador)
- NO GUARDAR MAI UN REPO DINS UN REPO ❌


## Repositoris de proves

### Git inicial

Afegir repo

### Git avançat

Afegir repo

- fork del repo original
- clone del meu repo
- branch (dev_teams, api_rest, dados, sockets)
- pull request


## Repositori amb exercici de Git

En [aquest repositori](https://github.com/IT-Academy-BCN/node_git_initials) teniu instruccions per aprendre a fer un fork, clonar, modificar i fer pull request a un repositori col·laboratiu.

Si feu l'exercici, contacteu-me per discord perquè us accepti la pull request 😉


## Inicialització d'un projecte de Node.js

- `npm init` per crear el `package.json` (veure el `package.json` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/2022_04_27%20npm%20init/package.json))
- Crear scripts `start`, `dev` i `test`
- Instal·lar dependències en local per evitar que les globals no apareguin al `package.json` 
- Separar dependències de `prod` i `dev` perquè no s'instal·lin coses innecesàries
- Crear **documentació** clara i completa: descripció del projecte, instruccions de configuració i arrencada, aclaracions, enllaços d'interés, etc (veure el `README.md` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/2022_04_27%20npm%20init/README.md))


## Consells generals

- Usar només una finestra del VSC important les carpetes de treball al _workspace_
- `Windows + .` per accedir al selector d'emojis de Windows
- `Windows + v` per accedir al portapapers de Windows (per copiar diferents coses alhora i enganxar-les després)


## Extensions útils VSC

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph): per visualitzar l'arbre de Git del repositori
- [Better comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): per canviar el color dels comentaris en funció del símbol que posem al principi
- [Todo tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree): per guardar tots els comentaris amb l'etiqueta TODO a una pestanya. Útil per estructurar la feina i deixar-nos recordatoris per seguir treballant