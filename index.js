let continuar = "si";
let valor;
let resultado;
let moneda;

 alert("Bienvenido a la web de conversión de ARS - USD, presione Aceptar para continuar")

while (continuar != "no") {

    moneda = prompt("Ingrese la moneda desde la cual desea realizar la conversión. (USD/ARS)").toUpperCase();

    switch (moneda) {
        case "USD":
            valor = parseFloat(prompt("Ingrese el valor en USD"));

            if (isNaN(valor)){

                while (isNaN(valor)){
                    alert("Debe ingresar un número válido");
                    valor = parseFloat(prompt("Ingrese el valor en USD"));
                }
            
                resultado = valor * 128.75;
                alert(`El valor en ARS, sin incluir impuestos, es ARS ${resultado.toFixed(2)}-`)
                
            } else {
                
                resultado = valor * 128.75;
                alert(`El valor en ARS, sin incluir impuestos, es ARS ${resultado.toFixed(2)}-`)
        
            }
            
            break;

            case "ARS":
                valor = parseFloat(prompt("Ingrese el valor en ARS"));
    
                if (isNaN(valor)){

                    while (isNaN(valor)){
                        alert("Debe ingresar un número válido");
                        valor = parseFloat(prompt("Ingrese el valor en ARS"));
                    }
                
                    resultado = valor / 122.75;
                    alert(`El valor en USD, sin incluir impuestos, es USD ${resultado.toFixed(2)}-`)
                   
                } else {
                    
                    resultado = valor / 122.75;
                    alert(`El valor en USD, sin incluir impuestos, es USD ${resultado.toFixed(2)}-`)
            
                }

            break;


        default:
            alert("Debe introducir un valor válido");
    }
          
            continuar = prompt("¿Desea continuar realizando conversiones? (Si/No)").toLowerCase();

          if (continuar != "si" && continuar != "no"){
            while (continuar != "si" && continuar != "no"){
              continuar = prompt("Debe introducir un valor válido ¿Desea continuar? (Si/No)").toLowerCase();
            }
          }

}

