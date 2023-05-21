
<img src="logo_sogeti.png" width="30%" height="30%">


# Conception des cas de tests

## tests à effectuer

1. Authentification
   Compte professionnel

   * Se connecter et identifiant valide
   * Se connecter avec un mot de passe valide

   Compte Admin

   * Se connecter et identifiant valide
   * Se connecter avec un mot de passe valide

   **2. Création de compte**

   * Compte professionnel
   * Compte particulier

TEST TYPE : Test case Positive / Test case Negative / Scenario E2E

| Test ID     | Test case           | Description                               | Types tests   | Prerequis                     | Assertions                                  |
| ----------- | ------------------- | ----------------------------------------- | ------------- | ----------------------------- | ------------------------------------------- |
| Cypress-001 | Login page          | Se connecter avec un<br />"un champ vide" | test négatif | ID:champ vide<br />Mdp:valide | Bienvenue<br /> Test Username               |
| Cypress-002 | Login page          | Se connecter avec un<br />compte Admin    | test positif  | ID:valide<br />Mdp:valide     | Bienvenue<br /> Admin Test                 |
| Cypress-003 | Login page          | Se connecter avec un<br />compte Admin    | Test négatif | ID:valide<br />Mdp:invalide   | Mot de passe ou<br />compte invalide        |
| Cypress-004 | Création de compte | Particulier                               | test positif  | Remplir le formulaire         | Le formulaire d'inscription<br /> s'affiche |
| Cypress-005 | Création de compte | Professionnel                             | test positif  | Remplir le formulaire         | Le formulaire d'inscription<br />s'affiche  |
