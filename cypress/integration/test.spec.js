describe("Test", () => {
  it("room search from room type", () => {
    cy.visit("https://d3gby788punlh6.cloudfront.net");
    cy.get('[data-test="banner"]>a').click();
    cy.get("select[name='type']").select('double').should('have.value', 'double')


}); 
});
