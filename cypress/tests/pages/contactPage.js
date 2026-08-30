class ContactPage {
    selectorsList() {
        const selectors = {
            contactListItem: "[data-test='user-list-item-GjWovtg2hr']",
            contactList: "[data-test='user-list']",
        };

        return selectors;
    }

    selectContact() {
        cy.log('🔎 Aguardando lista de contatos...');

        cy.get(this.selectorsList().contactList, { timeout: 10000 })
            .should('be.visible');

        cy.log('👤 Selecionando contato...');

        cy.get(this.selectorsList().contactListItem, { timeout: 10000 })
            .should('be.visible')
            .click();
    }
}

export default ContactPage;