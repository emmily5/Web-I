const canvas = document.getElementById('desenhoCanvas');
const ctx = canvas.getContext('2d');
let desenhando = false;
let corSelecionada = document.getElementById('colorPicker').value;
let usandoBorracha = false;
const tamanhoPincel = 1;
const tamanhoBorracha = 20;

document.getElementById('colorPicker').addEventListener('input', (e) => {
    corSelecionada = e.target.value;
    if (!usandoBorracha) {
        ctx.strokeStyle = corSelecionada;
        ctx.fillStyle = corSelecionada;
    }
});

canvas.addEventListener('mousedown', (e) => {
    desenhando = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (desenhando) {
        if (usandoBorracha) {
            ctx.lineWidth = tamanhoBorracha;
            ctx.strokeStyle = 'white'; 
        } else {
            ctx.lineWidth = tamanhoPincel;
            ctx.strokeStyle = corSelecionada;
        }
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    desenhando = false;
});

canvas.addEventListener('mouseout', () => {
    desenhando = false;
});

document.getElementById('borracha').addEventListener('click', () => {
    usandoBorracha = true;
    ctx.lineWidth = tamanhoBorracha;
    ctx.strokeStyle = 'white';
});

document.getElementById('pincel').addEventListener('click', () => {
    usandoBorracha = false;
    ctx.strokeWidth = tamanhoPincel;
    ctx.strokeStyle = corSelecionada;
});

document.getElementById('limparCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


