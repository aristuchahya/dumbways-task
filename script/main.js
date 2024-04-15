window.addEventListener("DOMContentLoaded", () => {
    initRoutes()
})

function initRoutes() {
    const tasks = []

    for (let i = 1; i <= 30; i++) {
        tasks.push(`TASK DAY ${i}`)
    }

    const inputSearch = document.querySelector('.input-search')
    inputSearch.addEventListener("input", (event) => {
        const userQuery = removeSpaces(event.target.value)
        
        const searchedTask = tasks.filter((task) => {
            const clearTask = removeSpaces(task)
            return clearTask.includes(userQuery)
        })
        
        renderTask(searchedTask)
    })

    renderTask(tasks)
}

function removeSpaces(str) {
    strLowercase = str.toLowerCase()

    return strLowercase.replace(/\s/g, "") // remove spaces
}

function renderTask(tasks) {
    const routes = document.getElementById("routes")
    routes.innerHTML = ''

    tasks.forEach((task) => {
        const taskSplitted = task.split(" ")
        const taskPath = taskSplitted.join('-').toLowerCase()
        
        const route = document.createElement("a")
        route.textContent = task
        route.setAttribute("href", taskPath)

        routes.append(route)
    })
}