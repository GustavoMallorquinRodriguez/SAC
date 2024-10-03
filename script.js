function calcula() {
    const v=parseFloat(document.getElementById('total').value);
    const p=parseFloat(document.getElementById('parcela').value);
    const t=parseFloat(document.getElementById('taxa').value);
    let x;
    let y;
    let l;
    x= (v/p);
    y= x*t;
    l= y+x;
    document.getElementById('resposta').innerText="Esse é o valor do primeiro mês " + l;

    let corpo = document.querySelector('#tabela tbody');
    let linha1 =`
                <tr>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${v.toFixed(2)}</td>
                </tr>
                `;

    corpo.innerHTML = linha1;

        for (let par=1; par<=n; par++){

            let linha =`
                <tr>
                    <td>${par}</td>
                    <td>${l.toFixed(2)}</td>
                    <td>${taxa.toFixed(2)}</td>
                    <td>${y.toFixed(2)}</td>
                    <td>${v-y}</td>
                </tr>
                `;

            corpo.innerHTML += linha;
            v = v - x;
            juros = v * i;
            x= p - juros;

    }
}