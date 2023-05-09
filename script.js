let currentForm = 0;
function deleteRow(event) {
    let row = event.target.parentElement.parentElement;
    row.remove();
}
 
function totalMonthy(tableSalary) {
    let employeeTable = document.getElementById("employee-list");
    let tableSalary = employeeTable.getElementById("salaries");
    for (let i = 1; i < tableSalary.columns.length; i++) {
            let sumAll = 0;
            if (`${annualSalary}`) {
                let sumAll = sumAll + (`${annualSalary}`);
            }
            return sumAll;
    
    }

}

function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let id = document.querySelector('#ID').value;
    let title = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#salary').value;
    let salaryTable = document.querySelector('#salary-list');
    salaryTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td id="salaries">${annualSalary}</td>
            <td><button onclick="deleteRow(event)">Delete</button></td>
        </tr>
    `;
    
    currentForm += 1;
}