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
