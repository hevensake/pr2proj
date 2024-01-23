function register() {
    var username = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value;

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return false; 
    }

    var users = JSON.parse(localStorage.getItem('users')) || {};
    if (users.hasOwnProperty(username)) {
        alert('Username already exists. Please choose a different one.');
        return false;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful! Please log in.');
    return false; 
}


