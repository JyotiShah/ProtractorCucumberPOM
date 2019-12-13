"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
const log4js = require('log4js');
const defaultConfig = require('./defaultconf');
const resources_1 = require("../Test/genericUtility/resources");
exports.dev = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        url: 'yourURL',
        username: 'dev',
        password: 'dev',
        wait: 5000
        // sauceUser: process.env.SAUCE_USERNAME,
        // sauceKey: process.env.SAUCE_ACCESS_KEY,
    },
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //  SELENIUM_PROMISE_MANAGER: false,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // This setting tells protractor to wait for all apps
    // to load on the page instead of just the first.
    useAllAngular2AppRoots: true,
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../Test/features/**/**.feature',
    ],
    cucumberOpts: {
        // require step definitions
        compiler: "ts:ts-node/register",
        tags: "@smoke",
        format: 'json:./cucumberreport.json',
        require: [
            '../JavaScriptFiles/Test/steps/**/*.js',
            '../JavaScriptFiles/Test/hooks/*.js',
        ]
    },
    beforeLaunch: function () {
        log4js.configure({
            appenders: {
                out: { type: 'log4js-protractor-appender',
                    category: 'protractorLog4js' },
                app: { type: "file",
                    filename: './logs/ExecutionLog.log',
                    category: 'protractorLog4js' }
            },
            categories: {
                default: { appenders: ['out', 'app'], level: 'info' }
            }
        });
    },
    onPrepare: () => {
        let userPath = new resources_1.resources();
        protractor_1.browser.data = require(userPath.devDataFolder());
        protractor_1.browser.logger = log4js.getLogger('protractorLog4js');
        // browser.env = env;
        protractor_1.browser.manage().window().maximize();
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "Local",
                "Test Environment": "Dev",
                "Browser": "Chrome  72",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
exports.config = Object.assign(defaultConfig, exports.dev);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZW52L2RldmVudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsaUVBQW1EO0FBQ25ELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsZ0VBQTZEO0FBRWxELFFBQUEsR0FBRyxHQUFXO0lBQ3RCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFFbkQsTUFBTSxFQUFFO1FBQ0wsR0FBRyxFQUFFLFNBQVM7UUFDZCxRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsSUFBSSxFQUFFLElBQUk7UUFFWix5Q0FBeUM7UUFDekMsMENBQTBDO0tBQzNDO0lBRUEsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDaEUsb0NBQW9DO0lBRWxDLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELHFEQUFxRDtJQUNyRCxpREFBaUQ7SUFDakQsc0JBQXNCLEVBQUUsSUFBSTtJQUU1Qix1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0M7S0FFdkM7SUFDRCxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixJQUFJLEVBQUMsUUFBUTtRQUNiLE1BQU0sRUFBQyw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFO1lBQ1AsdUNBQXVDO1lBQ3ZDLG9DQUFvQztTQUNuQztLQUNKO0lBRUQsWUFBWSxFQUFDO1FBQ1QsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNmLFNBQVMsRUFBRTtnQkFDVCxHQUFHLEVBQUMsRUFBRSxJQUFJLEVBQUUsNEJBQTRCO29CQUNsQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQ3BDLEdBQUcsRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTthQUNuQztZQUNILFVBQVUsRUFBRTtnQkFDSixPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTthQUM5RDtTQUNBLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2QsSUFBSSxRQUFRLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDL0Isb0JBQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELG9CQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxxQkFBcUI7UUFDckIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxLQUFLO2dCQUN6QixTQUFTLEVBQUUsWUFBWTtnQkFDdkIsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FFTixDQUFDO0FBQ0YsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFHLENBQUUsQ0FBQyJ9