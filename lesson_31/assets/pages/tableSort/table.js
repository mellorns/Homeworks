const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 28 },
    { id: 4, name: "Diana Prince", email: "diana@example.com", age: 32 },
    { id: 5, name: "Ethan Hunt", email: "ethan@example.com", age: 29 },
    { id: 6, name: "Fiona Adams", email: "fiona@example.com", age: 27 },
    { id: 7, name: "George Wilson", email: "george@example.com", age: 35 },
    { id: 8, name: "Hannah Scott", email: "hannah@example.com", age: 24 },
    { id: 9, name: "Ian Turner", email: "ian@example.com", age: 31 },
    { id: 10, name: "Julia Roberts", email: "julia@example.com", age: 26 }
];


let table = document.getElementById('users_table')

function fillTheTable(table, arr) {

    let tbody = table.querySelector('tbody')

    if (tbody.innerHTML.trim() !== '') {
        tbody.innerHTML = ''
    }

    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr')
        for (let key in arr[i]) {
            let td = document.createElement('td')
            td.append(arr[i][key])
            td.dataset[key] = arr[i][key]
            tr.append(td)
        }
        tbody.append(tr)
    }
}

let cashTable = []

fillTheTable(table, users)

function sortTable(th, arr) {

    let res = []

    if (th.dataset.sorted && cashTable.length) {

        res = cashTable.reverse()

    } else {
        let sortBy = th.dataset.sort

        if (cashTable.length) {
            arr = cashTable
        }

        res = arr.toSorted((a, b) => {

            switch (typeof a[sortBy]) {
                case 'number':
                    return b[sortBy] - a[sortBy]
                case 'string':
                    return -1
            }
        })
    }
    cashTable = res

    th.dataset.sorted = true

    fillTheTable(table, res)
}

table.addEventListener('click', function (e) {

    let th = e.target.closest('th')

    if (!th) return

    if (!table.contains(th)) return

    sortTable(th, users)

})