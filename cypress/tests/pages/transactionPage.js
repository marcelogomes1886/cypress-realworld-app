class TransactionPage {
  selectorsList() {
    const selectors = {
      selectContact: {
        kristianBradtke: "[data-test='user-list-item-GjWovtg2hr']",
        darrelOrtiz: "[data-test='user-list-item-_XblMqbuoP']",
        ruthieProsacco: "[data-test='user-list-item-M1ty1gR8B3']",
        liaRosenbaum: "[data-test='user-list-item-WHjJ4qR2R2']"
      },

      fields: {
        amountField: "[placeholder='Amount']",
        addNoteField: "[placeholder='Add a note']"
      },

      buttons: {
        requestButton: "[data-test='transaction-create-submit-request']",
        paymentButton: "[data-test='transaction-create-submit-payment']"
      },

      requireMsg: {
        amountRequireMsg: "#transaction-create-amount-input-helper-text",
        addNoteRequireMsg: "#transaction-create-description-input-helper-text"
      },

      validations: {
        transactionGrid: ".TransactionCreateStepOne-paper",
        userBalance: "[data-test='sidenav-user-balance']",
        sucessTransactionMessage: '[data-test="alert-bar-success"]'
      }
    }

    return selectors
  }

  
  checkTransactionPage() {
    cy.get(this.selectorsList().validations.transactionGrid)
  }

  checkRequireMsg(errorMsg) {
    cy.get(this.selectorsList().requireMsg[errorMsg])
  }

  checkPaymentButton() {
    cy.get(this.selectorsList().buttons.paymentButton).should('be.disabled')
  }

  
  focusBlurFields(field) {
    cy.get(field).focus().blur()
  }

  fillTransactionFields(amount, note) {
    amount
      ? cy.get(this.selectorsList().fields.amountField).type(amount)
      : this.focusBlurFields(this.selectorsList().fields.amountField)

    note
      ? cy.get(this.selectorsList().fields.addNoteField).type(note)
      : this.focusBlurFields(this.selectorsList().fields.addNoteField)
  }

  
  clickPaymentButton() {
    cy.get(this.selectorsList().buttons.paymentButton).click()
  }

  
  chooseTransactionContact(contact) {
    cy.get(this.selectorsList().selectContact[contact]).click()
  }

  
  getNumericBalanceFromElement($element) {
    const balanceText = $element[0].innerText
    return Number(balanceText.replace('$', '').replace(/,/g, ''))
  }

  calculateExpectedBalance(initialBalance, amount) {
    return initialBalance - amount
  }

  assertBalanceEquals(expectedBalance) {
    cy.get(this.selectorsList().validations.userBalance).should(($el) => {
      const currentBalance = this.getNumericBalanceFromElement($el)
      
      expect(currentBalance).to.eq(expectedBalance)
    })
  }

  validateBalanceUpdate(transferAmount) {
    cy.get(this.selectorsList().validations.userBalance).then(($el) => {
      const initialBalance = this.getNumericBalanceFromElement($el)
      const expectedBalance = this.calculateExpectedBalance(initialBalance, transferAmount)

      this.clickPaymentButton()
      this.assertBalanceEquals(expectedBalance)
    })
  }
}

export default TransactionPage;