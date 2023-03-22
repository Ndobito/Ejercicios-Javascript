let btn = document.querySelectorAll(".btn-group > p[data-type='number']"); 

let operations = document.querySelectorAll(".btn-group > p[data-type='operator']"); 

let resultado = document.querySelector("#resultados");

let simbolo = document.querySelector("#simbolo");

let antElement = document.querySelector("#anterior");

let anterior = 0;
let opr = "";
let res = 0; 

btn.forEach(e =>{
    e.addEventListener("click", () =>{
        if(resultado.innerHTML == "0"){
            resultado.innerHTML = e.innerHTML;
        }else{
            resultado.innerHTML += e.innerHTML;
        }
        
    })
});

operations.forEach(e =>{
    e.addEventListener("click", () =>{
        
        let op = e.getAttribute("data-operation");

        switch (op) {
            case "delete":
                resultado.innerHTML = resultado.innerHTML.slice(0,-1);
                if (!resultado.innerHTML) {
                    resultado.innerHTML = 0;
                }
                break;
            case "simbolo-operacion": 
                anterior = resultado.innerHTML;
                resultado.innerHTML = 0;
                simbolo.innerHTML= e.innerHTML;
                antElement.innerHTML = anterior;
                opr = e.getAttribute("data-op");
                break;
            case "igual":
                switch (opr) {
                    case "sumar":
                        res = parseInt(anterior) + parseInt(resultado.innerHTML);
                        break;
                    case "restar":
                        res = parseInt(anterior) - parseInt(resultado.innerHTML);
                        break;
                    case "multiplicar":
                        res = parseInt(anterior) * parseInt(resultado.innerHTML);
                        break;
                    case "dividir":
                        res = parseInt(anterior) / parseInt(resultado.innerHTML);
                        break;
                
                    default:
                        break;
                } 
                resultado.innerHTML = res;
                res = 0;
                anterior = 0;
                antElement.innerHTML = 0;
                simbolo.innerHTML = "";

                break;
            default:
                break;
        }
    })
});