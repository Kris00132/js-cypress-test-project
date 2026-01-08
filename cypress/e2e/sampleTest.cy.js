describe("Example Cypress test with Allure", () => {
    it("opens the kitchen sink page", () => {
      cy.allure().severity("normal");
      cy.visit("/");
      cy.contains("type").click();
      cy.url().should("include", "/commands/actions");
    });
  
    it("failing test to see screenshot", () => {
      cy.allure().severity("critical");
      cy.visit("/");
      cy.contains("does-not-exist").click();
    });
  });