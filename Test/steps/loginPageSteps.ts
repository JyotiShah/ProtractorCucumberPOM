import { Given,When, Then } from "cucumber";
import {browser} from "protractor";
import { loginPage } from "../pages//loginPage";
import chai from "chai";

let expect = chai.expect;
let loginPageObject = new loginPage();

Given('I login to GuestEnCor Application', async ()=> {
    
      await loginPageObject.navigateTo(browser.params.url);
      await loginPageObject.enterUserName(browser.params.username);
      await loginPageObject.enterPassword(browser.params.password);
      await loginPageObject.clickOnSubmitButton();
    
  });

