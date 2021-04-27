describe('Searchbox Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('type in search box and enter', () =>{
        cy.get('#searchTerm').type('something{enter}')
    })
    it('show search result page', () => {
        cy.get('h2').contains('Search Results:')
    })
})
