const btn = document.getElementById('colorBtn');
const body = document.body;

function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

// Set up the event listener
btn.addEventListener('click', function() {
    const newColor = generateRandomColor();
    body.style.backgroundColor = newColor;
});