describe('Ejercicio API',() => {
    const crearUsuario = "https://petstore.swagger.io/v2/user/"
    const consultarUsuario = "https://petstore.swagger.io/v2/user"
    const eliminarUsuario = "https://petstore.swagger.io/v2/user"

    const usuario = {
    
              "id": 11,
              "username": "Ivann",
              "firstName": "Prueba",
              "lastName": "Prueba",
              "email": "Prueba",
              "password": "Prueba",
              "phone": "Prueba",
              "userStatus": 1
    
    }
    const actualizado = {
    
        "id": 11,
        "username": "Ivann",
        "firstName": "nombreActualizado",
        "lastName": "Prueba",
        "email": "Prueba@Actualizada",
        "password": "Prueba",
        "phone": "Prueba",
        "userStatus": 1

}
    
    const addUser = usuario => {
        cy.request('POST', crearUsuario, usuario)
    }


    describe('Ejercicio test',() =>{

        it('Añadir usuario', ()=>{
            addUser(usuario)
        })

        it('Consultar usuario', ()=>{
        cy.request('GET', `${consultarUsuario}/${usuario.username}`)
            .its('body')
            .should('deep.eq',usuario)
        })

        it('Actualizar nombre y correo usuario', ()=>{
            addUser(actualizado)
            
        })

        it('Consultar usuario actualizado', ()=>{
            cy.request('GET', `${consultarUsuario}/${usuario.username}`)
                .its('body')
                .should('deep.eq',actualizado)
                cy.log(actualizado.firstName)
                cy.log(actualizado.email)
            })

            it('Eliminar un usuario', ()=>{
                cy.request('DELETE', `${consultarUsuario}/${usuario.username}`)
                .then((response)=>{
                    expect(response.status).to.equal(200)

                })
                })
           
    })
       
    
})