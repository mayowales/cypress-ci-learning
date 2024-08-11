let data;
let detail
let emailAddress
let inboxId
import { faker } from "@faker-js/faker";
before(() => {
  cy.fixture("example").then((ele) => {
    data = ele;
  });
   cy.fixture("login").then((sel) => {
     detail = sel;
   });
});

Cypress.Commands.add("clickSignUpButton", () => {
    cy.get(data.signUpButton).should("be.visible").click();

});

 
Cypress.Commands.add("insertDetails", (field) => {

  switch (field) {
    case "full name":
      cy.insertValues(data.fullnameField, faker.person.fullName());
      break;
    case "business name":
      cy.insertValues(data.busBizNameField, faker.company.buzzVerb());
      break;
    case "business email":
      cy.insertEmail();
      break;
    case "business phone number":
      cy.insertValues(
        data.busPhoneNumberField,
        faker.phone.number("+234803#######")
      );
      break;
    case "business registration name":
      cy.insertValues(data.busRegNumField, "RC-101");
      break;
    case "password":
      cy.insertValues(data.passwordField).click().type("Test@1234");
       break;
    case "email":
      cy.insertValues(data.emailField,detail.email);
    
  }
});
 
// Cypress.Commands.add('insertFullName', ()=>{
//  cy.insertValues(data.fullnameField, faker.person.fullName());
// })
 
// Cypress.Commands.add('insertBusinessName', () => {
//   cy.insertValues(data.busBizNameField, faker.company.buzzVerb());
// });

// Cypress.Commands.add('insertBusinessEamail', () => {
//  cy.insertEmail();
// });
 
// Cypress.Commands.add('insertBusinessPhoneNumber', () => {
//   cy.insertValues(
//     data.busPhoneNumberField,
//     faker.phone.number("+49176#######")
//   );
// });
  
// Cypress.Commands.add('insertBusRegNumber', () => {
//    cy.insertValues(data.busRegNumField, "RC-101");
// });
  
  //cy.insertMultipleData(data.inputField, details);
  


Cypress.Commands.add("clickNextButton", (text) => {
  cy.get("button").contains(text).should("be.visible").click();
});

Cypress.Commands.add("insertMultipleData", (element, content) => {
  cy.get(element).each(($el, index) => {
    cy.wrap($el).type(content[index]);
  });
});

Cypress.Commands.add("insertAdditionalDetails", (aboutUsOptions) => {
  cy.get(data.howYouHeard).click();
  cy.get(data.infoOption).contains(aboutUsOptions).click();

});

// Cypress.Commands.add('insertPassword', () =>{
//   cy.get(data.passwordField).click().type("Test@1234");
// })

Cypress.Commands.add('insertEmail', ()=>{
  cy.mailslurp().then((mailslurp) =>
    mailslurp.createInbox().then((inbox) => {
      emailAddress = inbox.emailAddress;
      inboxId = inbox.id;
      const deet = `
       {
       "email": "${emailAddress}"
       }
       `;
      cy.writeFile("cypress/fixtures/login.json", deet);
      cy.insertValues(data.busEmailField, emailAddress);
    })
  );
  
 
})

Cypress.Commands.add('extractOTP', ()=>{
  cy.mailslurp().then(mailRetrieve=>mailRetrieve.waitForLatestEmail(inboxId, 30000, true).then(email=>{
    const emailBody = email.body
    const parser = new DOMParser()
    const doc = parser.parseFromString(emailBody, 'text/html')
    const code = doc.querySelector(
      ".main>tbody>tr:nth-child(2) p:nth-child(3)"
    ).textContent;
    const OTP = code.trim()
    cy.insertMultipleData(data.inputField, OTP)
  }))
})