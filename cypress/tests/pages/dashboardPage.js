class DashboardPage {
    selectorsList() {
        const selectors = {
            tabList: "[data-test='nav-transaction-tabs']",
            newTransactionButton: "[data-test='nav-top-new-transaction']",
        }   
        return selectors;
    }

    checkDashboardPage() {
        cy.location('pathname').should('eq', '/'); 
        cy.get(this.selectorsList().tabList, { timeout: 10000 }).should('be.visible');
    }

    accessNewTransaction() {
        cy.get(this.selectorsList().newTransactionButton).click();
    }
}

export default DashboardPage;