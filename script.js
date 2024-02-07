let tab = []
for ( let j=1 ; j<=20 ; j++){
    tab.push(j)
}  

function fizzbuzz(i){
    if((i%5 === 0) && (i%3 === 0)){
        return "fizzbuzz"
    }
    if(i%3 === 0){
        return "fizz"
    }
    if(i%5 === 0){
        return "buzz"
    }
    else{
        return i
    } 
}

for ( let k=0 ; k<tab.length ; k++){
    console.log("le resultat affiché par la fonction fizzbuz() est : ",fizzbuzz(tab[k]))
}



export { fizzbuzz }


