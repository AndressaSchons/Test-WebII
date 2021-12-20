var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event){
    if (envent.target.tagName != "TH") event.target.parentNode.remove();
});
