import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the mima home page$/, ()=>{
    cy.visit('/')
})
// When(/^I click the Sign Up Button$/,()=>{
//   cy.clickSignUpButton();
// })

Then(/^I should see the sign Up form page$/,()=>{
    cy.url().should('equal', 'https://staging.trymima.com/signup')
})

// When(/^I fill in the full name$/,()=>{
//      cy.insertFullName();
// })

// When(/^I fill in the business name$/,()=>{
//     cy.insertBusinessName();
// })

// When(/^I fill in the business email$/,()=>{
//     cy.insertEmail();
// })

// When(/^I fill in the business phone number$/,()=>{
//      cy.insertBusinessPhoneNumber();
// })

// When(/^I fill in the business registration name$/, () => {
// cy.insertBusRegNumber();
// });

// When(/^I click The Next Button$/, () => {
// 	cy.clickNextButton()
// });

// When(/^I select how I here about mima$/, () => {
// 	cy.insertAdditionalDetails()
// });

// When(/^I fill in the password$/, () => {
// 	cy.insertPassword()
// });

// When(/^I click the sign up Button$/, () => {
// 	cy.clickNextButton();
// });

When(/^I insert the OTP$/, () => {
	cy.extractOTP()
});

Then(/^ I should see the Preview content$/, (table) => {
  table.hashes().forEach((row) => {
    cy.contains(row.panel).should('exist').and('contain.text', row.panel)
  });
});


When(/^I click the "([^"]*)" Button$/, (buttonText) => {
  console.log(buttonText);
  cy.clickNextButton(buttonText)
});


When(/^I fill in the "([^"]*)"$/, (inputDetails) => {
  console.log(inputDetails);
  cy.insertDetails(inputDetails);
});


When(/^I select how I here about mima "([^"]*)"$/, (options) => {
 cy.insertAdditionalDetails(options);
});
