class AddCartPage{
    clickAddProduct(){
        return cy.get("[class = 'btn btn-success btn-lg']")

    }
    getProductPrice(){
        return cy.get("[class = 'price-container']")
    }
    
}

export default AddCartPage