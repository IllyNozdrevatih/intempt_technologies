describe('2-editing-of-a-post.spec', () => {
    it('visit post page and first edit post item', function () {
        cy.visit('http://localhost:8081/')
        cy.wait(1000)
        cy.get('a.btn-edit').first().click()
        cy.get('#postTitle').clear().type('updated post title')
        cy.get('#postDescription').clear().type('updated post description')
        cy.get('button[type="submit"]').click()
    })
})
