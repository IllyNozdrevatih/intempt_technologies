
describe('3-routing-post-details pages', () => {
    it('remove first post item', function () {
        cy.visit('http://localhost:8081/')
        cy.wait(1000)
        cy.get('button.btn-remove').first().click()
        cy.scrollTo(0,0)
    })
})
