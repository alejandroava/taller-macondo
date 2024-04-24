let payHildebrando = 2500000
flag = true

const inputUser = confirm('Presione aceptar para comenzar viaje')

// while (flag) {
    
//     const inputOption = prompt(``)

//     switch (inputUser) {
//         case true:
//             alert(`su presupuesto es de ${payHildebrando}`)
//             const inputUserOption = prompt(`Ingrese una opcion: 
//            1. comprar almojabana con gaseosa = $15.000
//            2. Comprar subway con gaseosa = $23.000
//            3. No comprar nada`)
            
//             if (inputUserOption == '1') {
//                 payHildebrando = payHildebrando - 15000
//                 break
//             } else if (inputUserOption == '2') {
//                 payHildebrando = payHildebrando - 23000
//                 break
//             } else if (inputUserOption == '3') {
//                 break
//             } else {
//                 alert('ingrese una opcion valida')
//             }   

//         // case '2':

            
//     };

// }

// comprar alimentos en el aeropuerto y reducir presupuesto
function buyFood(payHildebrando) {
    alert(`su presupuesto es de ${payHildebrando}`)
    const inputUserOption = prompt(`Ingrese una opcion: 
           1. comprar almojabana con gaseosa = $15.000
           2. Comprar subway con gaseosa = $23.000
           3. No comprar nada`)

    if (inputUserOption == '1') {
        return payHildebrando - 15000
    } else if (inputUserOption == '2') {
        return payHildebrando - 23000
    } else if (inputUserOption == '3') {
    } else {
        alert('ingrese una opcion valida')
    }
}

function suitcaseSize() {
    
}


function main() {
    payHildebrando = buyFood(payHildebrando)
}

// main()
// console.log(buyFood(payHildebrando))

//case 4 --> cambiar vocales por i
function vocalI() {
    message = "Taxi me puede llevar al hotel mariposas amarillas"
    let newMessage = message.replaceAll('a', 'i').replaceAll('e', 'i').replaceAll('o', 'i')
    console.log(newMessage)
    return newMessage
}

