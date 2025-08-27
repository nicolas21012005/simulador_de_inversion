function simulateInvest() {
    // let oneYear = document.getElementById('oneYear');
    // let twoYear = document.getElementById('twoYear');
    let select = document.getElementById('tiempoDeInversion');
    let name = document.getElementById('nombres').value;
    let email = document.getElementById('email').value;
    // let telefono = document.getElementById('cellPhoneNumber').value;
    let monto = parseFloat(document.getElementById('monto').value);
    let mostrarNombres = document.getElementById('spanNombre');
    let totalInversionPerson = document.getElementById('totalInversion');
    let gananciaPerson = document.getElementById('ganancia');
    let mostrarEmail = document.getElementById('spanEmail');
    let showDiv = document.querySelector('.post-simulation');
    let showDivPre = document.querySelector('.pre-simulation');
    let porcentaje = document.getElementById('porcentaje');
    let meses = document.getElementById('meses');
    showDiv.classList.remove("disabled");
    showDivPre.classList.add("disabled");

    mostrarEmail.textContent = email;
    mostrarNombres.textContent = name;
    let totalInversion = 0;
    let ganancia = 0;
    switch (select.value) {
        case 'oneYear':
            porcentaje.textContent = "0.8%";
            meses.textContent = "12 meses";
            totalInversion = (monto * 0.008) * 12 + monto
            ganancia = (monto * 0.008) * 12
            break;
        case 'twoYear':
            porcentaje.textContent = "1.3%";
            meses.textContent = "24 meses";
            totalInversion = (monto * 0.013) * 24 + monto
            ganancia = (monto * 0.013) * 24
            break;
        case 'threeYear':
            porcentaje.textContent = "1.7%";
            meses.textContent = "36 meses";
            totalInversion = (monto * 0.017) * 36 + monto
            ganancia = (monto * 0.017) * 36
            break;

        default:
            break;
    }

    totalInversionPerson.textContent = totalInversion.toFixed(2);
    gananciaPerson.textContent = ganancia.toFixed(2);
}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('calculateInvest').addEventListener('click', simulateInvest);
}); 
