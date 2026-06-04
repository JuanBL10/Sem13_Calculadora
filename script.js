
let numero = 0; //El valor numerico
let operador = ''; //Esto para saber la operacion a realizar
const terminosOperacion = []; //Solo puede haber maximo 2 ya que son los que se van a operar

document.addEventListener('DOMContentLoaded', () => {
    const barraResultado = document.getElementById('areaResultados');
    document.querySelectorAll('button[id*="numeros_btn"]').forEach(btn => {
        btn.addEventListener('click', evento => {
            barraResultado.value += evento.target.textContent;
        });
    });

    document.querySelectorAll('button[id*="operacion_btn"]').forEach(btn => {
        btn.addEventListener('click', evento => {
            
            if(terminosOperacion.length == 0){
                terminosOperacion[0] = construirNumero(barraResultado.value);
                operador = evento.target.textContent;
                barraResultado.value = '';
            }
            else{
                document.getElementById('btnResolver').click();
            }
        });
    });

    document.getElementById('btnLimpiar').addEventListener('click', evento => {
        barraResultado.value = '';
        terminosOperacion.length = 0;
        operador = '';
        numero = 0;
    });

    document.getElementById("btnResolver").addEventListener('click', () => {
        let resultado;
        if(terminosOperacion.length == 0){
            document.getElementById('btnLimpiar').click();
        }
        else if(terminosOperacion.length == 1){
            terminosOperacion[1] = construirNumero(barraResultado.value);
            switch(operador){
                case '+':
                    resultado = terminosOperacion[0] + terminosOperacion[1];
                    break;
                case '-':
                    resultado = terminosOperacion[0] - terminosOperacion[1];
                    break;
                case '/':
                    resultado = terminosOperacion[0] / terminosOperacion[1];
                    break;
                case '*':
                    resultado = terminosOperacion[0] * terminosOperacion[1];
                    break;
                default:
                    alert('Operacion no valida');
                    break;
            }  
            barraResultado.value = resultado;
            terminosOperacion.length = 0;
            operador = '';
            numero = 0;
        }
        else{
            document.getElementById('btnLimpiar').click();
        }
    });
});

function construirNumero(numeroString){
    return Number(numeroString);
}