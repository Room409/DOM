const listaCosas = document.getElementById('listaCosas');
const input = document.getElementById('inputCosas');
const buttonInput = document.getElementById('buttonCosas');
const formCosas = document.getElementById('formCosas');
const buttons = document.getElementById('buttonsSection')

formCosas.addEventListener('submit', (e) => {
    e.preventDefault();


    if (input.value.trim() === '') {
        return alert('Ingrese una tarea')
    }

    const item = document.createElement('li');
    item.textContent = input.value;
    item.classList.add('fs-4', 'list-group-item','px-0','bg-body-secondary',)
    listaCosas.appendChild(item)
    input.value = ''
    input.focus()

    const buttonCheck = document.createElement('button');
    buttonCheck.textContent = '✓';
    buttonCheck.classList.add('col-6', 'btn', 'btn-success', 'btn-sm', 'btn-custom');
    buttons.appendChild(buttonCheck);
    buttonCheck.addEventListener('click',()=>{
        item.classList.toggle('completed')
    })

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'X';
    buttonRemove.classList.add('col-6', 'btn', 'btn-danger', 'btn-sm', 'btn-custom');
    buttons.appendChild(buttonRemove);
    buttonRemove.addEventListener('click',()=>{
        listaCosas.removeChild(item)
        buttons.removeChild(buttonRemove)
        buttons.removeChild(buttonCheck)
    })
});





/////////////////////////////////////////////////

const inputCalc = document.getElementById('inputCalc');

function addNumber(numero){
    inputCalc.value += numero;
}
function result(){
    const resultado = eval(inputCalc.value);
    inputCalc.value = resultado;
}

function limpiarInput(){
    inputCalc.value = ''
}
