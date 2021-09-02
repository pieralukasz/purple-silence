import {
  createRandomMessage,
  createRandomUser,
} from "../support/generate-data";
import { sendFeedback } from "../support/methods/send-feedback";
import { indexPage } from "../support/methods/index-page";
import { indexPageSelectors } from "../support/selectors/index-page";
import { sendFeedbackSelectors } from "../support/selectors/send-feedback-modal";
import { feedbacksTableSelectors } from "../support/selectors/feedbacks-page";

const admin = createRandomUser();
const message = createRandomMessage();

describe("Send feedback test suite", () => {
  before(() => {
    cy.setLanguage("en");
    cy.visit("/sign-in");
    cy.createAdminWithPassword(admin.correctEmail);
    cy.loginAs(admin.correctEmail, admin.correctPassword);
  });

  it("User is not able to send feedback via modal when description is missing", () => {
    cy.clickOn(indexPageSelectors.openButtonInSideMenu);
    cy.clickOn(indexPageSelectors.sendFeedbackButtonInSideMenu);
    indexPage.checkIfSideMenuIsClosed();
    sendFeedback.modalIsVisible();
    cy.clickOn(sendFeedbackSelectors.cancelButton);
    sendFeedback.modalIsNotVisible();
    cy.clickOn(indexPageSelectors.openButtonInSideMenu);
    cy.clickOn(indexPageSelectors.sendFeedbackButtonInSideMenu);
    sendFeedback.modalIsVisible();
    cy.clickOn(sendFeedbackSelectors.sendButton);
    cy.checkValidation("Description is a required field");
    cy.clickOn(sendFeedbackSelectors.cancelButton);
  });

  it("User is able to send feedback via modal when description is filled", () => {
    cy.clickOn(indexPageSelectors.openButtonInSideMenu);
    cy.clickOn(indexPageSelectors.sendFeedbackButtonInSideMenu);
    indexPage.checkIfSideMenuIsClosed();
    sendFeedback.modalIsVisible();
    cy.typeText(sendFeedbackSelectors.textareaInput, message.message);
    cy.clickOn(sendFeedbackSelectors.sendButton);
    sendFeedback.modalIsNotVisible();
    cy.signOut();
  });

  it("Admin is able to see the new feedback on the list", () => {
    cy.loginAs(admin.correctEmail, admin.correctPassword);
    cy.clickOn(indexPageSelectors.openButtonInSideMenu);
    cy.clickOn(indexPageSelectors.feedbacksButtonInSideMenu);
    cy.checkThatSubpageURLContains("/admin-feedbacks");
    cy.containText(
      feedbacksTableSelectors.feedbackTableDescriptionBodyCell,
      message.message
    );
  });
});
