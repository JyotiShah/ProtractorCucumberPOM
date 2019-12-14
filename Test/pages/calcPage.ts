import { ElementFinder,element,by, browser,ExpectedConditions } from "protractor";
import { genericUtility } from "../genericUtility/genericUtility";
import chai from "chai";

let expect = chai.expect;
let genericUtilityObject = new genericUtility();
let ec = ExpectedConditions;

export class calcPage{

    firstInput:ElementFinder;
    secondInput:ElementFinder;
    submitButton:ElementFinder;
    result:ElementFinder;
    isResult:ElementFinder;
    getResult:ElementFinder;

constructor()
{
   
    this.firstInput=element(by.model("first"));
    this.secondInput=element(by.model("second"));
    this.submitButton=element(by.id("gobutton"));
    this.result=element(by.css("h2.ng-binding"));
    this.isResult=element(by.repeater("result in memory"));
    this.getResult = element(by.css("td:nth-child(3)"));
}
    navigateTo = async function(url) {
        await genericUtilityObject.getAppURL(url);
    };
    
    enterFirstInput = async function(input){
        await genericUtilityObject.clearText(this.firstInput);
        await genericUtilityObject.sendTextInTextBox(this.firstInput, input);
        browser.logger.info("Entered number is - "+input);
    };

    enterSecondInput = async function(input){
        await genericUtilityObject.clearText(this.secondInput);
        await genericUtilityObject.sendTextInTextBox(this.secondInput, input);
        browser.logger.info("Entered number is - "+input);
    };

    clickOnSubmitButton = async function() {
        await genericUtilityObject.clickElement(this.submitButton);
        browser.logger.info("Clicked on submit button");
    };

     verifyResultsFromHeader = async function(string){
        
        let isPresent = ec.textToBePresentInElement(this.result, string);
        await browser.wait(isPresent, 3000);
        await this.result.getText().then(function (text) {
            
            expect(text).to.equal(string);
            browser.logger.info("Output is as expected - "+ string);
        });
                
    };
};