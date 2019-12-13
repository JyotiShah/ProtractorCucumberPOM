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
exports.qa = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        url: 'https://www.google.com',
        username: 'test',
        password: 'test',
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
        tags: "@check",
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
        protractor_1.browser.data = require(userPath.testDataFolder());
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
                "App Version": "SomeVersion",
                "Test Environment": "Test",
                "Browser": "Chrome  72",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
exports.config = Object.assign(defaultConfig, exports.qa);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGVudi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Vudi90ZXN0ZW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyxpRUFBbUQ7QUFDbkQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxnRUFBNkQ7QUFFbEQsUUFBQSxFQUFFLEdBQVc7SUFDckIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUVuRCxNQUFNLEVBQUU7UUFFTCxHQUFHLEVBQUUsd0JBQXdCO1FBQzdCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxJQUFJO1FBRVoseUNBQXlDO1FBQ3pDLDBDQUEwQztLQUMzQztJQUVBLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQ2hFLG9DQUFvQztJQUVsQyx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxxREFBcUQ7SUFDckQsaURBQWlEO0lBQ2pELHNCQUFzQixFQUFFLElBQUk7SUFFNUIsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsZ0NBQWdDO0tBRXZDO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzNCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsSUFBSSxFQUFDLFFBQVE7UUFDYixNQUFNLEVBQUMsNEJBQTRCO1FBQ25DLE9BQU8sRUFBRTtZQUNQLHVDQUF1QztZQUN2QyxvQ0FBb0M7U0FDbkM7S0FDSjtJQUVELFlBQVksRUFBQztRQUNULE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDZixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxFQUFDLEVBQUUsSUFBSSxFQUFFLDRCQUE0QjtvQkFDbEMsUUFBUSxFQUFFLGtCQUFrQixFQUFFO2dCQUNwQyxHQUFHLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7YUFDbkM7WUFDSCxVQUFVLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7YUFDOUQ7U0FDQSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNkLElBQUksUUFBUSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQy9CLG9CQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNsRCxvQkFBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQscUJBQXFCO1FBQ3JCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFdkMsQ0FBQztJQUVELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsYUFBYTtnQkFDM0Isa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBRU4sQ0FBQztBQUNGLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBRSxDQUFFLENBQUMifQ==