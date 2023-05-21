import { faker } from "@faker-js/faker";
import PageSouscription from "../pages/PageSouscription"

const pageSouscription = new PageSouscription;

class StepSouscription{

    CreatePart(data){
        pageSouscription.clickRegister()
        pageSouscription.setType(data.type)
        const prenom = faker.person.firstName()
        data.prenom = prenom
        pageSouscription.setPrenom(prenom)
        const nom = faker.person.lastName()
        data.nom = nom
        pageSouscription.setNom(nom)
        pageSouscription.setDateNaissance(data.dateNaissance)
        pageSouscription.setAdresse(data.adresse)
        pageSouscription.setPays(data.pays)
        pageSouscription.setVille(data.ville)
        pageSouscription.setCodePostal(data.codePostal)
        pageSouscription.setPassport(data.passport)
        pageSouscription.setCIN(data.cin)
        const username = pageSouscription.generateEmail(prenom, nom)
        data.username = username
        pageSouscription.setEmail(username)
        pageSouscription.setTel(data.tel)
        pageSouscription.setPassword(data.password)
        pageSouscription.setPasswordConfirm(data.confirmPassword)
        const nomconj = faker.person.lastName()
        data.nomConjoint = nomconj
        pageSouscription.setNomConjoint(nomconj)
        const prenomconj = faker.person.lastName()
        data.prenomConjoint = prenomconj
        pageSouscription.setPrenomConjoint(prenomconj)
        pageSouscription.setDateNaissanceConjoint(data.dateNaissanceConjoint)
        pageSouscription.validate()
        return data


    }

    CreatePro(data){
        pageSouscription.clickRegister()
        pageSouscription.setType(data.type)
        const prenom = faker.person.firstName()
        data.prenom = prenom
        pageSouscription.setPrenom(prenom)
        const nom = faker.person.lastName()
        data.nom = nom
        pageSouscription.setNom(nom)
        pageSouscription.setDateNaissance(data.dateNaissance)
        pageSouscription.setAdresse(data.adresse)
        pageSouscription.setPays(data.pays)
        pageSouscription.setVille(data.ville)
        pageSouscription.setCodePostal(data.codePostal)
        pageSouscription.setPassport(data.passport)
        pageSouscription.setCIN(data.cin)
        const username = pageSouscription.generateEmail(prenom, nom)
        data.username = username
        pageSouscription.setEmail(username)
        pageSouscription.setTel(data.tel)
        pageSouscription.setPassword(data.password)
        pageSouscription.setPasswordConfirm(data.confirmPassword)
        pageSouscription.setRaisonSociale(data.raisonSociale)
        pageSouscription.setSiret(data.siret)
        pageSouscription.setNumberOfEmployees(data.nombreSalarie)
        pageSouscription.validate()
        return data


    }

    CreatePartExistant(data){
        pageSouscription.clickRegister()
        pageSouscription.setType(data.type)
        pageSouscription.setPrenom(data.prenom)
        pageSouscription.setNom(data.nom)
        pageSouscription.setDateNaissance(data.dateNaissance)
        pageSouscription.setAdresse(data.adresse)
        pageSouscription.setPays(data.pays)
        pageSouscription.setVille(data.ville)
        pageSouscription.setCodePostal(data.codePostal)
        pageSouscription.setPassport(data.passport)
        pageSouscription.setCIN(data.cin)
        pageSouscription.setEmail(data.username)
        pageSouscription.setTel(data.tel)
        pageSouscription.setPassword(data.password)
        pageSouscription.setPasswordConfirm(data.confirmPassword)
        pageSouscription.setNomConjoint(data.nomConjoint)
        pageSouscription.setPrenomConjoint(data.prenomConjoint)
        pageSouscription.setDateNaissanceConjoint(data.dateNaissanceConjoint)
        pageSouscription.validate()
        return data
}
}

export default StepSouscription