"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const genericUtility_1 = require("../genericUtility/genericUtility");
let genericUtilityObject = new genericUtility_1.genericUtility();
class homePage {
    constructor() {
        this.clickOnLogoutButton = async () => {
            await genericUtilityObject.menuHoverOneLevel(this.profile, this.logout);
            protractor_1.browser.logger.info("Clicked Logout button");
        };
        this.profile = protractor_1.element(protractor_1.by.tagName("profile"));
        this.logout = protractor_1.element(protractor_1.by.css(".logout"));
    }
    ;
}
exports.homePage = homePage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0L3BhZ2VzL2hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQStEO0FBQy9ELHFFQUFrRTtBQUVsRSxJQUFJLG9CQUFvQixHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBRWhELE1BQWEsUUFBUTtJQUtiO1FBT0Esd0JBQW1CLEdBQUcsS0FBSyxJQUFHLEVBQUU7WUFDeEIsTUFBTSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUdyRCxDQUFDLENBQUM7UUFWRSxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUFBLENBQUM7Q0FTVDtBQW5CRCw0QkFtQkM7QUFBQSxDQUFDIn0=