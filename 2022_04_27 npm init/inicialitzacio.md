# Masterclass inicialització de projectes

Masterclass feta el 27 d'abril de 2022 per aprendre inicialització de projectes a l'itinerari de Node.js de la [IT Academy](https://www.barcelonactiva.cat/es/itacademy). Orientada a Node.js, però pot ser útil sobretot pels de React i Angular que també usen `npm`.

## Ús de Git

- Inicialització d'un repositori des de GitHub (amb un `README.md`)
- Sincronització del remot des de VSC (clonar repo a una carpeta local)
- Fer _commits_ cada cop que hi hagi un canvi significatiu (una funció, l'estructura d'un arxiu, etc)
- Afegir un `.gitignore` per no pujar al repo coses com `node_modules` o `.env` (veure el `.gitignore` de mostra [aquí](https://github.com/StratocasterO/masterclasses-it-academy/blob/master/.gitignore))
- Recordar **sincronitzar canvis** al final del dia de treball (no cal fer-ho a cada _commit_, però si cada cop que anem a canviar d'ordinador)
- NO GUARDAR MAI UN REPO DINS UN REPO ❌


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
