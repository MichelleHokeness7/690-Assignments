// CREATE GLOBAL VARIABLES with HELPER FUNCTION
    const $ = (id) => document.getElementById(id)

    let empForm = $('empForm')
    let id = $('id')
    let empName = $('empName')
    let ext = $('ext')
    let email = $('email')
    let department = $('department')
    let submit = $('submit')

    empForm.addEventListener('submit', empInfo)

    function empInfo(e) {
        e.preventDefault()
        console.log(`ID: ${id.value}`)
        console.log(`Name: ${empName.value}`)
        console.log(`Extension: ${ext.value}`)
        console.log(`Email: ${email.value}`)
        console.log(`Department: ${department.value}`)
    }

