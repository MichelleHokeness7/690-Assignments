// CREATE AN ARRAY OF EMPLOYEES
let employeesArray = [
    [12345678, 'Felix Lopez', 1234, 'felix@test.com', 'Sales'],
    [22322222, 'Molly Smith', 2232, 'molly@test.com', 'Engineer'],
    [33433333, 'Kevin Jones', 3343, 'kevin@test.com', 'Quality Assurance'],
    [77477777, 'Wes Hampton', 7747, 'wesley@test.com', 'Executive'],
    [47478888, 'Georgie Brooks', 4747, 'gBrooks@test.com', 'Marketing']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
        employeesArray = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm')
let empTable = document.getElementById('empTable')
let empCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employeesArray)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = parseInt(document.getElementById('id').value)
    let empName = document.getElementById('name').value
    let empExt = parseInt(document.getElementById('extension').value)
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmpArray = [empId, empName, empExt, empEmail, empDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employeesArray.push(newEmpArray)
    // BUILD THE GRID
    buildGrid(employeesArray)
    // RESET THE FORM
    document.getElementById('addForm').reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
    // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentElement.parentElement.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            employeesArray.splice(rowIndex -1, 1)
            // BUILD THE GRID
            buildGrid(employeesArray)
        }
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid(employeesArray) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let eachEmp of employeesArray) {
        tbody.innerHTML +=
            // REBUILDING THE ROW STRUCTURE
            `
            <tr>
                <td>${eachEmp[0]}</td>
                <td>${eachEmp[1]}</td>
                <td>${eachEmp[2]}</td>
                <td>${eachEmp[3]}</td>
                <td>${eachEmp[4]}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>

            </tr>
            `
    }
    
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${employeesArray.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employeesArray))
};