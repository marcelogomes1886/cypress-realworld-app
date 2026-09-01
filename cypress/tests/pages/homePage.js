class HomePage {
  selectorsList() {
    const selectors = {
      tabs: {
        homeTab: ".Mui-selected",
      },

      fields: {
        bankNameField: "[name='bankName']",
        routingNumberField: "[name='routingNumber']",
        accountNumberField: "[name='accountNumber']",
      },

      buttons: {
        newTransactionButton: "[href='/transaction/new']",
        saveBankAccountInfoButton: "[data-test='bankaccount-submit']",
        nextOnboardingButton: '[data-test="user-onboarding-next"]',
        doneOnboardingButton: '[data-test="user-onboarding-next"]',
      },

      validations: {
        onboardingBankInfo: "[data-test='user-onboarding-dialog-content']",
      },
    };

    return selectors;
  }

  
  checkHomePage() {
    cy.get(this.selectorsList().tabs.homeTab);
  }

  accessTransactionPage() {
    cy.get(this.selectorsList().buttons.newTransactionButton).click();
  }

  
  focusBlurField(field) {
    cy.get(field).focus().blur();
  }

  fillBankAccountInfo(bankName, routingNumber, accountNumber) {
    bankName
      ? cy.get(this.selectorsList().fields.bankNameField).type(bankName)
      : this.focusBlurField(this.selectorsList().fields.bankNameField);

    routingNumber
      ? cy.get(this.selectorsList().fields.routingNumberField).type(routingNumber)
      : this.focusBlurField(this.selectorsList().fields.routingNumberField);

    accountNumber
      ? cy.get(this.selectorsList().fields.accountNumberField).type(accountNumber)
      : this.focusBlurField(this.selectorsList().fields.accountNumberField);
  }

  
  clickOnboardingNextButton() {
    cy.get(this.selectorsList().buttons.nextOnboardingButton).click({ force: true });
  }

  clickOnboardingDoneButton() {
    cy.get(this.selectorsList().buttons.doneOnboardingButton).click({ force: true });
  }

  clickSaveBankAccountInfo() {
    cy.get(this.selectorsList().buttons.saveBankAccountInfoButton).click();
  }

  
  checkOnboardingBankInfo() {
    cy.get(this.selectorsList().validations.onboardingBankInfo).should("be.visible");
  }

  checkOnboardingExists(bankName, routingNumber, accountNumber) {
    this.checkOnboardingBankInfo();
    this.clickOnboardingNextButton();
    this.fillBankAccountInfo(bankName, routingNumber, accountNumber);
    this.clickSaveBankAccountInfo();
    this.clickOnboardingDoneButton();
  }
}

export default HomePage;