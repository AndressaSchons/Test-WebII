document.getElementById('texto-protegido').onpaste = function(){
    return false;
}

document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = 'Hey, sua classificação é importante!';
    } else {
        document.title = "Simulador SISU";
    }
});

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event){
    if (envent.target.tagName != "TH") event.target.parentNode.remove();
});

/*Pesquisa*/
function pesquisa(){
    //Não consegui fazer isso
}
/*Bloqueador*/
function blockCopy(e) {
    e.preventDefault();
    e.stopPropagation();
}

function blockPressCtrlC(e) {
    if (e.ctrlKey && e.keyCode == 67) {
        blockCopy(e);
    }
}

document.addEventListener("copy", blockCopy, false);
document.addEventListener("beforecopy", blockCopy, false);

document.addEventListener("keydown", blockPressCtrlC, false);