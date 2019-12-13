"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class genericUtility {
    constructor() {
        //Get Application URL
        this.getAppURL = async (url) => {
            protractor_1.browser.get(url);
            protractor_1.browser.logger.info("Navigated to - " + url);
        };
        //Alert
        //switches to alert and accepts it
        this.acceptAlert = async () => {
            await protractor_1.browser.switchTo().alert().accept();
            protractor_1.browser.logger.info("Accepted the Alert");
        };
        //switches to alert and dismisses it
        this.dismissAlert = async () => {
            await protractor_1.browser.switchTo().alert().dismiss();
            protractor_1.browser.logger.info("Dismissed the Alert");
        };
        //checks for alert and dismisses if present
        this.checkAlertAndDismiss = async () => {
            let alert = protractor_1.browser.switchTo().alert();
            if (alert != null) {
                await this.dismissAlert();
            }
            protractor_1.browser.logger.info("Checked the alert and dismissed it.");
        };
        //checks for alert and accepts if present
        this.checkAlertAndAccept = async () => {
            let alert = protractor_1.browser.switchTo().alert();
            if (alert != null) {
                await this.acceptAlert();
            }
            protractor_1.browser.logger.info("Checked the alert and accepted it.");
        };
        //checks for alert and writes text, if present
        this.checkAlertAndWriteText = async () => {
            let alert = protractor_1.browser.switchTo().alert();
            if (alert != null) {
                await this.dismissAlert();
            }
            protractor_1.browser.logger.info("Checked the alert and dismissed it.");
        };
        // Actions
        //Method to navigate menu - two level
        this.menuHoverOneLevel = async (element1, element2) => {
            protractor_1.browser.logger.info("Navigating from - " + element1.locator() + " to - " + element2.locator());
            await protractor_1.browser.actions().click(element1).perform().then(function (click) {
                protractor_1.browser.actions().click(element2).perform();
            });
        };
        //Method to navigate menu - three level
        this.menuHoverTwoLevel = async (element1, element2, element3) => {
            protractor_1.browser.logger.info("Navigating from - " + element1.locator() + " to - " + element2.locator() + " and the +" + element3.locator());
            await protractor_1.browser.actions().click(element1).perform().then(function (click) {
                protractor_1.browser.actions().click(element2).perform().then(function (click) {
                    protractor_1.browser.actions().click(element3).perform();
                });
            });
        };
        //Method to move to element and click
        this.moveToElementAndClick = async (element) => {
            protractor_1.browser.logger.info("Moving to element and clicking it - " + element.locator());
            await protractor_1.browser.actions().mouseMove(element).perform().then(function (click) {
                protractor_1.browser.actions().click(element).perform();
            });
        };
        //Drag and Drop one element to another
        this.dragAndDropElement = async (source, target) => {
            protractor_1.browser.logger.info("Dragging - " + source + " and placing it to target -" + target);
            protractor_1.browser.actions().
                dragAndDrop(source, target).
                perform();
        };
        //Double Clik an element
        this.doubleClickElement = async (element) => {
            protractor_1.browser.logger.info("Double Clicking element - " + element);
            protractor_1.browser.actions().
                doubleClick(element).
                perform();
        };
        //WebDriver Basic commands
        this.clickElement = async (element) => {
            protractor_1.browser.logger.info("Clicking - " + element.locator());
            await element.click();
        };
        this.clearText = async (element) => {
            protractor_1.browser.logger.info("Cleared - " + element.locator());
            await element.clear();
        };
        this.sendTextInTextBox = async (element, TextToBeKeyed) => {
            protractor_1.browser.logger.info("Entering text +" + TextToBeKeyed + " in " + element.locator());
            await element.sendKeys(TextToBeKeyed);
        };
        this.getTextOfElement = async (element) => {
            await element.getText().then(function (text) {
                protractor_1.browser.logger.info(text);
            });
        };
        this.getTextOfElementR = async (element) => {
            await element.getText().then(function (text) {
                return (text);
            });
        };
        this.isElementPresent = async (element) => {
            protractor_1.browser.logger.info("Waiting for element to be present - " + element.locator());
            await element.isElementPresent().then(function (isPresent) {
                if (isPresent) {
                    return isPresent = true;
                }
                else {
                    return isPresent = false;
                }
            });
        };
        this.isElementDisplayed = async (element) => {
            protractor_1.browser.logger.info("Waiting for element to be displayed - " + element.locator());
            await element.isDisplayed().then(function (isDisplayed) {
                if (isDisplayed) {
                    return isDisplayed = true;
                }
                else {
                    return isDisplayed = false;
                }
            });
        };
        this.isElementEnabled = async (element) => {
            protractor_1.browser.logger.info("Waiting for element to be enabled - " + element.locator());
            await element.isEnabled().then(function (isEnabled) {
                if (isEnabled) {
                    return isEnabled = true;
                }
                else {
                    return isEnabled = false;
                }
            });
        };
        this.isElementSelected = async (element) => {
            protractor_1.browser.logger.info("Waiting for element to be selected - " + element.locator());
            await element.isSelected().then(function (isSelected) {
                if (isSelected) {
                    return isSelected = true;
                }
                else {
                    return isSelected = false;
                }
            });
        };
        //wait
        this.waitForPresenceOfElement = function (element) {
            return ptor_1.protractor.ExpectedConditions.and(ptor_1.protractor.ExpectedConditions.presenceOf(element));
        };
        this.waitForTextToBePresentInElement = function (element, actualText) {
            let hasText = function () {
                return element.getText().then(function (actualText) {
                    return actualText;
                });
            };
            return ptor_1.protractor.ExpectedConditions.and(ptor_1.protractor.ExpectedConditions.presenceOf(element), hasText);
        };
        //Window Handles
    }
}
exports.genericUtility = genericUtility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpY1V0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0L2dlbmVyaWNVdGlsaXR5L2dlbmVyaWNVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNFO0FBQ3RFLGdEQUFtRDtBQUluRCxNQUFhLGNBQWM7SUFBM0I7UUFDSSxxQkFBcUI7UUFDakIsY0FBUyxHQUFHLEtBQUssRUFBRSxHQUFVLEVBQUUsRUFBRTtZQUM3QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFBO1FBQ0wsT0FBTztRQUNILGtDQUFrQztRQUNsQyxnQkFBVyxHQUFHLEtBQUssSUFBRSxFQUFFO1lBQ25CLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7UUFFRCxvQ0FBb0M7UUFDcEMsaUJBQVksR0FBRSxLQUFLLElBQUUsRUFBRTtZQUNuQixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0Msb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBO1FBRUQsMkNBQTJDO1FBQzNDLHlCQUFvQixHQUFFLEtBQUssSUFBRSxFQUFFO1lBQzNCLElBQUksS0FBSyxHQUFHLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsSUFBRyxLQUFLLElBQUUsSUFBSSxFQUFDO2dCQUNYLE1BQU0sSUFBSSxDQUFDLFlBQVks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