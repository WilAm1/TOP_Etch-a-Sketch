function updateGrid(numPixels) {
    // Will remove the container div child if it has 
    containerDiv.removeChild(containerDiv.firstChild);
    const totalPixels = numPixels ** 2;
    // Create a new div with grids
    const pixelContainer = document.createElement('div');
    pixelContainer.setAttribute('id', 'pixel-container');
    // Grid Box CSS style. Uses grid-template to adjust rows and columns
    pixelContainer.style.cssText = `grid-template-columns: repeat(${numPixels}, 1fr); \
    grid-template-rows: repeat(${numPixels}, 1fr)`;
    // Adds created div to container div
    containerDiv.appendChild(pixelContainer);
    // Fills the container with individual pixels
    for (i = 0; i < totalPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add(`pixel-${i}`);
        pixel.addEventListener('mouseover', e => {
            e.target.style.cssText = "background-color: black;";
        });
        pixelContainer.appendChild(pixel);
    }
}


// Divs
const containerDiv = document.getElementById('container');


// Scale btn
const scaleInput = document.getElementById('scale');
const scaleIndicator = document.querySelector('.scale-indicator');

// Default Scale number
scaleInput.value = 10;
scaleIndicator.textContent = scaleInput.value;
updateGrid(scaleInput.value);


scaleInput.addEventListener('change', e => {
    const scaleValue = e.target.value;
    scaleIndicator.textContent = scaleValue;
    updateGrid(scaleValue);
});