const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você começa a ler as historias da biblia fica dificil lembras de todos os detalhes, entao o quanto voce lembra?",
        alternativas: [
            {
                texto: "a biblia e chataaa!",
                afirmacao: "Mentiroso, tenho certeza que voce nunca leu. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Quantos filhos israel teve?",
        alternativas: [
            {
                texto: "Israel teve 12 filhos homens e uma menina.",
                afirmacao: "Gn 29-31.35,Gn 30-4.24 e Gn 35-16.20."
            },
            {
                texto: "Israel teve 10 filhos homens e 2 meninas.",
                afirmacao: "???."
            }
        ]
    },
    {
        enunciado: "Quanto tempo os israelitas ficam vivendo no egito?",
        alternativas: [
            {
                texto: "430 anos.",
                afirmacao: "Exodo 12-40"
            },
            {
                texto: "300 anos.",
                afirmacao: "???."
            }
        ]
    },
    {
        enunciado: "Qual o nome da mulher que ajudou Sitim e mais dois espioes em jerico?",
        alternativas: [
            {
                texto: "Raabe.",
                afirmacao: "josue 3-15."
            },
            {
                texto: "Dina.",
                afirmacao:"???."
            }
        ]
    },
    {
        enunciado: "Qual foi a primeira tribo a atacar os cananeus? ",
        alternativas: [
            {
                texto: "tribo de juda.",
                afirmacao: "juizes 1-2."
            },
            {
                texto: "tribo de moises.",
                afirmacao: "???. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "respostas:...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

