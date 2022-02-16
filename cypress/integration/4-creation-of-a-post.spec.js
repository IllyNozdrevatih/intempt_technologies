describe('4-creation-of-a-post.spec', () => {
    it('visit create post page and create new post', function () {
        cy.visit('http://localhost:8081/')
        cy.wait(1000)
        cy.get('a#create-post-link').click()
        cy.get('#postTitle').type('post title')
        cy.get('#postDescription').type('post description')
        cy.get('button[type="submit"]').click()
    })
})
