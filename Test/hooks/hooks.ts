import { After,Before, Status } from 'cucumber'
import { browser } from "protractor";


Before(async function () {
    // This hook will be executed before scenarios tagged with @foo
    // await browser.manage().window().maximize();
  });

After(async function(scenario) {
    // This hook will be executed before scenarios tagged with @foo
    browser.logger.info("Test is completed");
    if (scenario.result.status=== Status.FAILED || scenario.result.status=== Status.PASSED){
      //code to take screesnhot
     const screenshot= await browser.takeScreenshot();
   
          this.attach(screenshot,"image/png");
    } 
    
});
  

