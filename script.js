const DEFAULTCOLOR = '#000000',
    DEFAULTSCALE = 10;


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
            e.target.style.cssText = `background-color: ${colorValue};`;
        });
        pixelContainer.appendChild(pixel);
    }
}

// Divs
const containerDiv = document.getElementById('container');
// Scale btn
const scaleInput = document.getElementById('scale');
const scaleIndicator = document.querySelector('.scale-indicator');

// Color picker
const colorPickerElement = document.getElementById('color-picker');

// Reset Btn
const resetBtn = document.getElementById('reset');


let colorValue = DEFAULTCOLOR;
colorPickerElement.value = colorValue;


// Event Listeners
colorPickerElement.addEventListener('change', e => {
    colorValue = e.target.value;
});

scaleInput.addEventListener('change', e => {
    const scaleValue = e.target.value;
    updateGrid(scaleValue);
});

scaleInput.addEventListener('mousemove', e => {
    scaleIndicator.textContent = `${e.target.value} X ${e.target.value}`;

})

resetBtn.addEventListener('click', e => {
    updateGrid(DEFAULTSCALE);
})

// Default Scale number
scaleInput.value = DEFAULTSCALE;
scaleIndicator.textContent = `${scaleInput.value} X ${scaleInput.value}`;
updateGrid(DEFAULTSCALE);