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
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        url: '',
        username: 'xyz',
        password: 'xyz',
        wait: 5000
        //  sauceUser: process.env.SAUCE_USERNAME,
        //  sauceKey: process.env.SAUCE_ACCESS_KEY,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdGNvbmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9lbnYvZGVmYXVsdGNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLGlFQUFtRDtBQUNuRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFdEIsUUFBQSxNQUFNLEdBQVc7SUFDMUIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUVuRCxNQUFNLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUUsSUFBSTtRQUViLDBDQUEwQztRQUMxQywyQ0FBMkM7S0FDM0M7SUFFQSxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUNoRSxvQ0FBb0M7SUFFbEMsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QscURBQXFEO0lBQ3JELGlEQUFpRDtJQUNqRCxzQkFBc0IsRUFBRSxJQUFJO0lBRTVCLHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLGdDQUFnQztLQUV2QztJQUNELFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLElBQUksRUFBQyxRQUFRO1FBQ2IsTUFBTSxFQUFDLDRCQUE0QjtRQUNuQyxPQUFPLEVBQUU7WUFDUCx1Q0FBdUM7WUFDdkMsb0NBQW9DO1NBQ25DO0tBQ0o7SUFFRCxZQUFZLEVBQUM7UUFDVCxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2YsU0FBUyxFQUFFO2dCQUNULEdBQUcsRUFBQyxFQUFFLElBQUksRUFBRSw0QkFBNEI7b0JBQ2xDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtnQkFDcEMsR0FBRyxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGtCQUFrQixFQUFFO2FBQ25DO1lBQ0gsVUFBVSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFFLEtBQUssRUFBRSxLQUFLLENBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2FBQzlEO1NBQ0EsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDZCxvQkFBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQscUJBQXFCO1FBQ3JCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFdkMsQ0FBQztJQUVELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsYUFBYTtnQkFDM0Isa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBRUwsQ0FBQyJ9