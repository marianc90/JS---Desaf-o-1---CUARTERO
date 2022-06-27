let continuar = "si";
let valor;
let resultado;
let moneda;

 alert("Bienvenido a la web de conversión de ARS - USD, presione Aceptar para continuar");

 do {

    do { 
        moneda = prompt("Ingrese la moneda desde la cual desea realizar la conversión. (USD/ARS)").toUpperCase();

        if (moneda != "ARS" && moneda != "USD"){
            alert("Debe introducir un valor válido");}
        } while(moneda != "ARS" && moneda != "USD");

          switch (moneda) {

            case "USD":
            do{
                valor = parseFloat(prompt("Ingrese el valor en USD"));
                if (isNaN(valor)){
                        alert("Debe ingresar un número válido");} 
                else {
                resultado = valor * 128.75;
                alert(`El valor en ARS, sin incluir impuestos, es ARS ${resultado.toFixed(2)}-`);
                }

            } while(isNaN(valor));
            break;

            case "ARS":
                do{
                    valor = parseFloat(prompt("Ingrese el valor en ARS"));
                    if (isNaN(valor)){
                            alert("Debe ingresar un número válido");}
                    else {
                    resultado = valor / 122.75;
                    alert(`El valor en USD, sin incluir impuestos, es USD ${resultado.toFixed(2)}-`);
                    }
                } while(isNaN(valor));
                break;
            }
          
            continuar = prompt("¿Desea continuar realizando conversiones? (Si/No)").toLowerCase();

            if (continuar != "si" && continuar != "no")
            {
            while (continuar != "si" && continuar != "no"){
              continuar = prompt("Debe introducir un valor válido ¿Desea continuar? (Si/No)").toLowerCase();
            }
          }


 } while  (continuar != "no");