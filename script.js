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

function getPixelArray() {
    const pixels = Array.from(document.querySelectorAll('.pixel'));
    return pixels
}

function makeColor(e) {
    e.target.style.cssText = `background-color: ${colorValue};`;
    console.log('he1')
}

function makeRainbow(e) {
    // randomizes the color. Found on the internet. 
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style = `background-color: #${randomColor}`;
    console.log(randomColor)
}

function makeWhite(e) {
    e.target.style.backgroundColor = 'white';
}

function useColorMode() {
    colorModeBtn.classList.add('active');
    rainbowModeBtn.classList.remove('active');
    eraserBtn.classList.remove('active');

    const pixels = getPixelArray();
    pixels.forEach(pixel => {
        pixel.removeEventListener('mouseover', makeRainbow);
        pixel.addEventListener('mouseover', makeColor);
    })
}

function useRainbowMode() {
    colorModeBtn.classList.remove('active');
    rainbowModeBtn.classList.add('active');
    eraserBtn.classList.remove('active');

    const pixels = getPixelArray();
    pixels.forEach(pixel => {
        pixel.removeEventListener('mouseover', makeColor);
        pixel.removeEventListener('mouseover', makeWhite);

        pixel.addEventListener('mouseover', makeRainbow);
    })
}

function useEraser() {
    colorModeBtn.classList.remove('active');
    rainbowModeBtn.classList.remove('active');
    eraserBtn.classList.add('active');
    const pixels = getPixelArray();
    pixels.forEach(pixel => {
        pixel.removeEventListener('mouseover', makeColor);
        pixel.removeEventListener('mouseover', makeRainbow);
        pixel.addEventListener('mouseover', makeWhite);
    })
}

function toggleBorder() {
    const pixels = getPixelArray();
    pixels.forEach(pixel => {
        pixel.classList.toggle('pixel-border');
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
    useColorMode();
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
// Eraser
const eraserBtn = document.getElementById('eraser-btn');
// With Border 
const borderBtn = document.getElementById('border-btn');
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

colorModeBtn.onclick = useColorMode;
rainbowModeBtn.onclick = useRainbowMode;

borderBtn.onclick = toggleBorder;
eraserBtn.onclick = useEraser;

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