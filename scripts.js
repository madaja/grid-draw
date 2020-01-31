const container = document.querySelector("#grid-container");
let blockCount = 64;

function createDiv() {
    let div = document.createElement('div');
    return div;
}
const blocksArray = [];

for (let i = 1; i <= (blockCount * blockCount); i++) {
    let div = createDiv();
    let blockSize = 480 / blockCount;
    div.classList.add('block');
    div.style.width = blockSize + 'px';
    div.style.height = blockSize + 'px';
    blocksArray.push(div);

}
const docFrag = document.createDocumentFragment();

for (let i = 0; i <= ((blockCount * blockCount) - 1); i++) {
    docFrag.appendChild(blocksArray[i]);
}
container.appendChild(docFrag);

const blocks = document.querySelectorAll('.block');
blocks.forEach((div) => {

    div.addEventListener('mouseover', (e) => {
      
      e.target.classList.add('moused');
    });
  });
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    blocks.forEach((div) => {
        div.classList.remove('moused');
    });
});
