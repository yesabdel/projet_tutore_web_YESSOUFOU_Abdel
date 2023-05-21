import { faker } from "@faker-js/faker";
import 'cypress-wait-until';
const locatorLinkRegister = '//a[@href="/register"]';
//const locatorLinkRegister = //a[contains(text(),"Vous n'avez pas de compte ? Créez-en un ici")]
const locatorInputPrenom = '//input[@formcontrolname="nom"]';
const locatorInputNom = '//input[@formcontrolname="prenom"]';
const locatorInputDateNaissance = '//input[@formcontrolname="dateNaissance"]';
const locatorInputAdresse = '//input[@formcontrolname="adresse"]';
const locatorSelectPays = '//select[@formcontrolname="currentPays"]';
const locatorSelectVille = '//select[@formcontrolname="ville"]';
const locatorInputCP = '//input[@formcontrolname="codePostal"]';
const locatorInputPassport = '//input[@formcontrolname="passport"]';
const locatorInputCIN = '//input[@formcontrolname="cin"]';
const locatorInputUsername = '//input[@formcontrolname="username"]';
const locatorInputTel = '//input[@formcontrolname="tel"]';
const locatorInputPassword = '//input[@formcontrolname="password"]';
const locatorInputConfirmPassword =  '//input[@formcontrolname="confirmPassword"]';
const locatorInputNomConjoint = '//input[@formcontrolname="nomConjoint"]';
const locatorInputPrenomConjoint = '//input[@formcontrolname="prenomConjoint"]';
const locatorInputDateNaissanceConjoint =  '//input[@formcontrolname="dateNaissanceConjoint"]';
const locatorSelectRaisonSociale = '//select[@formcontrolname="raisonSociale"]';
const locatorInputSiret = '//input[@formcontrolname="siret"]';
const locatorSelectNombreSalarie = '//select[@formcontrolname="nombreSalarie"]';
const locatorButtonValider = '//button[@class="btn btn-primary"]';

class PageSouscription {
  clickRegister() {
    return cy.xpath(locatorLinkRegister).click();
  }

  setType(index) {
    cy.get('input[name="type"]').eq(index).check();
  }

  setPrenom(texte) {
    return cy.xpath(locatorInputPrenom).first().type(texte);
  }

  setNom(texte) {
    return cy.xpath(locatorInputNom).first().type(texte);
  }

  setDateNaissance(texte) {
    return cy.xpath(locatorInputDateNaissance).first().type(texte);
  }

  setAdresse(texte) {
    return cy.xpath(locatorInputAdresse).first().type(texte);
  }

  setPays(texte) {
    return cy.xpath(locatorSelectPays).first().select(texte);
  }

  setVille(texte) {
    return cy.xpath(locatorSelectVille).first().select(texte);
  }

  setCodePostal(texte) {
    return cy.xpath(locatorInputCP).first().type(texte);
  }

  setPassport(texte) {
    return cy.xpath(locatorInputPassport).first().type(texte);
  }

  setCIN(texte) {
    return cy.xpath(locatorInputCIN).first().type(texte);
  }

  setEmail(texte) {
    return cy.xpath(locatorInputUsername).first().type(texte);
  }


  generateEmail(firstName, lastName) {
    const domain = faker.internet.domainName();
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  }

  setTel(texte) {
    return cy.xpath(locatorInputTel).first().type(texte);
  }

  setPassword(texte) {
    return cy.xpath(locatorInputPassword).first().type(texte);
    
  }

  setPasswordConfirm(texte) {
    return cy.xpath(locatorInputConfirmPassword).first().type(texte);
  }


  setNomConjoint(texte) {
    return cy.xpath(locatorInputNomConjoint).type(texte);
  }

  setPrenomConjoint(texte) {
    return cy.xpath(locatorInputPrenomConjoint).type(texte);
  }

  setDateNaissanceConjoint(texte) {
    return cy.xpath(locatorInputDateNaissanceConjoint).type(texte);
  }

  setRaisonSociale(texte) {
    return cy.xpath(locatorSelectRaisonSociale).first().select(texte);
  }

  setSiret(texte) {
    return cy.xpath(locatorInputSiret).first().type(texte);
  }

  setNumberOfEmployees(texte) {
    return cy.xpath(locatorSelectNombreSalarie).first().select(texte);
  }

  validate() {
    return cy.xpath(locatorButtonValider).first().click();
        
  }
}

export default PageSouscription;
