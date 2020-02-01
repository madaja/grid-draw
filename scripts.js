const container = document.querySelector("#grid-container");
let blockCount = 12;

function createDiv() {
    let div = document.createElement('div');
    return div;
}
const blocksArray = [];
const docFrag = document.createDocumentFragment();

createGrid();
function createGrid() {



for (let i = 1; i <= (blockCount * blockCount); i++) {
    let div = createDiv();
    let blockSize = 480 / blockCount;
    
    div.classList.add('block');
    div.style.width = blockSize + 'px';
    div.style.height = blockSize + 'px';
    blocksArray.push(div);

}



for (let i = 0; i <= ((blockCount * blockCount) - 1); i++) {
    docFrag.appendChild(blocksArray[i]);
}
container.appendChild(docFrag);



}
blockEvents();

function blockEvents() {
const blocks = document.querySelectorAll('.block');
blocks.forEach((div) => {

    div.addEventListener('mouseenter', (e) => {
      
      e.target.classList.add('moused');
    });
  });

}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach((div) => {
        div.classList.remove('moused');
    });
});

const setBlocks = document.querySelector('#blockSet');
setBlocks.addEventListener('click', () => {
    deleteGrid();
    countStr = prompt('How many blocks wide should the grid be?', '');
    blockCount = parseInt(countStr, 10);
    createGrid();
    blockEvents();
    
    
});

function deleteGrid() {
    
    document.querySelectorAll(".block").forEach(function(e){
        e.parentNode.removeChild(e);
    
    });
    blocksArray.length = 0;
    
    
}

