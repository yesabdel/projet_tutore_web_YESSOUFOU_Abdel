import LoginPage from "../pages/LoginPage";
import LoginStep from "../steps/LoginStep";
import StepSouscription from "../steps/StepSouscription";
import StepGestionCompte from "../steps/StepGestionCompte";


describe("TEST WEB OPEN CRUISE", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });
  it("Cypress_001 ******* Connexion Compte Valide *******",{ tags: '@smoke' }, () => {
    
    const loginStep = new LoginStep();
    cy.log(`Se Connecter un Compte Valide`);
    loginStep.setLogin(Cypress.env("username"),Cypress.env("password"));
    loginStep.checkMessage("Bienvenue ADMIN TEST");
    cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
  });
   

  it("Cypress_002 ******* Connexion avec compte invalide *******", () => {
    const loginStep = new LoginStep();
    cy.log(`Se connecter avec Compte invalide`);
    loginStep.setLogin("XXXXXXX", "YYYYYY");
    cy.wait(1000);
    loginStep.CheckFailMessage("mot de passe ou identifiant invalide");
    cy.xpath('//div[@role="alertdialog"]').screenshot();
  });

  it("Cypress_003 ******* Inscription avec compte Particulier *******", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   S'inscrire avec un Compte Particulier    ************");
    cy.fixture("data-part.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      data = stepSouscription.CreatePart(data);
      cy.writeFile(
        "cypress/fixtures/userPart.json",
        JSON.stringify(data, null, 2),
        "utf8"
      );
      cy.wait(3000);
      const loginStep = new LoginStep();
      cy.log(`Se Connecter en tant que Admin`);
      loginStep.setLogin(Cypress.env("username"),Cypress.env("password"));
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data);
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot();
      loginStep.Logout(); //Se deconnecter
      cy.log("Se connecter avec le commpte créer");
      loginStep.setLogin(data.username, data.password);
      cy.wait(3000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
      loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
      loginStep.Logout();
    });
  });
  it("Cypress_004 **** Inscription avec un compte Pro ****", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   S'inscrire avec Compte Professionnel    ************");
    cy.fixture("data-pro.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      data = stepSouscription.CreatePro(data);
      cy.writeFile("cypress/fixtures/userPro.json", JSON.stringify(data, null, 2), "utf8");
      cy.wait(2000);
      const loginStep = new LoginStep();
      cy.log(`Se Connecter en tant que Admin`);
      loginStep.setLogin(Cypress.env("username"),Cypress.env("password"));
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data);
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot();
      loginStep.Logout(); //Se deconnecter
      cy.log("Se connecter avec le commpte créer");
      loginStep.setLogin(data.username, data.password);
      cy.wait(2000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
      loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
      loginStep.Logout();
      
    });
  });
  it.only("Cypress_005 **** Inscription avec compte particulier existant *****", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   S'inscrire avec un Compte Particulier Existant  ************");
    cy.fixture("userPart.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      stepSouscription.CreatePartExistant(data);
      
      cy.wait(4000);
      const loginStep = new LoginStep();
      loginStep.CheckFailMessage(" l’email est déjà utilisé. Essayez un autre email ");
      cy.xpath('//div[@role="alertdialog"]').screenshot();
    });
  });
});
