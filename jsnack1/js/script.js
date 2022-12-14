// SNACK 1
// Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti..


const resultElement=document.getElementById("result");

const fifi=[]

for(let i=0; i<=9; i++){
   const userNumber=parseInt(prompt("dammi un numero"))
   fifi.push(userNumber)
   
}

let sum=0;

for( let i=0; i<fifi.length; i++){
   sum+= fifi[i]
}


resultElement.innerHTML=`<h1 class="text-danger text-center m-5">IL TOTALE DELLE TUE SCELTE È ${sum} </h1>`


