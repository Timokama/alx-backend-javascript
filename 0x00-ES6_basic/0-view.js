console.log('----')
function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
    
function getLast() {
  return ' is okay';
}
    
function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

console.log(`${taskFirst()} ${taskNext()}`);

console.log('----')
function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  
  return [task, task2];
}

console.log(taskBlock(true));
console.log(taskBlock(false));

console.log('----')
function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

console.log('----')
function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

console.log('----')
function returnHowManyArguments(...theArgs) {
  return theArgs.length;
}

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));

console.log('----')
function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

console.log('----')
function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  
  // return 'As of ' + year + ', it was the seventh-highest income county in the United States'
  //   / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
  //   / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}

console.log(getSanFranciscoDescription());

console.log('----')
function getBudgetObject(income, gdp, capita) {
  // const budget = {
  //   income: income,
  //   gdp: gdp,
  //   capita: capita,
  // };
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

console.log(getBudgetObject(400, 700, 900));

console.log('----')
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
  
function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

console.log('----')
function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // getIncomeInDollars: function (income) {
    //   return `$${income}`;
    // },
    // getIncomeInEuros: function (income) {
    //   return `${income} euros`;
    // },
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

console.log('----')
function appendToEachArrayValue(array, appendString) {
  // for (var idx in array) {
  //   var value = array[idx];
  //   array[idx] = appendString + value;
  // }
  const newArray = [];
  for (const idx of array) {
    newArray.push(`${appendString}${idx}`);
  }

  return newArray;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

console.log('----')
function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
}

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

console.log('----')
function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

console.log('----')
function createIteratorObject(report) {
  let allEmployees = [];
  for (const item of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...item,
    ];
  }
  return allEmployees;
}

const employee = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const reporter = createReportObject(employee);

const reportWithIterator = createIteratorObject(reporter);

for (const item of reportWithIterator) {
  console.log(item);
}

console.log('----')
function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}

const employ = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const reports = createReportObject(employ);
const reportWithIterators = createIteratorObject(reports);

console.log(iterateThroughObject(reportWithIterators));
console.log('----')