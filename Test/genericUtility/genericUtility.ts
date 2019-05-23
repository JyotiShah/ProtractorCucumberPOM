import { browser, ElementFinder, Locator, element } from "protractor";
import { protractor } from "protractor/built/ptor";
import {  Status } from 'cucumber';
import { async } from "q";

export class genericUtility{
    //Get Application URL
        getAppURL = async (url:string) =>{
            browser.get(url);
            browser.logger.info("Navigated to - "+ url);
        }
    //Alert
        //switches to alert and accepts it
        acceptAlert = async()=>{
            await browser.switchTo().alert().accept();
            browser.logger.info("Accepted the Alert");
        }

        //switches to alert and dismisses it
        dismissAlert= async()=> {
            await browser.switchTo().alert().dismiss();
            browser.logger.info("Dismissed the Alert");
        }

        //checks for alert and dismisses if present
        checkAlertAndDismiss= async()=>{
            let alert = browser.switchTo().alert();
            if(alert!=null){
                await this.dismissAlert();
            }
            browser.logger.info("Checked the alert and dismissed it.");
        }
        
        //checks for alert and accepts if present
        checkAlertAndAccept= async()=>{
            let alert = browser.switchTo().alert();
            if(alert!=null){
                await this.acceptAlert();
            }
            browser.logger.info("Checked the alert and accepted it.");
        }
        
        //checks for alert and writes text, if present
        checkAlertAndWriteText= async()=>{
            let alert = browser.switchTo().alert();
            if(alert!=null){
                await this.dismissAlert();
            }
            browser.logger.info("Checked the alert and dismissed it.");
        }

    // Actions
        //Method to navigate menu - two level
        menuHoverOneLevel= async(element1:ElementFinder, element2:ElementFinder)=> {
            browser.logger.info("Navigating from - "+ element1.locator() +" to - "+ element2.locator());
            await browser.actions().click(element1).perform().then(function (click){
                    browser.actions().click(element2).perform();
            });
        };

        //Method to navigate menu - three level
        menuHoverTwoLevel= async(element1, element2, element3)=> {
            browser.logger.info("Navigating from - "+ element1.locator() +" to - "+ element2.locator()+ " and the +" + element3.locator());
            await browser.actions().click(element1).perform().then(function (click){
                    browser.actions().click(element2).perform().then(function (click){
                    browser.actions().click(element3).perform();
                });
            });
        };
        
        //Method to move to element and click
        moveToElementAndClick = async(element:ElementFinder)=>{
            browser.logger.info("Moving to element and clicking it - "+ element.locator());
            await browser.actions().mouseMove(element).perform().then(function (click){
                browser.actions().click(element).perform();
            });
        };

        //Drag and Drop one element to another

        dragAndDropElement = async(source:ElementFinder, target:ElementFinder)=>{
            browser.logger.info("Dragging - "+ source + " and placing it to target -"+ target);
            browser.actions().
                dragAndDrop(source, target).
                perform();
        }

        //Double Clik an element
        doubleClickElement = async(element:ElementFinder)=>{
            browser.logger.info("Double Clicking element - "+ element);
            browser.actions().
                    doubleClick(element).
                    perform();
        }

        

    //WebDriver Basic commands
        
        clickElement = async( element:ElementFinder)=>{
            browser.logger.info("Clicking - " + element.locator());
            await element.click();
        }

        clearText = async( element:ElementFinder)=>{
            browser.logger.info("Cleared - " + element.locator());
            await element.clear();
        }

        sendTextInTextBox = async( element:ElementFinder, TextToBeKeyed)=>{
            browser.logger.info("Entering text +" + TextToBeKeyed + " in " + element.locator());
            await element.sendKeys(TextToBeKeyed);
        }

        getTextOfElement= async(element)=>{
            await element.getText().then(function(text){
                   browser.logger.info(text);
            });
        }

        getTextOfElementR= async(element)=>{
            await element.getText().then(function(text){
                   return (text);
            });
        }
        isElementPresent = async(element)=>{
            browser.logger.info("Waiting for element to be present - " + element.locator());
            await element.isElementPresent().then(function(isPresent){
                if(isPresent){
                    return isPresent=true;
                }else{
                    return isPresent = false;
                }
            }) 
        }

        isElementDisplayed = async(element:ElementFinder)=>{
            browser.logger.info("Waiting for element to be displayed - " + element.locator());
            await element.isDisplayed().then(function(isDisplayed){
                if(isDisplayed){
                    return isDisplayed=true;
                }else{
                    return isDisplayed = false;
                }
            }) 
        }

        isElementEnabled = async(element:ElementFinder)=>{
            browser.logger.info("Waiting for element to be enabled - " + element.locator());
            await element.isEnabled().then(function(isEnabled){
                if(isEnabled){
                    return isEnabled=true;
                }else{
                    return isEnabled = false;
                }
            }) 
        }

        isElementSelected = async(element:ElementFinder)=>{
            browser.logger.info("Waiting for element to be selected - " + element.locator());
            await element.isSelected().then(function(isSelected){
                if(isSelected){
                    return isSelected=true;
                }else{
                    return isSelected = false;
                }
            }) 
        }

     
        //wait
        waitForPresenceOfElement = function(element:ElementFinder) {
            return protractor.ExpectedConditions.and(protractor.ExpectedConditions.presenceOf(element));
          };

        waitForTextToBePresentInElement = function(element:ElementFinder, actualText) {
            let hasText = function() {
              return element.getText().then(function(actualText) {
                return actualText;
              });
            };
            return protractor.ExpectedConditions.and(protractor.ExpectedConditions.presenceOf(element), hasText);
          };

    //Window Handles



}