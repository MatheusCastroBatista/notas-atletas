class Atleta {
            constructor(nome, notas) {
                this.nome = nome;
                this.notas = notas;
            }
        }

        class Competicao {
            constructor(atletas) {
                this.atletas = atletas.map(atleta => new Atleta(atleta.nome, atleta.notas));
            }

            calcularMediaValida(notas) {
                let notasOrdenadas = notas.sort((a, b) => a - b);
                let notasComputadas = notasOrdenadas.slice(1, 4);
                let soma = 0;
                notasComputadas.forEach(nota => {
                    soma += nota;
                });
                return soma / notasComputadas.length;
            }

            exibirResultados() {
                const resultadosDiv = document.getElementById('resultados');
                for (let i = 0; i < this.atletas.length; i++) {
                    let atleta = this.atletas[i];
                    let mediaValida = this.calcularMediaValida(atleta.notas);
                    resultadosDiv.innerHTML += `<p>Atleta: ${atleta.nome}</p>`;
                    resultadosDiv.innerHTML += `<p>Notas Obtidas: ${atleta.notas.join(", ")}</p>`;
                    resultadosDiv.innerHTML += `<p>Média Válida: ${mediaValida.toFixed(6).replace('.', ',')}</p>`;
                    resultadosDiv.innerHTML += `<hr>`;

                    // Utilização do console.log para mostrar os resultados no console
                    console.log(`Atleta: ${atleta.nome}`);
                    console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
                    console.log(`Média Válida: ${mediaValida.toFixed(6).replace('.', ',')}`);
                }
            }
        }

        let atletas = [
            { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
            { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
            { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
            { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
        ];

        let competicao = new Competicao(atletas);
        competicao.exibirResultados();
