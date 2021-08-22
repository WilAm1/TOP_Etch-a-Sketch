const containerDiv = document.getElementById('container');
// Scale btn
const scaleInput = document.getElementById('scale');
scaleInput.value = 10;

const numPixels = scaleInput.value,
    totalPixels = numPixels ** 2;

containerDiv.style.cssText = `grid-template-columns: repeat(${numPixels}, 1fr); \
grid-template-rows: repeat(${numPixels}, 1fr)`;

for (i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div');

    pixel.classList.add('pixel');
    pixel.classList.add(`pixel-${i}`);
    containerDiv.appendChild(pixel);
    console.log(i)
    pixel.addEventListener('mouseover', e => {
        e.target.style.cssText = "background-color: black;";
    });
}