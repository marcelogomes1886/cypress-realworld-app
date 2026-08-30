class PaymentPage {
    selectorsList() {
        const selectors = {
            amountInput: "[data-test='transaction-create-amount-input']",
            noteInput: '#transaction-create-description-input',
            payButton: "[data-test='transaction-create-submit-payment']"

        }   
        
        return selectors;
    }


    fillPaymentForm(amount, description) {
        cy.get(this.selectorsList().amountInput).find('input').type(amount);
        cy.get(this.selectorsList().noteInput).type(description);
        cy.get(this.selectorsList().payButton).click();
    }
    
}

export default PaymentPage;