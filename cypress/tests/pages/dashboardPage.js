class DashboardPage {
    selectorList()  {
        const selectors = {
            tabList: "[data-test='nav-transaction-tabs']",
        }


        return selectors;

    }   

    
    
    checkDashboardPage() {
        cy.location('pathname').should('eq', '/'); 
        cy.get(this.selectorsList().tabList, { timeout: 10000 }).should('be.visible');
    }
}
    
    
export default DashboardPage
