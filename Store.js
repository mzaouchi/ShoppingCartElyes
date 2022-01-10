// var btnPlus = document.querySelector('.a')
// var btnMoins = document.querySelector('.b')

// btnPlus.addEventListener('click',function(){
//     btnPlus.parentElement.previousElementSibling.innerHTML++
// })

// btnMoins.addEventListener('click',function(){
//     if(btnMoins.parentElement.previousElementSibling.innerHTML>0){
//         btnMoins.parentElement.previousElementSibling.innerHTML--
//     }
// })


var btnsPlus = document.querySelectorAll('.a')
var btnsMoins = document.querySelectorAll('.b')
var btnsDelete = document.querySelectorAll('.RemoveItem')
var btnsLike = document.querySelectorAll('.elD')
var somTot = document.querySelector('#tot')
 
for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].parentElement.previousElementSibling.innerHTML++
        SommeTotale()
    })
}


for(let i = 0;i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if( btnsMoins[i].parentElement.previousElementSibling.innerHTML>0){
            btnsMoins[i].parentElement.previousElementSibling.innerHTML--
            SommeTotale()
        }        
    })
}

for(let i = 0;i<btnsDelete.length;i++){
    btnsDelete[i].addEventListener('click',function(){
        btnsDelete[i].parentElement.parentElement.remove()
        SommeTotale()
    })
}

for(let i = 0;i<btnsLike.length;i++){
    btnsLike[i].addEventListener('click',function(){
        btnsLike[i].classList.toggle('elD')
    })
}


function SommeTotale(){
    var prix = document.querySelectorAll('.prix')
    var quanti = document.querySelectorAll('.quant')
    var som = 0 

    for(let i = 0;i<quanti.length;i++){
        som = som + prix[i].innerHTML * quanti[i].innerHTML
    }
    somTot.innerHTML = som
}