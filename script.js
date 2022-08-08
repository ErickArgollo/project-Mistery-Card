const buttonCarta = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('card');
const inputTxt = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');
const btnClear = document.getElementById('clear');

function randomArr(array) {
  const random = Math.floor(Math.random() * array.length);
  const randomE = array[random];
  return randomE;
}

function randomClassGroup() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  //   const randomGroup = Math.floor(Math.random() * styleGroup.length);
  //   const randomElementGroup = styleGroup[randomGroup];

  return randomArr(styleGroup);
}

function randomSizeGroup() {
  const sizeGroup = ['medium', 'big', 'reallybig'];

  return randomArr(sizeGroup);
}

function randomRotateGroup() {
  const rotateGroup = ['rotateleft', 'rotateright'];
  return randomArr(rotateGroup);
}

function randomInclinationGroup() {
  const inclinationGroup = ['skewleft', 'skewright'];
  return randomArr(inclinationGroup);
}

function addClassList(span) {
  span.classList.add(randomClassGroup());
  span.classList.add(randomInclinationGroup());
  span.classList.add(randomRotateGroup());
  span.classList.add(randomSizeGroup());

  return span;
}


function geraCarta() {
  let count = 0;
  const valor = inputTxt.value.split(' ');
  cartaGerada.innerHTML = '';
  for (let i = 0; i < valor.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = valor[i];
    span.classList.add('card')
    if(valor[i].length !== 0 || valor[i].trim()){
      contador.innerHTML = `${count += 1}`;
    }
    addClassList(span);
    cartaGerada.appendChild(span);
    
  }
  addEventListener();
  eventListenerDbl();
}

function verificaInput() {
  const valor = inputTxt.value;
  if (valor.length === 0 || !valor.trim()) {
    cartaGerada.innerHTML = "";
    alert('Por favor, digite o conteúdo da carta!')
  }
}

buttonCarta.addEventListener('click', geraCarta);
buttonCarta.addEventListener('click', verificaInput);

// Bônus

function addEventListener() {
  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i += 1) {
    span[i].addEventListener('click', changeclass);
  }
}

function changeclass(event) {
  const x = event.target;
  x.className = ' ';
  addClassList(x);
}

function clear(){
  
  cartaGerada.innerHTML = '';
  contador.innerHTML = '';
  count = 0
  inputTxt.value = '';
}

btnClear.addEventListener('click', clear)


function eventListenerDbl(){
const span = document.querySelectorAll('span');
for(let i = 0; i < span.length; i+=1){
  span[i].addEventListener('dblclick', limpaPalavra)
}
}


function limpaPalavra(event){
  event.target.remove()
  
}