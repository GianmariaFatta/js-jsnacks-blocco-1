// in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa. (vietato usare includes() )

const mrX=document.getElementById("guest")
const button=document.getElementById("submit")
const accessElement=document.getElementById("access")

const validGuest=["Harry", "Ron", "Hermione", "Jimmy"];

button.addEventListener("click", function (){
    const guestIdentity=mrX.value.trim();
    

if(!guestIdentity){
    accessElement.innerHTML=`<h2 class="text-danger">I can't hear you.Can you repeat please</h2>`;
    return;
}

let isAllowed= false;

for(let i = 0; i<validGuest.length && !isAllowed; i++){
    const currentGuest = validGuest[i];

    if(guestIdentity === currentGuest){
        isAllowed = true;
        console.log(guestIdentity, currentGuest)
    }
}

    accessElement.innerHTML= isAllowed ? `<h2 class="text-success">Welcome, please come in</h2>`: `<h2 class="text-danger">GO AWAY! </h2>`
   
})