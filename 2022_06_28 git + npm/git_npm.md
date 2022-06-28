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
- commits a mesura que treballem (canvis significatius, tants com calguin)
- sincronitzar canvis (push o sync al VSC)

### Extres:
- Afegir un `.gitignore` per no pujar al repo coses com `node_modules` o `.env` (veure el `.gitignore` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/.gitignore))
- Recordar **sincronitzar canvis** al final del dia de treball (no cal fer-ho a cada _commit_, però si cada cop que anem a canviar d'ordinador)
- NO GUARDAR MAI UN REPO DINS UN REPO ❌


## Repositoris de proves

### Git inicial

Hem fet [aquest repo](https://github.com/StratocasterOO/git_basics) per provar les funcionalitats bàsiques.

### Git avançat

Hem fet [aquest repo](https://github.com/StratocasterOO/nodeInitialDemo) per provar les funcionalitats avançades:

- fork del repo original
- clone del meu repo
- branch (dev_teams, api_rest, dados, sockets)
- pull request

Les branques han quedat així (visualitzades amb l'extensió [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)):

![imatge de les branques del repositori de prova](img/git%20graph.PNG)

I les pull requests així:

![imatge de les pull requests del repositori de prova](img/pull%20requests.PNG)


## Repositori amb exercici de Git

En [aquest repositori](https://github.com/IT-Academy-BCN/node_git_initials) teniu instruccions per aprendre a fer un fork, clonar, modificar i fer pull request a un repositori col·laboratiu.

Si feu l'exercici, contacteu-me per discord perquè us accepti la pull request 😉


## Inicialització d'un projecte de Node.js

En aquesta mateixa carpeta podeu veure i provar el projecte de Node que hem creat a la masterclass (amb les dependències `colors`, `jest`, `nodemon` i `dotenv`).

- `npm init` per crear el `package.json` (veure el `package.json` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/2022_06_28%20git%20%2B%20npm/package.json))
- Crear scripts `start`, `dev` i `test`
- Instal·lar dependències en local per evitar que les globals no apareguin al `package.json` 
- Separar dependències de `prod` i `dev` perquè no s'instal·lin coses innecesàries
- Crear **documentació** clara i completa: descripció del projecte, instruccions de configuració i arrencada, aclaracions, enllaços d'interés, etc (veure el `README.md` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/2022_06_28%20git%20%2B%20npm/README.md))


## Consells generals

- Usar només una finestra del VSC important les carpetes de treball al _workspace_
- `Windows + .` per accedir al selector d'emojis de Windows