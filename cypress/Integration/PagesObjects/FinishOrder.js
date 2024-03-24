class FinishOrder{
    thankYouMessage(){
        return cy.xpath("//h2[contains(text(),'Thank you for your purchase!')]")
    }
    confirmCard(){
        return cy.get("[class = 'lead text-muted ']")
    }
    clickOkButton(){
        return cy.get("[tabindex = '1']")
    }

}

export default FinishOrder