function populateUserTable() {
    var users = JSON.parse(localStorage.getItem('users')) || {};

    var userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';

    for (var username in users) {
        var password = users[username];

        var row = document.createElement('tr');
        row.innerHTML = '<td>' + username + '</td>' +
                        '<td>' + password + '</td>' +
                        '<td><a class="edit-btn" href="#" onclick="openPopup(\'' + username + '\', \'' + password + '\')">Edit</a></td>';

        userTableBody.appendChild(row);
    }
}

populateUserTable();

function openPopup(username, password) {
    document.getElementById('edit-username').value = username;
    document.getElementById('edit-password').value = password;
    document.querySelector('.popup').style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}
function saveChanges() {
    var editedUsername = document.getElementById('edit-username').value;
    var newPassword = document.getElementById('edit-password').value;

    var tableRows = document.getElementById('userTableBody').rows;
    for (var i = 0; i < tableRows.length; i++) {
        if (tableRows[i].cells[0].innerHTML === editedUsername) {
            tableRows[i].cells[1].innerHTML = newPassword;
            break;
        }
    }

    var users = JSON.parse(localStorage.getItem('users')) || {};
    if (users.hasOwnProperty(editedUsername)) {
        users[editedUsername] = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
    }

    closePopup();
}

populateUserTable();