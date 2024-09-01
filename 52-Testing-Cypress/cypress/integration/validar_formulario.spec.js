/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="formulario"]')
            .submit(); // presionar en el boton de "obtener Cita"

        // Seleccionar la alerta y verificar que tenga el mismo texto a
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')

        // Que tenga la clase
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-danger');
    });
});