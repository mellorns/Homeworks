"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var cashTable = [];
fillTheTable(table, users);

function sortTable(th, arr) {
  var res = [];

  if (th.dataset.sorted && cashTable.length) {
    res = cashTable.reverse();
  } else {
    var sortBy = th.dataset.sort;

    if (cashTable.length) {
      arr = cashTable;
    }

    res = arr.toSorted(function (a, b) {
      switch (_typeof(a[sortBy])) {
        case 'number':
          return b[sortBy] - a[sortBy];

        case 'string':
          return -1;
      }
    });
  }

  cashTable = res;
  th.dataset.sorted = true;
  fillTheTable(table, res);
}

table.addEventListener('click', function (e) {
  var th = e.target.closest('th');
  if (!th) return;
  if (!table.contains(th)) return;
  sortTable(th, users);
});