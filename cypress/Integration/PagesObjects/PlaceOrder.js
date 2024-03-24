class PlaceOrder{
    typeName(){
        return cy.get('#name')
    }

    typeCountry(){
        return cy.get('#country')
    }

    typeCity(){
        return cy.get('#city')
    }

    typeCreditCard(){
        return cy.get('#card')
    }

    typeMonth(){
        return cy.get('#month')
    }

    typeYear(){
        return cy.get('#year')
    }

    ClickPurchaseButton(){
        return cy.get("[type = button]").contains('Purchase');
    }
}

export default PlaceOrder