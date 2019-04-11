
export class resources{

    getUserHome = () =>{
        return process.env.HOME || process.env.USERPROFILE;
      };

    testDataFolder = ()=>{
        return (process.cwd()+"/Test/data/test/data.json");
      }; 
    
    devDataFolder = ()=>{
        return (process.cwd()+"/Test/data/dev/data.json");
      };
    
};