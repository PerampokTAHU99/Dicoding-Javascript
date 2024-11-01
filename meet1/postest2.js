const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
function addEmployee(name, email, joinYear) {
  const newEmployee = {
    name,
    email,
    joinYear,
  };
  employees.push(newEmployee);

  return employees;
}

addEmployee('Theo', 'theo@dicoding', 2024);
console.log(employees);

