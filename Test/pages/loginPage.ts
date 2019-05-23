import { ElementFinder,element,by, browser } from "protractor";
import { genericUtility } from "../genericUtility/genericUtility";

let genericUtilityObject = new genericUtility();

export class loginPage{

        username:ElementFinder;
        password:ElementFinder;
        submitLogin:ElementFinder;

        constructor(){
            
            this.username=element(by.model("userName"));
            this.password=element(by.model("password"));
            this.submitLogin=element(by.css(".login']"));
            
        };

        navigateTo = async function(url) {
            await genericUtilityObject.getAppURL(url);
          };

        enterUserName = async function (uname) {
        
             await genericUtilityObject.clearText(this.username);
             await genericUtilityObject.sendTextInTextBox(this.username, uname);
             browser.logger.info("Entered username - "+uname);
        };

        enterPassword = async function(pwd){
            await genericUtilityObject.clearText(this.password);
            await genericUtilityObject.sendTextInTextBox(this.password, pwd);
            browser.logger.info("Entered password - "+pwd);
       };
       
       clickOnSubmitButton = async function() {
            await genericUtilityObject.clickElement(this.submitLogin);
            browser.logger.info("Clicked on submit button");
       };
}