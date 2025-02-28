// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let keepEntering = true;
// Collect employee data

const collectEmployees = function() {
    const employeesArray = [] 
      // Get user input to create and return an array of employee objects
      
      while(keepEntering){
        const name = prompt("Enter first name : ").toUpperCase();
        const lastName = prompt("Enter last name : ").toUpperCase();
        const salary = prompt("Enter salary: ");
        
        if (isNaN(`${salary}`)){
          alert('Please enter a valid salary')
        }
        
        //Creating object called "empObj "  with parameters like firstname , lastName , salary.
        const empObj = {
          firstName: name,
          lastName: lastName,
          salary: salary}
        employeesArray.push(empObj) // Assigning empObj in "employeesArray".
        keepEntering = confirm("Do you wanna add another employee? : ")
    }
    return employeesArray;

  }
  
     // Display the average salary
    const displayAverageSalary = function(employeesArray) {
      // Calculate and display the average salary 
      let salary = "dollar";

    return salary 
    }

    // Select a random employee
    const getRandomEmployee = function(employeesArray) {
      // Select and display a random employee
      const randomIndex = [Math.floor(Math.random() * employeesArray.length)];   
      const randomElement = employeesArray[randomIndex];
      console.log(`${randomElement}`);
      return randomElement;
      
    }



  
  



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);



