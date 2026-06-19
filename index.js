// ===== QUIZ =====
function corrigirQuiz() {
    let pontos = 0;

    const respostas = document.querySelectorAll('input[type="radio"]:checked');

    respostas.forEach(resposta => {
        if (resposta.value === "c") {
            pontos++;
        }
    });

    let mensagem = "";

    switch (true) {
        case (pontos === 10):
            mensagem = "🏆 Excelente! Você acertou 10/10!";
            break;

        case (pontos >= 8):
            mensagem = `🌎 Muito bem! Você fez ${pontos}/10 pontos.`;
            break;

        case (pontos >= 5):
            mensagem = `🌱 Bom resultado! Você fez ${pontos}/10 pontos.`;
            break;

        default:
            mensagem = `📚 Você fez ${pontos}/10 pontos. Continue estudando!`;
    }

    document.getElementById("resultado").innerHTML = mensagem;
}


// ===== GRÁFICO (Chart.js seguro) =====
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("graficoDesmatamento");

    if (canvas) {
        new Chart(canvas, {
            type: "bar",
            data: {
                labels: [
                    "Perda da Biodiversidade",
                    "Aquecimento Global",
                    "Erosão do Solo",
                    "Perda de Habitats",
                    "Redução das Chuvas",
                    "Poluição dos Rios"
                ],
                datasets: [{
                    label: "Impacto (%)",
                    data: [95, 90, 80, 88, 75, 65],
                    backgroundColor: [
                        "#2e7d32",
                        "#c62828",
                        "#ef6c00",
                        "#1565c0",
                        "#6a1b9a",
                        "#00838f"
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Principais Consequências do Desmatamento"
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
});
