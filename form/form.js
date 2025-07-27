$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Clear previous error messages
        $('.error').text('');

        // Get input values
        const username = $('#username').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        // Email regex pattern (simple and commonly used)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate username
        if (username === '') {
            $('#usernameError').text('Username is required');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            $('#emailError').text('Email is required');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Invalid email format');
            isValid = false;
        }

        // Validate password
        if (password === '') {
            $('#passwordError').text('Password is required');
            isValid = false;
        } else if (password.length < 8) {
            $('#passwordError').text('Password must be at least 8 characters long');
            isValid = false;
        }

        // If all checks pass
        if (isValid) {
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            // Proceed with AJAX or any further logic here
        }
    });
});
