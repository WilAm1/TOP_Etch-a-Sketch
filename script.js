const containerDiv = document.getElementById('container');
const pixelContainer = document.getElementById('pixel-container');
let numPixels = 10;
let totalPixels = numPixels ** 2;
// Scale btn

const scaleInput = document.getElementById('scale');
scaleInput.value = 10;
updateGrid(scaleInput.value);


scaleInput.addEventListener('change', e => {
    const scaleIndicator = document.querySelector('.scale-indicator');
    const scaleValue = e.target.value;
    scaleIndicator.textContent = scaleValue;
    numPixels = scaleValue;
    totalPixels = numPixels ** 2;
    updateGrid(scaleValue);

});


function updateGrid(numPixels) {
    containerDiv.removeChild(containerDiv.firstChild);
    // div id = "pixel-container" > < /div>
    const pixelContainer = document.createElement('div');
    pixelContainer.setAttribute('id', 'pixel-container');
    pixelContainer.style.cssText = `grid-template-columns: repeat(${numPixels}, 1fr); \
    grid-template-rows: repeat(${numPixels}, 1fr)`;
    containerDiv.appendChild(pixelContainer)
    for (i = 0; i < totalPixels; i++) {
        const pixel = document.createElement('div');

        pixel.classList.add('pixel');
        pixel.classList.add(`pixel-${i}`);
        pixelContainer.appendChild(pixel);
        pixel.addEventListener('mouseover', e => {
            e.target.style.cssText = "background-color: black;";
        });
    }
}