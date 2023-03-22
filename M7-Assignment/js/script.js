// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm')
let table = document.querySelector('#employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0
function upCount() {
    count++
    document.getElementById('empCount').innerText = `(${count})`
}
function downCount() {
    count--
    document.getElementById('empCount').innerText = `(${count})`
}


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value
    let empName = document.querySelector('#name').value
    let ext = document.querySelector('#extension').value
    let email = document.querySelector('#email').value
    let dept = document.querySelector('#department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell()
    let cellName = newRow.insertCell()
    let cellExt = newRow.insertCell()
    let cellEmail = newRow.insertCell()
    let cellDept = newRow.insertCell()
    let cellDelete = newRow.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(id)
    cellId.appendChild(textId)

    let textName = document.createTextNode(empName)
    cellName.appendChild(textName)

    let textExt = document.createTextNode(ext)
    cellExt.appendChild(textExt)

    let textEmail = document.createTextNode(email)
    cellEmail.appendChild(textEmail)

    let textDept = document.createTextNode(dept)
    cellDept.appendChild(textDept)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)


    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    upCount()

})

// DELETE EMPLOYEE
form.addEventListener('click', (e) => {
    // check for delete btn bubbling
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // Remove
            deleteRow(e.target.newRow(e.target.parentElement))
        }
    }
})