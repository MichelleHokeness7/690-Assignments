async function fetchEmployees() {
    try {
        const response = await fetch('/data/employees.json')
        const data = await response.json()
        for (let data of employees) {
            document.body.innerHTML +=
                `<p>
                    ${data.id}<br>
                    ${data.name}<br>
                    ${data.ext}<br>
                    ${data.email}<br>
                    ${data.title}<br>
                </p>
                `
        }
    } catch (error) {
        console.error(error)
    }

}
fetchEmployees()

// EXPORT THE FUNCTION
export default { fetchEmployees }