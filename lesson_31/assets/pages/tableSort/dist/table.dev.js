"use strict";

var users = [{
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  age: 25
}, {
  id: 2,
  name: "Bob Smith",
  email: "bob@example.com",
  age: 30
}, {
  id: 3,
  name: "Charlie Brown",
  email: "charlie@example.com",
  age: 28
}, {
  id: 4,
  name: "Diana Prince",
  email: "diana@example.com",
  age: 32
}, {
  id: 5,
  name: "Ethan Hunt",
  email: "ethan@example.com",
  age: 29
}, {
  id: 6,
  name: "Fiona Adams",
  email: "fiona@example.com",
  age: 27
}, {
  id: 7,
  name: "George Wilson",
  email: "george@example.com",
  age: 35
}, {
  id: 8,
  name: "Hannah Scott",
  email: "hannah@example.com",
  age: 24
}, {
  id: 9,
  name: "Ian Turner",
  email: "ian@example.com",
  age: 31
}, {
  id: 10,
  name: "Julia Roberts",
  email: "julia@example.com",
  age: 26
}];
var table = document.getElementById('users_table');

function fillTheTable(table, arr) {
  var tbody = table.querySelector('tbody');

  if (tbody.innerHTML.trim() !== '') {
    tbody.innerHTML = '';
  }

  for (var i = 0; i < arr.length; i++) {
    var tr = document.createElement('tr');

    for (var key in arr[i]) {
      var td = document.createElement('td');
      td.append(arr[i][key]);
      td.dataset[key] = arr[i][key];
      tr.append(td);
    }

    tbody.append(tr);
  }
}

table.addEventListener('click', function (e) {
  var th = e.target.closest('th');
  if (!th) return;
  if (!table.contains(th)) return;
  mySortTable(th);
});
fillTheTable(table, users);

function mySortTable(th) {
  var direction = 'asc';
  var switching = true;
  table = document.getElementById('users_table');
  var sortBy = th.dataset.sort;
  var n = th.dataset.n;
  var switchingCount = 0;
  var i;
  var toSort;
  var rows;

  while (switching) {
    switching = false;
    toSort = false;
    rows = table.rows; // switch (sortBy) {
    //     case 'id':
    //     case 'age':
    //         for (i = 1; i < rows.length - 1; i++) {
    //             const x = (rows[i].getElementsByTagName('TD')[n])
    //             const y = (rows[i + 1].getElementsByTagName('TD')[n])
    //             if (direction === 'asc') {
    //                 if (x.innerHTML - y.innerHTML > 0) {
    //                     toSort = true
    //                     break
    //                 }
    //             } else if (direction === 'dsc') {
    //                 if (y.innerHTML - x.innerHTML > 0) {
    //                     toSort = true
    //                     break
    //                 }
    //             }
    //         }
    //         break
    //     case 'name':
    //     case 'email':
    //         for (i = 1; i < rows.length - 1; i++) {
    //             const x = (rows[i].getElementsByTagName('TD')[n])
    //             const y = (rows[i + 1].getElementsByTagName('TD')[n])
    //             if (direction === 'asc') {
    //                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //                     toSort = true
    //                     break
    //                 }
    //             } else if (direction === 'dsc') {
    //                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    //                     toSort = true
    //                     break
    //                 }
    //             }
    //         }
    //         break
    // }

    var compare = function compare(x, y, direction) {
      if (isNaN(Number(x)) && isNaN(Number(y))) {
        return direction === 'asc' ? x.toLowerCase() > y.toLowerCase() : y.toLowerCase() > x.toLowerCase();
      } else {
        return (direction === 'asc' ? x - y : y - x) > 0;
      }
    };

    for (i = 1; i < rows.length - 1; i++) {
      var x = rows[i].getElementsByTagName('TD')[n];
      var y = rows[i + 1].getElementsByTagName('TD')[n];

      if (compare(x.innerHTML, y.innerHTML, direction)) {
        toSort = true;
        break;
      }
    }

    if (toSort) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchingCount++;
    } else {
      if (direction === 'asc' && switchingCount === 0) {
        direction = 'dsc';
        switching = true;
      }
    }
  }
}