document.getElementById('texto-protegido').onpaste = function(){
    return false;
}

document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = 'Hey, sua classificação é importante!!';
    } else {
        document.title = "SISU - ENEM";
    }
});

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event){
    if (envent.target.tagName != "TH") event.target.parentNode.remove();
});

/*Pesquisa*/
function pesquisa(){
    var input, filtro, table, tr, td, i, txtValue;
    input = document.getElementById("pesquisar");
    filtro = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
/*Bloqueador*/
var textoProtegido = document.querySelector("#textoProtegido");
textoProtegido.addEventListener("paste", function (e){
    e.preventDefault();
})