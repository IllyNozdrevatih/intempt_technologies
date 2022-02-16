
describe('1-routing-post-details pages', () => {
    it('visit post page and first post item', function () {
        cy.visit('http://localhost:8081/')
        cy.wait(1000)
        cy.get('a.btn-details').first().click()
    })
})
