function dijeljenje(){
    var prvi = parseFloat(document.getElementById("prviBroj").value);
    var drugi = parseFloat(document.getElementById("drugiBroj").value);
    var rezultat = prvi / drugi;
    document.getElementById("Rezultat").value = rezultat;
}