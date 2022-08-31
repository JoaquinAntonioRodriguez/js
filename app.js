const iva = 19
let neto = 0

for (let producto = 1;producto <= 10; producto++) {
    
    
    let valor = Number(prompt(`${producto} Ingrese el valor del producto :

(10 productos máximo y para finalizar ingresar 0)`))
     neto = neto + valor
        if (valor == 0) {
            break
        }
    }

alert(`Totales de la factura 
==================

Neto : ${neto}

IVA : ${neto*0.19}

Total : ${neto * 1.19}`)