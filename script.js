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
    


}