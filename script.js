const containerDiv = document.getElementById('container');

const numPixels = 10,
    totalPixels = numPixels ** 2;

containerDiv.style.cssText = `grid-template-rows: repeat(${numPixels}, 1fr)`
containerDiv.style.cssText = `grid-template-columns: repeat(${numPixels}, 1fr)`

for (i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div');

    pixel.classList.add('pixel');
    pixel.classList.add(`pixel-${i}`);
    containerDiv.appendChild(pixel);
    console.log(i)
}