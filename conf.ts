const log4js = require('log4js');
let protractorConf = {};
  let isQA = true; 
  const defaultConf = require('./env/defaultconf');
    
  if (isQA) {
    
    const qaEnvConf = require('./env/testenv');
    protractorConf = Object.assign(defaultConf, qaEnvConf);
  } else {
    const devEnvConf = require('./env/devenv');
    protractorConf = Object.assign(defaultConf, devEnvConf);
    console.log(protractorConf)
  }

  exports.config = protractorConf;
  