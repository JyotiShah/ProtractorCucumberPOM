"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const loginPage_1 = require("../pages//loginPage");
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
let loginPageObject = new loginPage_1.loginPage();
cucumber_1.Given('I login to Application', async () => {
    await loginPageObject.navigateTo(protractor_1.browser.params.url);
    //   await loginPageObject.enterUserName(browser.params.username);
    //   await loginPageObject.enterPassword(browser.params.password);
    //   await loginPageObject.clickOnSubmitButton();
});
cucumber_1.Given('I Navigate to URL', async () => {
    await loginPageObject.navigateTo(protractor_1.browser.params.url);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0L3N0ZXBzL2xvZ2luUGFnZVN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDJDQUFtQztBQUNuQyxtREFBZ0Q7QUFDaEQsZ0RBQXdCO0FBR3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxlQUFlLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFdEMsZ0JBQUssQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLElBQUcsRUFBRTtJQUVwQyxNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsa0VBQWtFO0lBQ2xFLGtFQUFrRTtJQUNsRSxpREFBaUQ7QUFFbkQsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFFLG1CQUFtQixFQUFFLEtBQUssSUFBRyxFQUFFO0lBQ2hDLE1BQU0sZUFBZSxDQUFDLFVBQVUsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxRCxDQUFDLENBQUMsQ0FBQSJ9