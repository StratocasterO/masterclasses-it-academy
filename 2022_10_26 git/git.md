# Masterclass GIT 
Masterclass feta pel [Rubén Alcalde]() el 26 d'octubre per aprendre les funcionalitats bàsiques de git a l'itinerari de Node.js de la [IT Academy](https://www.barcelonactiva.cat/es/itacademy).

## Ús de GIT

Ús diari, còpia de seguretat, treball en diferents entorns, control de versions, compartimentització de les actualitzacions i _features_...


## Funcionalitats comuns

Configuració:
- `git config --global user.name "John Doe"`
- `git config --global user.email "johndoe@example.com"`
- Credencials de Windows

Comandes:
- `git clone`
- `git add <fitxer>`
- `git commit -m "<missatge del commit>"`
- `git status` (per comprovar els arxius que s'estan versionant)
- `git log` (per veure l'estat del repo: commits, branques, etc)
- `git push origin <branca>`
- `git pull origin <branca>`


## Gitflow

Branques _production_ i _staging_ (o _main_ i _dev_), branques per _features_ o per _developer_, documentació amb READMEs...

<!-- - Forks (des de Github) -->
- `git branch <branca nova>`
- `git checkout <branca>`
- `git checkout -b <branca nova>` (fa les dues coses alhora)
- Pull requests (al teu i altres repos)