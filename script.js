function calculateSAC() {
    // Obter valores de entrada
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const months = parseInt(document.getElementById("months").value);
    
    // Validação para evitar erros de entrada
    if (isNaN(principal) || isNaN(rate) || isNaN(months) || months <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Cálculo da amortização constante
    const amortization = principal / months;
    
    // Limpa a tabela antes de preencher
    const tableBody = document.querySelector("#sacTable tbody");
    tableBody.innerHTML = "";

    let balance = principal;
    
    for (let i = 1; i <= months; i++) {
        const interest = balance * rate;
        const installment = amortization + interest;
        
        // Criar linha da tabela com os dados da parcela
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i}</td>
            <td>${amortization.toFixed(2)}</td>
            <td>${interest.toFixed(2)}</td>
            <td>${installment.toFixed(2)}</td>
            <td>${balance.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);

        // Atualizar saldo devedor
        balance -= amortization;
    }
}