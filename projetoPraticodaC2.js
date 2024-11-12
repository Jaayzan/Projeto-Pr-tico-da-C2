//função original
function gerarAleatorios1(num) {
    console.time("TempoGasto (Algoritmo 1)");
    var vetor = [];

    while (vetor.length < num) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        if (vetor.includes(aleatorio)) {
            continue;
        }
        vetor.push(aleatorio);
    }
    console.timeEnd("TempoGasto (Algoritmo 1)");
    return vetor;
}
//função otimizada
function gerarAleatorios2(num) {
    console.time("TempoGasto (Algoritmo 2)");
    var numeros = new Set();

    while (numeros.size < num) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        numeros.add(aleatorio);
    }
    console.timeEnd("TempoGasto (Algoritmo 2)");
    return Array.from(numeros);
}

function compararAlgoritmos(num) {
    console.log(`Comparando os algoritmos com ${num} números únicos...`);

    // Tempo do Algoritmo 1
    let inicio1 = performance.now();
    gerarAleatorios1(num);
    let fim1 = performance.now();
    let tempo1 = fim1 - inicio1;
    console.log(`Tempo Algoritmo 1: ${tempo1.toFixed(2)} ms`);

    // Tempo do Algoritmo 2
    let inicio2 = performance.now();
    gerarAleatorios2(num);
    let fim2 = performance.now();
    let tempo2 = fim2 - inicio2;
    console.log(`Tempo Algoritmo 2: ${tempo2.toFixed(2)} ms`);

    // Cálculo da diferença percentual
    let diferencaPercentual = ((tempo1 - tempo2) / tempo1) * 100;
    console.log(`O Algoritmo 2 foi ${diferencaPercentual.toFixed(2)}% mais rápido que o Algoritmo 1.`);
}

// Teste com um número específico de elementos
compararAlgoritmos(50);
