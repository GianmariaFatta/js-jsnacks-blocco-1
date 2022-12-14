// SNACK 1
// Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti..


const resultElement=document.getElementById("result");

const fifi=[]

for(let i=0; i<=9; i++){
   const userNumber=parseInt(prompt("dammi un numero"))
   fifi.push(userNumber)
   
}


const somma=(fifi[0]+fifi[1]+fifi[2]+fifi[3]+fifi[4]+fifi[5]+fifi[6]+fifi[7]+fifi[8]+fifi[9])

resultElement.innerHTML=`<h1 class="text-danger text-center m-5">IL TOTALE DELLE TUE SCELTE È ${somma} </h1>`


