
let numero; //El valor numerico
let operador; //Esto para saber la operacion a realizar
const terminosOperacion = []; //Solo puede haber maximo 2 ya que son los que se van a operar
let flagOperacion = false; //Para saber si es termino uno o termino dos, 
// ya que antes del dos, tuvo que tocar el btn de alguna operacion

document.addEventListener('DOMContentLoaded', () => {
    const barraResultado = document.getElementById('areaResultados');
    document.querySelectorAll('button[id*="numeros_btn"]').forEach(btn => {
        btn.addEventListener('click', evento => {
            if (evento.target.textContent == '0') {
                if (barraResultado.textContent == '') {
                    return; //Para que no agregue nada si empieza el numero con 0
                }
            }
            barraResultado.value += evento.target.textContent;
        });
    });

    document.querySelectorAll('button[id*="operacion_btn"]').forEach(btn => {
        btn.addEventListener('click', evento => {
            const valores = barraResultado.value.split('');
            //console.log('valores es:' + valores);
            numero = ((valores) => {
                let num = ''; //Para construir el numero primero en string y luego lo retorno en num
                valores.forEach(valor => {
                    num += valor;
                });
                return Number(num);
            })(valores);
            if (!flagOperacion) {
                terminosOperacion[0] = numero;
                flagOperacion = true;
            }
            //console.log('El numero e:' + numero);
            //console.log(terminosOperacion);
            operador = evento.target.textContent;
            barraResultado.value = '';
            //numero = 0;
        });
    });
    

    document.getElementById('btnLimpiar').addEventListener('click', evento => {
        barraResultado.value = '';
        flagOperacion = false;
        terminosOperacion.length = 0;
        operador = '';
    });

    document.getElementById('btnResolver').addEventListener('click', () => {
        const resultado;
        switch(operador){
            case '+':
                terminosOperacion[1] = numero;
                numero =0;
                
                operador = '';
                break;
            case '-':

                break;
            case '/':

                break;
            case '*':

                break;
            default:
                alert('Operacion no valida');
                break;
        }
    });
});