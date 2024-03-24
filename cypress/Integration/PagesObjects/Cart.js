class Cart {
    verifyPrice(){
        return cy.get('#totalp')
    }
    clickPlaceOrder(){
        return cy.get("[type = 'button']").contains('Place Order')
    }
}

export default Cart