 class LoginPage {

  async navigateToLoginScreen() {
   return await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed() {
   return expect(await page.title()).to.equal('Home Page');  
  }

  async purchaseItem(){
    const element = await page.waitForSelector('div:nth-child(1) > ol > li:nth-child(1) > div');
    await page.locator('div:nth-child(1)>ol>li:nth-child(1)>div').hover();
    await page.click('li:nth-child(1)>div>div>div>div>div>form>button');
    await page.click('#option-label-size-143-item-168');
    await page.click('#option-label-color-93-item-50');
    await page.click('#product-addtocart-button');
    await page.waitForSelector('span.counter.qty>span.counter-number');
    await page.waitForSelector('.message-success.success.message');
    await page.click('#maincontent > div.page.messages > div:nth-child(2) > div > div > div > a')
    await page.waitForSelector('.cart-summary>ul>li:nth-child(1)>button');
    await page.click('[data-role="proceed-to-checkout"]')  
    await page.click('[data-role="proceed-to-checkout"]')  

  }
  async checkoutForm(){
    const element = await page.waitForSelector('#customer-email');
    await page.fill('#customer-email','test@automation.com');
    await page.fill('[name="firstname"]','Ronald');
    await page.fill('[name="lastname"]','Estupinan');
    await page.fill('[name="street[0]"]','calle123');
    await page.fill('[name="city"]','New York');
    await page.selectOption('[name="region_id"]', {
      label: "Kansas"
   })
    await page.fill('[name="postcode"]','12345-6789')
    await page.selectOption('[name="country_id"]', {
      label: "United States"
   })
    await page.fill('[name="telephone"]','22331122')
    await page.click('[name="ko_unique_1"]')  
    await page.click('[data-role="opc-continue"]')  
    await page.click('[title="Place Order"]')
    const visible = await page.isVisible('[data-ui-id="page-title-wrapper"]');
    return expect(visible).to.equal(true);
  }
  async verifyOrdersReturns() {
    await page.click('footer>div>ul>li:nth-child(4)>a')
    const visible = await page.isVisible('[data-ui-id="page-title-wrapper"]');
    return expect(visible).to.equal(true);
  }
  async fillOrder() {
    await page.fill('#oar-order-id','000048345')
    await page.fill('#oar-billing-lastname','Estupinan')
    await page.fill('#oar_email','rony123@test.com')
    await page.click('[title="Continue"]')
    const orderCompleted = await page.isVisible('[data-ui-id="page-title-wrapper"]');
    return expect(orderCompleted).to.equal(true);
  }
  async deleteAddItems() {
    await page.locator('div:nth-child(1)>ol>li:nth-child(2)>div').hover();
    await page.click('div:nth-child(1)>ol>li:nth-child(2)>div')
    await page.click('#option-label-size-143-item-170')
    await page.click('#option-label-color-93-item-60')
    await page.click('#product-addtocart-button')
    await page.click('.logo')
    await page.locator('div:nth-child(1)>ol>li:nth-child(3)>div').hover();
    await page.click('div:nth-child(1)>ol>li:nth-child(3)>div');
    await page.click('#option-label-size-143-item-168')
    await page.click('#option-label-color-93-item-52')
    await page.click('#product-addtocart-button')
    await page.waitForSelector('span.counter.qty>span.counter-number');
    await page.click('.action.showcart')
    await page.click('#mini-cart>li:nth-child(2)>div>div>div>div.secondary>a')
    await page.click('footer>button.action-primary.action-accept')
    await page.click('#mini-cart>li:nth-child(1)>div>div>div>div.secondary>a')
    await page.click('footer>button.action-primary.action-accept')
    await page.waitForSelector('.subtitle.empty');
    const emptyCart = await page.isVisible('.subtitle.empty');
    return expect(emptyCart).to.equal(true);
    
  }
  async reviewPolicy() {
    await page.click('footer>div>ul>li:nth-child(2)>a')
    const visible = await page.isVisible('[data-ui-id="page-title-wrapper"]');
    return expect(visible).to.equal(true);
  }
  
}


module.exports = { LoginPage };