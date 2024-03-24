class HomePage{

    getTitle(){
    return cy.get('#nava')
    }

    clickLaptops(){
        return cy.get("[class = 'list-group']").contains('Laptops')
    }

    selectFirstLaptop(){
        return cy.get('#tbodyid').contains('Sony vaio i5')
    }

    selectSecondLaptop(){
        return cy.get('#tbodyid').contains('MacBook air')
    }

    clickHomeLink(){
        return cy.get("[class = 'nav-link']").contains('Home')
    }

    clickCartLink(){
        return cy.get('#cartur')
    }
}

export default HomePage