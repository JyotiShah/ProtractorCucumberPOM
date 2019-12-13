"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class resources {
    constructor() {
        this.getUserHome = () => {
            return process.env.HOME || process.env.USERPROFILE;
        };
        this.testDataFolder = () => {
            return (process.cwd() + "/Test/data/test/data.json");
        };
        this.devDataFolder = () => {
            return (process.cwd() + "/Test/data/dev/data.json");
        };
    }
}
exports.resources = resources;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVGVzdC9nZW5lcmljVXRpbGl0eS9yZXNvdXJjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFhLFNBQVM7SUFBdEI7UUFFSSxnQkFBVyxHQUFHLEdBQUcsRUFBRTtZQUNmLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDckQsQ0FBQyxDQUFDO1FBRUosbUJBQWMsR0FBRyxHQUFFLEVBQUU7WUFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQztRQUVKLGtCQUFhLEdBQUcsR0FBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUM7SUFFUixDQUFDO0NBQUE7QUFkRCw4QkFjQztBQUFBLENBQUMifQ==