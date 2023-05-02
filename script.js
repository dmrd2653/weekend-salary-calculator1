function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();

    let firstName = document.querySelector('#first-name').value;
    console.log(firstName);
    let lastName = document.querySelector('#last-name').value;
    console.log(lastName);
    let id = document.querySelector('#id').number(id);
    console.log(id);
    let title = document.querySelector('#job-title').value;
    console.log(title);
    let annualSalary = document.querySelector('#salary').value;
    console.log(annualSalary);
}