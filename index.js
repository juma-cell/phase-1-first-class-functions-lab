// Code your solution in this file!
// return the first two drivers in an array of drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // return the last two drivers in an array of drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // an array containing two elements: returnFirstTwoDrivers and returnLastTwoDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // higher-order function that returns a function that multiplies a fare by a given integer
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // function that doubles a fare
  const fareDoubler = createFareMultiplier(2);
  
  // function that triples a fare
  const fareTripler = createFareMultiplier(3);
  
  // select different drivers based on an array of drivers and a function
  const selectDifferentDrivers = function(drivers, returnDrivers) {
    return returnDrivers(drivers);
  };
  