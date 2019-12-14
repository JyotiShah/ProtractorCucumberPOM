import { Given,When, Then } from "cucumber";
import {browser, ExpectedConditions} from "protractor";
import { calcPage } from "../pages//calcPage";
import chai from "chai";

let expect = chai.expect;
let calcPageObject = new calcPage();
let ec = ExpectedConditions;

    Given('I navigate to Calc Site', async ()=> {
        browser.waitForAngularEnabled(false);
        await calcPageObject.navigateTo(browser.params.url);
    
    });

    When('I add two numbers {string} and {string}',  async(string1, string2)=> {
        
        await calcPageObject.enterFirstInput(string1);
        await calcPageObject.enterSecondInput(string2);
        await calcPageObject.clickOnSubmitButton();
        
    });  

    
    Then('The output displayed should be {string}', async (string) =>{
        
        browser.waitForAngular();
        await calcPageObject.verifyResultsFromHeader(string);
        
        // let isPresent = ec.textToBePresentInElement(calcPageObject.result, string);
        // await browser.wait(isPresent, 3000);
        // await calcPageObject.result.getText().then(function (text) {
        //     browser.logger.info("Output is as expected - "+ string);
        //     expect(text).to.equal(string);
        //     browser.logger.info("Output is as expected - "+ string);
        // });
    });

    Then('The Output displayed in History is {string}', async (string) =>{
        
        browser.waitForAngular();
        let isPresent = ec.presenceOf(calcPageObject.isResult);
        await browser.wait(isPresent, 3000);
        await calcPageObject.getResult.getText().then(function (text) {
            
            expect(text).to.equal(string);
            browser.logger.info("Output is as expected - "+ string);
        });
    });