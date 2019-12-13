"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(async function () {
    // This hook will be executed before scenarios tagged with @foo
    // await browser.manage().window().maximize();
});
cucumber_1.After(async function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.logger.info("Test is completed");
    if (scenario.result.status === cucumber_1.Status.FAILED || scenario.result.status === cucumber_1.Status.PASSED) {
        //code to take screesnhot
        const screenshot = await protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0L2hvb2tzL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQStDO0FBQy9DLDJDQUFxQztBQUdyQyxpQkFBTSxDQUFDLEtBQUs7SUFDUiwrREFBK0Q7SUFDL0QsOENBQThDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUwsZ0JBQUssQ0FBQyxLQUFLLFdBQVUsUUFBUTtJQUN6QiwrREFBK0Q7SUFDL0Qsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDekMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFBQztRQUNyRix5QkFBeUI7UUFDMUIsTUFBTSxVQUFVLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3pDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==