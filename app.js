'use strict'

function mudarCor() {
    const nomeCor = document.getElementById('select-color').value.toLowerCase();
    let cor = 'ffffff'
    if (nomeCor == 'vermelho')
        cor = 'ff0000';
        else if (nomeCor == 'azul')
            cor = '0000ff';
            else if (nomeCor == 'verde')
                cor = '00ff00';
                else if (nomeCor == 'amarelo')
                    cor = 'ffff00';

    //document.body.style.backgroundColor = `#${cor}`
    document.documentElement.style.setProperty('--bg-color', `#${cor}`);
}
document.getElementById('aplicar').addEventListener('click', mudarCor);