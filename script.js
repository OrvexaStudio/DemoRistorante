// Animazioni allo scroll

const elements = document.querySelectorAll(
".card, .gallery img, .review, .about"
);


elements.forEach(el=>{
    el.classList.add("hidden");
});


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
}
);



elements.forEach(el=>{
    observer.observe(el);
});





// Cambio titolo browser quando si torna sulla pagina

document.addEventListener(
"visibilitychange",
()=>{

if(document.hidden){

document.title="Torna a trovarci 🍝";

}else{

document.title="Osteria Vento di Mare";

}

});





// Prenotazione WhatsApp dinamica

const whatsappButtons =
document.querySelectorAll(".btn");


whatsappButtons.forEach(button=>{


if(button.innerText.includes("Prenota")){


button.addEventListener(
"click",
()=>{

console.log(
"Cliente interessato alla prenotazione"
);

});


}


});
