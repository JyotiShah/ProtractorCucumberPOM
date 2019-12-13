"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const genericUtility_1 = require("../genericUtility/genericUtility");
let genericUtilityObject = new genericUtility_1.genericUtility();
class loginPage {
    constructor() {
        this.navigateTo = async function (url) {
            await genericUtilityObject.getAppURL(url);
        };
        this.enterUserName = async function (uname) {
            await genericUtilityObject.clearText(this.username);
            await genericUtilityObject.sendTextInTextBox(this.username, uname);
            protractor_1.browser.logger.info("Entered username - " + uname);
        };
        this.enterPassword = async function (pwd) {
            await genericUtilityObject.clearText(this.password);
            await genericUtilityObject.sendTextInTextBox(this.password, pwd);
            protractor_1.browser.logger.info("Entered password - " + pwd);
        };
        this.clickOnSubmitButton = async function () {
            await genericUtilityObject.clickElement(this.submitLogin);
            protractor_1.browser.logger.info("Clicked on submit button");
        };
        this.username = protractor_1.element(protractor_1.by.model("userName"));
        this.password = protractor_1.element(protractor_1.by.model("password"));
        this.submitLogin = protractor_1.element(protractor_1.by.css(".login']"));
    }
    ;
}
exports.loginPage = loginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVGVzdC9wYWdlcy9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0Q7QUFDL0QscUVBQWtFO0FBRWxFLElBQUksb0JBQW9CLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFFaEQsTUFBYSxTQUFTO0lBTWQ7UUFRQSxlQUFVLEdBQUcsS0FBSyxXQUFVLEdBQUc7WUFDM0IsTUFBTSxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUosa0JBQWEsR0FBRyxLQUFLLFdBQVcsS0FBSztZQUVoQyxNQUFNLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsTUFBTSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25FLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUM7UUFFRixrQkFBYSxHQUFHLEtBQUssV0FBVSxHQUFHO1lBQzlCLE1BQU0sb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxNQUFNLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakUsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQztRQUVGLHdCQUFtQixHQUFHLEtBQUs7WUFDdEIsTUFBTSxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQztRQTFCRyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBQUEsQ0FBQztDQXVCVDtBQW5DRCw4QkFtQ0MifQ==