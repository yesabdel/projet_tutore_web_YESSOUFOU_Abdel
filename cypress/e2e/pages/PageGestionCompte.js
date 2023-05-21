const LOCATOR_BUTTON_CONFIG =        '//*[@id="adminConfig"]'
const LOCATOR_BUTTON_USER = '//a[@routerlink="/admin/utilisateur"]'
const LOCATOR_BUTTON_USER_LIST = '//a[@routerlink="/admin/userList"]'
const balamou = '//tr[contains(.,${data.username})]//*[contains(text(), "Approuver")]'


class PageGestionCompte{

    accesConfig(){
        return cy.xpath(LOCATOR_BUTTON_CONFIG).click();
    }

    accesUsers(){
        return cy.xpath(LOCATOR_BUTTON_USER).click();
    }

    accesUsersList(){
        return cy.xpath(LOCATOR_BUTTON_USER_LIST).click();
    }


    activationAccount(data){
        cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(), "Approuver")]`).click()
        cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(), "Bloquer")]`).should('be.visible');
    }
}

export default PageGestionCompte