require ( './indexTest.js' )
let name = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(drivers, name) {
   
        return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    };

function fuzzyMatch(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.startsWith(name);
    });
}
function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name;
    });
}