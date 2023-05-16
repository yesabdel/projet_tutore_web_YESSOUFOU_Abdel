# Projet Tutoré

**2 sujets sont proposés** 

- Les tests API avec Robot Framework sur Open Cruise

- Les tests WEB avec Cypress sur Open Cruise

**Les environnements de tests**

- https://opencruise-ok.sogeti-center.cloud  (version V1.1.0 de l'application)  
- https://opencruise-ko.sogeti-center.cloud  (nouvelle version V1.2.0 de l'application à qualifier)  


**Quelque soit le projet choisi**

Vous avez créé un projet GIT privé sur Github accessible au formateur nommé "projet_tutore_(api ou web)_nom_prenom"  
(même si le projet est privé, les user/mdp d'open cruise ne doivent jamais apparaitre sous github)  
Tous les documents sont au format markdown dans un répertoire doc (sauf ce README.md à la racine)  
Les tests automatisés seront dans un répertoire tests  

- [CONCEPTION.md](doc/CONCEPTION.md)
  - Identifier des tests (le volume est à votre convenance)
  - Détailler brièvement ces tests (sans le détail step par step)
- [AUTOMATISATION.md](doc/AUTOMATISATION.md)
  - Automatiser quelques un de ces tests
  - Détailler ce qui est nécessaire pour comprendre et utiliser vos tests automatisés
- [EXECUTION.md](doc/EXECUTION.md)
  - Exécuter vos tests manuels et automatisés 
  - Produire un rapport d'exécution pour le client avec toutes les informations importantes du contexte d'exécution
  - Détailler une ou plusieurs anomalies que vous auriez pu trouver avec toutes les informations importantes du contexte d'exécution

**Daily à 9h30**  
A tour de rôle :  
- ce qui a été fait la veille  
- ce que vous allez faire ce jour  
- votre météo (point de blocage s'il y en a)  

**Accompagnement formateur**  
Le formateur doit recevoir vos solicitations en message privé, il vous aidera à trouver les solutions  
Si plusieurs solicitations sur un problème commun il fera une démonstration  

**La mise à jour de votre travail sous git**  
Vous devez pousser vers github au minimum 2 fois par jour (fin de matinée et fin de journée)  

**Le Dernier jour**  
Présentation l'après midi à tour de rôle de 10 minutes chacun  



# Aide markdown

https://www.markdownguide.org/cheat-sheet/

Extensions VS Code  
https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one  
https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf  


**Faire votre TODO liste**  

- [x] Préparer la liste des tests
- [ ] Spécifier vos tests
- [ ] Préparer vos besoins en terme de données de test
- [ ] Comprendre à quoi serviront vos 2 environnements de test Open Cruise
- [ ] Préparer votre socle d'automatisation
- [ ] Documenter votre socle d'automatisation
- [ ] Réfléchir à la conception de vos tests automatisés
- [ ] Développer vos tests automatisés
- [ ] Générer une analyse statique de votre code
- [ ] Exécuter vos tests manuels et automatisés
- [ ] Analyser vos résultats 
- [ ] Générer un rapport d'exécution de vos tests
- [ ] Créer des anomalies liés à l'application Open Cruise



**Faire un tableau**  
MARKDOWN https://www.tablesgenerator.com/markdown_tables  
HTML     https://www.tablesgenerator.com/html_tables  



TEST TYPE : Test case Positive / Test case Negative / Scenario E2E  

| TEST ID  | TEST NAME     | TEST DESCRIPTION / GOALS             | TEST TYPE          | TEST TAG   | PREREQUISITES           | ASSERTIONS |
|----------|---------------|--------------------------------------|--------------------|------------|-------------------------|------------|
| JIRA-001 | Connect Admin | Connect with valid credentials admin | Test case Positive | smoke-test | valid credentials admin |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">TEST ID</th>
    <th class="tg-0pky">TEST NAME</th>
    <th class="tg-0pky">TEST DESCRIPTION / GOALS</th>
    <th class="tg-0pky">TEST TYPE</th>
    <th class="tg-0pky">TEST TAG</th>
    <th class="tg-0pky">PREREQUISITES</th>
    <th class="tg-0pky">ASSERTIONS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">JIRA-001</td>
    <td class="tg-0pky">Connect Admin</td>
    <td class="tg-0pky">Connect with valid credentials admin</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">smoke-test</td>
    <td class="tg-0pky">valid credentials admin</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
</tbody>
</table>

**Insérer du code**  

```
*** Test Cases ***
Se Connecter Compte Admin
    [Tags]    jira-01
    Choisir Langue
    Se Connecter Compte Valide    ${COMPTE_ADMIN}
```


```shell 
# Commande pour afficher la liste des packages  
py -m pip list
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

**Insérer une image/capture d'écran**  

![SOGETI LOGO](doc/sogeti.png)
