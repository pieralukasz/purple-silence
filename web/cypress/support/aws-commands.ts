const AWSCognitoUserPoolId = Cypress.env("aws_cognito_user_pool_id");
const defaultPassword = Cypress.env("default_password");

Cypress.Commands.add("confirmUserSignUp", (email: string) => {
  cy.exec(`aws cognito-idp admin-confirm-sign-up \
  --user-pool-id ${AWSCognitoUserPoolId} \
  --username ${email}`);
});

Cypress.Commands.add("createUserWithPassword", (email: string) => {
  cy.exec(`aws cognito-idp admin-create-user \
  --user-pool-id ${AWSCognitoUserPoolId} \
  --username ${email}`);
  cy.exec(`aws cognito-idp admin-set-user-password \
  --user-pool-id ${AWSCognitoUserPoolId} \
  --username ${email} \
  --password ${defaultPassword} \
  --permanent`);
});

Cypress.Commands.add(
  "addUserToSpecificGroup",
  (email: string, group: string) => {
    cy.exec(`aws cognito-idp admin-add-user-to-group \
  --user-pool-id ${AWSCognitoUserPoolId} \
  --username ${email} \
  --group-name ${group}`);
  }
);

Cypress.Commands.add("createAdminWithPassword", (email: string) => {
  cy.createUserWithPassword(email);
  cy.addUserToSpecificGroup(email, "admin");
});
