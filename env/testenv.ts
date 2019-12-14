import {Config, browser} from "protractor";
import * as reporter from "cucumber-html-reporter";
const log4js = require('log4js');
const defaultConfig = require('./defaultconf');
import { resources } from "../Test/genericUtility/resources";

export let qa: Config = {
   // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   
   params: {
  
      url: 'http://juliemr.github.io/protractor-demo/',
      username: 'test',
      password: 'test',
      wait: 5000
    
    // sauceUser: process.env.SAUCE_USERNAME,
    // sauceKey: process.env.SAUCE_ACCESS_KEY,
  },
  
   directConnect:true,
   framework:'custom',
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
            // '../Test/features/program/**.feature'
    ],
    cucumberOpts: {
        // require step definitions
        compiler: "ts:ts-node/register",
        tags:"@calc" ,
        format:'json:./cucumberreport.json',
        require: [
          '../JavaScriptFiles/Test/steps/**/*.js', // accepts a glob,
          '../JavaScriptFiles/Test/hooks/*.js',
          ]
      },

      beforeLaunch:function(){
          log4js.configure({
            appenders: {
              out:{ type: 'log4js-protractor-appender', 
                    category: 'protractorLog4js' },
              app:{ type: "file",
                    filename: './logs/ExecutionLog.log',
                    category: 'protractorLog4js' }
              },
            categories: {
                    default: { appenders: [ 'out', 'app' ], level: 'info' }
            }
            });
        },
      onPrepare: () =>{
        let userPath = new resources();
        browser.data = require(userPath.testDataFolder());
        browser.logger = log4js.getLogger('protractorLog4js');
        
        browser.manage().window().maximize();
        
      },

      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"SomeVersion",
              "Test Environment": "Test",
              "Browser": "Chrome  75",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);
      }
  
};
exports.config = Object.assign(defaultConfig, qa );