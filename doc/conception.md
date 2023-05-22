<img src="logo_sogeti.png" width="30%" height="30%">

# Conception des cas de tests

## Tests à effectuer

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

| Test ID     | Test case           | Description                                                       | Types tests  | Prerequis                 | Assertions                                                                            |
| ----------- | ------------------- | ----------------------------------------------------------------- | ------------ | ------------------------- | ------------------------------------------------------------------------------------- |
| Cypress-001 | Login page          | Se connecter avec un<br />"compte valide"                         | test positif | ID:valide<br />Mdp:valide | Bienvenue<br /> Test Username                                                         |
| Cypress-002 | Login page          | Se connecter avec<br />"compte invalide"                          | test positif | ID:valide<br />Mdp:valide | Bienvenue<br /> Admin Test                                                           |
| Cypress-003 | Login page          | S'inscrire avec un<br />compte particulier                        | Test positif |                           |                                                                                       |
| Cypress-004 | Création de compte | S'inscrire avec<br />"un compte Pro"                              | test positif | Remplir le formulaire     | Le formulaire d'inscription<br /> s'affiche                                           |
| Cypress-005 | Création de compte | Se connecter avec<br /> "un compte particulier <br />existant " | test positif | Remplir le formulaire     | Le message s'affiche:<br />L’email est déjà utilisé.<br /> Essayez un autre email |
