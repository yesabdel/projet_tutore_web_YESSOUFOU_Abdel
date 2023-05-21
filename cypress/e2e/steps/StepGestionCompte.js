import PageGestionCompte from "../pages/PageGestionCompte";

const pageGestionCompte = new PageGestionCompte();

class StepGestionCompte{

    ActiveCompte(data){
       pageGestionCompte.accesConfig()
       pageGestionCompte.accesUsers()
       pageGestionCompte.accesUsersList()
       pageGestionCompte.activationAccount(data)
    }
 
}

export default StepGestionCompte;