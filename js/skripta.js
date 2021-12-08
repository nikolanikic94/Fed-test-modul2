function proveraForme(forma) {
    let validation = true;

    let ime = forma.ime.value.trim();
    if (ime == "" || ime.charAt(0) != ime.charAt(0).toUpperCase()) {
        validation = false;
    }

    let prezime = forma.prezime.value.trim();
    if (prezime == "" || prezime.charAt(0) != prezime.charAt(0).toUpperCase()) {
        validation = false;
    }

    return validation;
}

function promenaCheckbox() {
    let checkbox = document.getElementById("checkbox").checked;
    document.getElementById("sel1").disabled = !checkbox;

    promeniDugme();
}

function promeniDugme() {
    let select = document.getElementById("sel1");
    let checkbox = document.getElementById("checkbox");
    let submit = document.getElementById("submitbtn");

    if (select.value == "1") {
        submit.style.backgroundColor = "silver";
    }
    else if (select.value == "2") {
        submit.style.backgroundColor = "gold";
    }
    else if (select.value == "3") {
        submit.style.backgroundColor = "skyblue";
    }

    if (checkbox.checked == false) {
        submit.style.backgroundColor = "white";
    }

}