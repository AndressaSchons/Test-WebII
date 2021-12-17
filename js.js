var botaoAdicionar = document.querySelector("#adicionarNota");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");
    var aluno = obtemAlunoDoFormulario(formulario);
    var alunoTr = montaTr(aluno);
    var erros = validaAluno(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
    formulario.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

    function obtemAlunoDoFormulario(formulario) {

        aluno = {
            nome: formulario.nome.value,
            notaLing: formulario.notaLing.value,
            notaCH: formulario.notaCH.value,
            notaRed: formulario.notaRed.value,
            notaMat: formulario.notaMat.value,
            notaCN: formulario.notaCN.value,
            media: mediaNotas(notaLing, notaCH, notaRed, notaMat, notaCN),
        }

        return aluno;
    }

    function montaTr(aluno) {
        var alunoTr = document.createElement("tr");
        alunoTr.classList.add("aluno");

        alunoTr.appendChild(montaTd(aluno.nome, "nome"));
        alunoTr.appendChild(montaTd(aluno.notaCH, "notaCH"));
        alunoTr.appendChild(montaTd(aluno.notaCN, "notaCN"));
        alunoTr.appendChild(montaTd(aluno.notaLing, "notaLing"));
        alunoTr.appendChild(montaTd(aluno.notaRed, "notaRed"));
        alunoTr.appendChild(montaTd(aluno.notaMat, "notaMat"));
        alunoTr.appendChild(montaTd(aluno.media, "media"));

        return alunoTr;
    }

    function montaTd(dado, classe) {
        var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;

        return td;
    }


    function validaAluno(aluno) {

        var erros = [];

        if (aluno.nome.length == 0) {
            erros.push("O nome não pode ser em branco");
        }

        if (aluno.notaLing.length == 0) {
            erros.push("A nota de Linguagens não pode ser em branco");
        }
        if (aluno.notaCH.length == 0) {
            erros.push("A nota de Ciências Humanas não pode ser em branco");
        }

        if (aluno.notaRed.length == 0) {
            erros.push("A nota de Redação não pode ser em branco");
        }

        if (aluno.notaMat.length == 0) {
            erros.push("A nota de matemática não pode ser em branco");
        }

        if (aluno.notaCN.length == 0) {
            erros.push("A nota de Ciências da Natureza não pode ser em branco");
        }


        if (!validaNotas(aluno)) {
            erros.push("Alguma nota está inválida.");
        }

        return erros;
    }

    function exibeMensagensDeErro(erros) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";

        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }
/* removedor

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event){
    if (envent.target.tagName != "TH") event.target.parentNode.remove();
*/

var titulo = document.querySelector(".titulo");
titulo.textContent = "Simulador SISU";

var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {

    var alunoo = alunos[i];

    var tdNotaLing = alunoo.querySelector(".notaLing");
    var notaLing = tdNotaLing.textContent;

    var tdNotaCH = alunoo.querySelector(".notaCH");
    var notaCH = tdNotaCH.textContent;

    var tdNotaRed = alunoo.querySelector(".notaRed");
    var notaRed = tdNotaRed.textContent;

    var tdNotaMat = alunoo.querySelector(".notaMat");
    var notaMat = tdNotaMat.textContent;

    var tdNotaCN = alunoo.querySelector(".notaCN");
    var notaCN = tdNotaCN.textContent;

    var notaLingValida = validaNotas(notaLing);
    var notaCHValida = validaNotas(notaCH);
    var notaRedValida = validaNotas(notaRed);
    var notaMatValida = validaNotas(notaMat);
    var notaCNValida = validaNotas(notaCN);

    if (!notaLingValida) {
        console.log("Nota Linguagens inválido");
        notaLingValida = false;
        tdMedia.textContent = "Nota de Linguagens inválido";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaCHValida) {
        console.log("Nota de Ciências Humanas inválido");
        notaCHValida = false;
        tdMedia.textContent = "Nota de Ciências Humanas inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaRedValida) {
        console.log("Nota de Redação Inválida");
        notaRedValida = false;
        tdMedia.textContent = "Nota de Redação Inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaMatValida) {
        console.log("Nota de Matemática Inválida");
        notaMatValida = false;
        tdMedia.textContent = "Nota de Matemática Inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (!notaCNValida) {
        console.log("Nota de Ciências da Natureza inválida");
        notaCNValida = false;
        tdMedia.textContent = "Nota de Ciências da Natureza inválida";
        alunoo.classList.add("aluno-invalido");
    }

    if (notaLingValida && notaCHValida && notaRedValida && notaMatValida && notaCNValida) {
        var media = calculoMedia(notaLing, notaCH, notaRed, notaMat, notaCN);
        tdImc.textContent = imc;
    }
}

function calculoMedia(notaLing, notaCH, notaRed, notaMat, notaCN){
    media = (notaCH + notaCN + notaLig + notaRed + notaMat) / 5;

    return media.toFixed(2)
}

function validaNotas (nota){
    if (nota >= 0 && nota <= 1000){
        return true;
    }
}