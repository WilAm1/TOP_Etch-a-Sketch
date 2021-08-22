const DEFAULTCOLOR = '#000000',
    DEFAULTSCALE = 10;

function fillContainer(container, totalPixels) {
    for (i = 0; i < totalPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add(`pixel-${i}`);

        container.appendChild(pixel);
    }
}

function makeColor(e) {
    e.target.style.cssText = `background-color: ${colorValue};`;
}

function makeRainbow(e) {
    // 
}

function useColorMode() {
    colorModeBtn.classList.add('active');
    rainbowModeBtn.classList.remove('active');

    const pixels = Array.from(document.querySelectorAll('.pixel'));
    pixels.forEach(pixel => {
        pixel.removeEventListener('mouseover', makeRainbow);
        pixel.addEventListener('mouseover', makeColor);
    })
}

function useRainbowMode() {
    colorModeBtn.classList.remove('active');
    rainbowModeBtn.classList.add('active');

    const pixels = Array.from(document.querySelectorAll('.pixel'));
    pixels.forEach(pixel => {
        pixel.removeEventListener('mouseover', makeColor);

        pixel.addEventListener('mouseover', makeRainbow);
    })
}

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
    fillContainer(pixelContainer, totalPixels);
}

// Divs
const containerDiv = document.getElementById('container');
// Scale btn
const scaleInput = document.getElementById('scale');
const scaleIndicator = document.querySelector('.scale-indicator');
// Color picker
const colorPickerElement = document.getElementById('color-picker');
// Color and Rainbow mode
const colorModeBtn = document.getElementById('color-mode'),
    rainbowModeBtn = document.getElementById('rainbow-mode');
// Reset Btn
const resetBtn = document.getElementById('reset');

let colorValue = DEFAULTCOLOR;


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
    makeDefault()
})

function makeDefault() {
    scaleInput.value = DEFAULTSCALE;
    colorPickerElement.value = colorValue;

    scaleIndicator.textContent = `${scaleInput.value} X ${scaleInput.value}`;
    // Default Scale number
    updateGrid(DEFAULTSCALE);
    useColorMode();

}


makeDefault()