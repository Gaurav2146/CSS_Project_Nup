npm install -g sass

touch styles.scss

/* Define variables */
$primary-color: #007bff;
$secondary-color: #6c757d;
$background-color: #f0f0f0;
$font-family: Arial, sans-serif;
$padding: 20px;

/* Base styles */
body {
    background-color: $background-color;
    font-family: $font-family;
    padding: $padding;

    h1, h2, h3, h4 {
        margin-bottom: 20px;
    }

    p, ul li {
        margin-bottom: 10px;
    }

    ul {
        padding-left: 20px;
    }

    img {
        margin-bottom: 20px;
    }

    #formFeedback {
        color: red;
        margin-top: 10px;
    }
}

/* Button styles */
button {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    background-color: $primary-color;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: darken($primary-color, 10%);
    }
}

/* Form styles */
form {
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input, textarea {
        width: calc(100% - 22px);
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    textarea {
        height: 100px;
        resize: vertical;
    }

    button {
        width: 100%;
    }
}

/* Media Queries */
@media (max-width: 1200px) {
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 28px;
    }
    h3 {
        font-size: 22px;
    }
    p, ul li {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 20px;
    }
    p, ul li {
        font-size: 14px;
    }
    body {
        padding: 10px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 24px;
    }
    h2 {
        font-size: 20px;
    }
    h3 {
        font-size: 18px;
    }
    p, ul li {
        font-size: 12px;
    }
    body {
        padding: 5px;
    }
}



sass styles.scss styles.css


