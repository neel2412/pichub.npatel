// contactus.js

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Disable the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    // Hide the form and show the loading screen
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('feedback');
    const loadingScreen = document.getElementById('loadingScreen');
    form.classList.add('hidden');
    feedback.classList.remove('hidden');
    loadingScreen.classList.remove('hidden');

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        // Send the form data to the Netlify function
        const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Handle the response
        if (response.ok) {
            document.getElementById('feedbackMessage').innerText = 'Email sent successfully.';
        } else {
            document.getElementById('feedbackMessage').innerText = 'Failed to send email. Something went wrong.';
        }
    } catch (error) {
        document.getElementById('feedbackMessage').innerText = 'Failed to send email. Something went wrong.';
    } finally {
        // Hide the loading screen
        loadingScreen.classList.add('hidden');

        // Reset form and button state
        form.reset();
        submitButton.disabled = false;
    }
});

// Handle the Go Back button click
document.getElementById('resetButton').addEventListener('click', function() {
    // Hide feedback message and show the form again
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('contactForm').classList.remove('hidden');
});
