
        // JavaScript to validate form fields and display confirmation
        function validateForm(event) {
            event.preventDefault(); // Prevent form submission for validation

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Check if all fields are filled out
            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return false;
            }

            // Validate email format
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            // Display confirmation message
            alert('Thank you for contacting us! We will get back to you shortly.');

            // Submit the form if validation is successful
            document.getElementById('contactForm').submit();
        }
    