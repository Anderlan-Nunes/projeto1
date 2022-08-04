let num = document.querySelector('input#numeros');
let lista = document.querySelector('select#lista')
let area = document.querySelector('p#area');
let valor = []


function isNumero(n){
    if( n >= 1 && n <= 100){
        return true
    }else{
        alert("favor digite um numero de 1 a 100")
        return false
    }

}

function isLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        alert(" esse numero ja existe")
        return true;
    }else{
        return false
    }
}

function montaLista(num, valor){
    alert('entrou')
    let item = document.createElement('option')
    item.text = `${Number(num)}`
    lista.appendChild(item)
}
function MedNumero(n){
    alert(`n eh ${n}`)
    let m = n[0];
    for(let pos in n){
        if( n[pos] > m){
            m = n[pos]
        }else{
            alert(`eee${m}`)
        }
    }
    alert(`maior numero eh ${m}`)

}
function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valor)){
        alert("if")
        montaLista(num.value, valor)
        valor.push(Number(num.value))
        
    }
    num.value = "";
    num.focus();
}

function finalizar(){
    alert(`array ${valor}`)
    MedNumero(valor);
}