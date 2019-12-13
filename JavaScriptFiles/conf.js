const log4js = require('log4js');
let protractorConf = {};
let isQA = true;
const defaultConf = require('./env/defaultconf');
if (isQA) {
    const qaEnvConf = require('./env/testenv');
    protractorConf = Object.assign(defaultConf, qaEnvConf);
}
else {
    const devEnvConf = require('./env/devenv');
    protractorConf = Object.assign(defaultConf, devEnvConf);
    console.log(protractorConf);
}
exports.config = protractorConf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFakQsSUFBSSxJQUFJLEVBQUU7SUFFUixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0NBQ3hEO0tBQU07SUFDTCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7Q0FDNUI7QUFFRCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyJ9