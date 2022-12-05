describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/")
    cy.get("nav").children().should("have.length", 3)
  })
})
