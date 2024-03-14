const { Given, When , Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on homepage', async function() {
  await loginPage.navigateToLoginScreen();
  await loginPage.verifyLoginPageIsDisplayed();
});

When('I purchase an item', async function() {
  await loginPage.purchaseItem();
});
Then('I fill up checkout form', async function() {
  await loginPage.checkoutForm();
});
// ---- second scenario
Given('I am looking for order', async function() {
  await loginPage.navigateToLoginScreen();
  await loginPage.verifyOrdersReturns();
});

Then('I fill up existing order', async function() {
  await loginPage.fillOrder();
});
// ----> third scenario
Then('I add and delete items', async function() {
  await loginPage.deleteAddItems();
});

Then('I review privacy and policy', async function() {
  await loginPage.reviewPolicy();
});
