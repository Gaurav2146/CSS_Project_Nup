function changeBackgroundColor() {
    // Define an array of colors to choose from
    const colors = ['#f0f0f0', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
    
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}
