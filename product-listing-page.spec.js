import { cy } from 'cypress';

it('should render the article listing page', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Most Viewed Articles');
    cy.get('ul').should('have.length', 20);
  });
  
  it('should render article details', () => {
    cy.visit('/');
    cy.get('li').first().click();
    cy.get('h2').should('contain', 'Article Name');
    cy.get('p').should('contain', 'Article Description');
  });