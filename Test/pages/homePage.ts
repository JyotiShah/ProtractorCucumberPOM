import { ElementFinder,element,by, browser } from "protractor";
import { genericUtility } from "../genericUtility/genericUtility";

let genericUtilityObject = new genericUtility();

export class homePage{

    profile:ElementFinder;
    logout:ElementFinder;
    
        constructor(){

            this.profile=element(by.tagName("profile"));
            this.logout=element(by.css(".logout"));
            
        };
      
        clickOnLogoutButton = async ()=>{
                await genericUtilityObject.menuHoverOneLevel(this.profile, this.logout);
                browser.logger.info("Clicked Logout button");
                
        
        };

};