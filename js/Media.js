var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    var tdNotaLing = aluno.querySelector(".infoLing");
    var notaLing = tdNotaLing.textContent;

    var tdNotaCH = aluno.querySelector(".infoCH");
    var notaCH = tdNotaCH.textContent;

    var tdNotaRed = aluno.querySelector(".infoRed");
    var notaRed = tdNotaRed.textContent;

    var tdNotaMat = aluno.querySelector(".infoMat");
    var notaMat = tdNotaMat.textContent;

    var tdNotaCN = aluno.querySelector(".infoCN");
    var notaCN = tdNotaCN.textContent;

    var tdMedia = aluno.querySelector(".media");

    var notaLingValida = validaNotas(notaLing);
    var notaCHValida = validaNotas(notaCH);
    var notaRedValida = validaNotas(notaRed);
    var notaMatValida = validaNotas(notaMat);
    var notaCNValida = validaNotas(notaCN);

    if (!notaLingValida) {
        notaLingValida = false;
        tdMedia.textContent = "Nota de Linguagens inválido";
        aluno.classList.add("aluno-invalido");
    }

    if (!notaCHValida) {
        notaCHValida = false;
        tdMedia.textContent = "Nota de Ciências Humanas inválida";
        aluno.classList.add("aluno-invalido");
    }

    if (!notaRedValida) {
        notaRedValida = false;
        tdMedia.textContent = "Nota de Redação Inválida";
        aluno.classList.add("aluno-invalido");
    }

    if (!notaMatValida) {
        notaMatValida = false;
        tdMedia.textContent = "Nota de Matemática Inválida";
        aluno.classList.add("aluno-invalido");
    }

    if (!notaCNValida) {
        notaCNValida = false;
        tdMedia.textContent = "Nota de Ciências da Natureza inválida";
        aluno.classList.add("aluno-invalido");
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
    if (nota >= 650 && nota <= 1000){
        aluno.classList.add("aluno-aprovado");
        return true;
    }
    else{
        aluno.classList.add("aluno-reprovado");
        return false;
    }
}
