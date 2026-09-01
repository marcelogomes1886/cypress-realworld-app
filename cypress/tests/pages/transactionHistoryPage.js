class TransactionHistoryPage {
    selectorsList() {
        const selectors = {
            personalTab: "[data-test='nav-personal-tab']",
            transactionItens: ".MuiListItem-alignItemsFlexStart",
            emptyListCreateTransaction:'[data-test="transaction-list-empty-create-transaction-button"]'
        }

        return selectors
    }

    accessHistoryTab(){
        cy.get(this.selectorsList().personalTab).click()
    }

    checkHistory(){
        cy.get(this.selectorsList().transactionItens)
    }
    
    checkEmptyHistory(){
        cy.get(this.selectorsList().emptyListCreateTransaction)
    }
}

export default TransactionHistoryPage;