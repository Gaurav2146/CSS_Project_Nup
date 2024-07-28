function changeBackgroundColor() {
    const colors = ['#f0f0f0', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear previous posts

    posts.slice(0, 5).forEach(post => { // Display only the first 5 posts for simplicity
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const postTitle = document.createElement('h4');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        postsContainer.appendChild(postElement);
    });
}

function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    let errorMessage = '';

    if (name === '') {
        errorMessage += 'Name is required. ';
    }
    if (email === '') {
        errorMessage += 'Email is required. ';
    } else if (!validateEmail(email)) {
        errorMessage += 'Email is not valid. ';
    }
    if (message === '') {
        errorMessage += 'Message is required. ';
    }

    if (errorMessage !== '') {
        feedback.textContent = errorMessage;
    } else {
        feedback.textContent = '';
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
