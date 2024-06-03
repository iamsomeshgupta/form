var modal = document.getElementById('signupModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];
var userCounter = document.getElementById('userCounter');
var count = 0;

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

var toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var sports = Array.from(document.getElementById('sports').selectedOptions).map(option => option.value);

    var namePattern = /^[a-zA-Z\s]{5,}$/;
    if (!namePattern.test(name)) {
        alert('Name must be at least 5 characters long and contain only letters.');
        return;
    }

    if (!email.endsWith('@gmail.com')) {
        alert('Email must be a Gmail address.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        return;
    }

    console.log({
        name: name,
        email: email,
        password: password,
        phone: phone,
        gender: gender,
        sports: sports
    });

    count++;
    userCounter.textContent = count;

    modal.style.display = 'none';
}
