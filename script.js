const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const protectedButton = document.getElementById('protected-route');
const logoutButton = document.getElementById('logout');
const messageDiv = document.getElementById('message');

let token = '';

// Handle sign up
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const message = await response.text();
    messageDiv.textContent = message;
});

// Handle login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const data = await response.json();
        token = data.token;
        messageDiv.textContent = 'Login successful!';
    } else {
        const message = await response.text();
        messageDiv.textContent = message;
    }
});

// Access protected route
protectedButton.addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        messageDiv.textContent = data.message;
    } else {
        const message = await response.text();
        messageDiv.textContent = message;
    }
});

// Handle logout
logoutButton.addEventListener('click', () => {
    token = '';
    messageDiv.textContent = 'Logged out successfully!';
});
