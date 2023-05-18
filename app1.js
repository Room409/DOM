const button1 = document.getElementById('button1');
let toggle = false;

button1.focus();
button1.addEventListener('keydown',(e) => {
    if (e.key === 'Enter'){
        toggle = !toggle
        button1.textContent = toggle ? 'Se presiono el enter!': "Presiona Enter!"
    }
})

////////////////////////////////////////////////////////////////////////////////////////////

const button2 = document.getElementById('button2')
const parrafo2 = document.getElementById('parrafo2')
let parrafoOrginal = parrafo2.textContent;
button2.addEventListener('click', () => {
parrafo2.textContent = (parrafo2.textContent === parrafoOrginal) ? "Click para regresar" : parrafoOrginal;
});

////////////////////////////////////////////////////////////////////////////////////////

const button3 = document.getElementById('button3');

button3.addEventListener('mouseover', () => {
    button3.style.backgroundColor = 'red';
});

button3.addEventListener('mouseleave', () => {
    button3.style.backgroundColor = '';
  });