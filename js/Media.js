var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {
    var alunoo = alunos[i];

    var tdNotaLing = alunoo.querySelector(".infoLing");
    var notaLing = tdNotaLing.textContent;

    var tdNotaCH = alunoo.querySelector(".infoCH");
    var notaCH = tdNotaCH.textContent;

    var tdNotaRed = alunoo.querySelector(".infoRed");
    var notaRed = tdNotaRed.textContent;

    var tdNotaMat = alunoo.querySelector(".infoMat");
    var notaMat = tdNotaMat.textContent;

    var tdNotaCN = alunoo.querySelector(".infoCN");
    var notaCN = tdNotaCN.textContent;

    var tdMedia = alunoo.querySelector(".media");

    var notaLingValida = validaNotas(notaLing);
    var notaCHValida = validaNotas(notaCH);
    var notaRedValida = validaNotas(notaRed);
    var notaMatValida = validaNotas(notaMat);
    var notaCNValida = validaNotas(notaCN);

    if (!notaLingValida) {
        notaLingValida = false;
        tdMedia.textContent = "Nota de Linguagens inválido";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaCHValida) {
        notaCHValida = false;
        tdMedia.textContent = "Nota de Ciências Humanas inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaRedValida) {
        notaRedValida = false;
        tdMedia.textContent = "Nota de Redação Inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaMatValida) {
        notaMatValida = false;
        tdMedia.textContent = "Nota de Matemática Inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaCNValida) {
        notaCNValida = false;
        tdMedia.textContent = "Nota de Ciências da Natureza inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (notaLingValida && notaCHValida && notaRedValida && notaMatValida && notaCNValida) {
        var media = calculoMedia(notaLing, notaCH, notaRed, notaMat, notaCN);
        tdMedia.textContent = media;
    }
}

function calculoMedia(notaLing, notaCH, notaRed, notaMat, notaCN){
    media = (parseInt(notaCH) + parseInt(notaCN) + parseInt(notaLing) + parseInt(notaRed) + parseInt(notaMat)) / 5;

    return media;
}
function validaNotas(nota){
    if (nota >= 650){
        //document.querySelector("table tr:firt-child");
        //$(this).parent.backgroundColor("#00FA9A");
        return true;
    }
    else{
        //$(this).parent.backgroundColor("#B22222");
        //document.querySelector("table tr:firt-child");
        return false;
    }
}
