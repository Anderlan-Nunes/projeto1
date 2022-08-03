let num = document.querySelector('input#numeros');
let lista = document.querySelector('select#lista')
let area = document.querySelector('p#area');
let ar = []


function isNumero(n){
    if( n >= 1 && n <= 100){
        return true
    }else{
        alert("favor digite um numero de 1 a 100")
        return false
    }

}

function isLista(n, l){
    if (l.indexOf(n) == -1){
        l.push(n)
        alert(l)
        return true;
    }else{
        alert("numero ja existe")
    }
}



function adicionar(){
    if(isNumero(num.value) && isLista(num.value, ar)){
        
        alert("lista")
    }
}