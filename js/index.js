
const userData = {
    "user123": "password456",
    "user789": "password123",
    "TIadmin": "TIadminpass"
  };
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
        if (userData[username] && userData[username] === password) {
          alert('Login Succeful');
          {
              window.location.href = "home.html";
            }
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    } else {
        alert('Please enter both username and password!');
    }
  });
  