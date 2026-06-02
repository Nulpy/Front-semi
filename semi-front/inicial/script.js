function somar(){
    var n1 = parseFloat(document.getElementById('numero1').value) 
    var n2 = parseFloat(document.getElementById('numero2').value) 
    var res = document.getElementById('respSoma')
    res.textContent = n1 + n2
}

function sub(){
    var n1 = parseFloat(document.getElementById('numero3').value) 
    var n2 = parseFloat(document.getElementById('numero4').value) 
    var res = document.getElementById('respSub')
    res.textContent = n1 - n2
}

function mult(){
    var n1 = parseFloat(document.getElementById('numero5').value) 
    var n2 = parseFloat(document.getElementById('numero6').value) 
    var res = document.getElementById('respMult')
    res.textContent = n1 * n2
}

function div(){
    var n1 = parseFloat(document.getElementById('numero7').value) 
    var n2 = parseFloat(document.getElementById('numero8').value) 
    var res = document.getElementById('respDiv')

    if(n2 !== 0 && n1 !== 0){
        res.textContent = (n1 / n2).toFixed(2)
    }else{
        res.textContent = "Não se divide por 0"
    }
}

