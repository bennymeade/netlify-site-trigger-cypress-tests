describe('Netlify Site Homepage', () => {
    it('Validate H1', () => {
        cy.visit('/')
        cy.get('h1').should('contain.text', 'Yo, I’m Bluise - A Nuxt.js & Netlify CMS boilerplate.')
    })
})