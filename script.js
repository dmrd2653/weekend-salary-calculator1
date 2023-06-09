let currentForm = 0;

// function to submit form with inputs and add to salary table
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

    //  clear the form
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#ID').value = '';
    document.querySelector('#job-title').value = '';
    document.querySelector('#salary').value = '';
    
    currentForm += 1
    totalMonthy(annualSalary);
}

let sumAll = 0;

function totalMonthy(salaries) {
    sumAll = sumAll + Number(salaries);
    document.getElementById("salaries-total").innerHTML = `
    <h2>Total Monthly Salaries </h2>
    <h3> ${sumAll/12} </h3>
    `;
    if ((sumAll/12) >= 20000.00) {
        document.getElementById("salaries-total").style.backgroundColor = "red";
    };
}

function deleteRow(event) {
    let row = event.target.parentElement.parentElement;
    row.remove();
}