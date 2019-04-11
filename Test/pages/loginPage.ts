import { ElementFinder,element,by, browser } from "protractor";

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
            await browser.get(url);
            browser.logger.info("Navigated to - "+ url);
            
          };

        enterUserName = async function (userName) {
        
             await this.username.clear();
             await this.username.sendKeys(userName);
             browser.logger.info("Entered username - "+userName);
        };

        enterPassword = async function(password){
            await this.password.clear();
            await this.password.sendKeys(password);
            browser.logger.info("Entered password - "+password);
       };
       
       clickOnSubmitButton = async function() {
            await this.submitLogin.click();
            browser.logger.info("Clicked on submit button");
       };
}