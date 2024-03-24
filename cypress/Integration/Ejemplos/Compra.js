import HomePage from "../PagesObjects/HomePage"
import AddCartPage from "../PagesObjects/AddCartPage"
import Cart from "../PagesObjects/Cart"
import PlaceOrder from "../PagesObjects/PlaceOrder"
import FinishOrder from "../PagesObjects/FinishOrder"


it('Ejercicio DemoBlaze',()=>{

    const homePage = new HomePage()
    const addCartPage = new AddCartPage()
    const cart = new Cart()
    const placeOrder = new PlaceOrder()
    const finishOrder = new FinishOrder()
    let card = 12345
    let name = 'Ivan'
    let date = '23/03/2024'

cy.visit('https://www.demoblaze.com/')
homePage.getTitle().should('have.text','\n      PRODUCT STORE')
homePage.clickLaptops().click({force:true})
homePage.selectFirstLaptop().click()
addCartPage.getProductPrice().then(label=>{
    let primerPrecio = label.text();
        var regex = /(\d+)/g;
        primerPrecio = parseInt(primerPrecio.match(regex));

    addCartPage.clickAddProduct().click()
    cy.on('window:alert',(textmodal)=>{
        expect((textmodal)).equal('Product added')
    })
    homePage.clickHomeLink().click()
    homePage.clickLaptops().click({force:true})
    homePage.selectSecondLaptop().click()
    addCartPage.getProductPrice().then(labels=>{
        let segundoPrecio = labels.text();
        segundoPrecio = parseInt(segundoPrecio.match(regex));
        let precioFinal = primerPrecio + segundoPrecio;

        addCartPage.clickAddProduct().click()
        cy.on('window:alert',(textmodal)=>{
            expect((textmodal)).equal('Product added')
        })
        homePage.clickCartLink().click()
        cy.wait(2000)
        cart.verifyPrice().should('have.text',precioFinal)

    })
})

cart.clickPlaceOrder().click()

cy.addName(name)
cy.addCountry("Colombia")
cy.addCity("Bogotá")
cy.addCreditCard(card)
cy.addMonth("Marzo")
cy.addYear(date)
placeOrder.ClickPurchaseButton().click()

finishOrder.thankYouMessage().should('have.text','Thank you for your purchase!')
finishOrder.confirmCard().should('be.visible')
finishOrder.clickOkButton().click()
}
)