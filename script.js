const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

/*1*/

numbers.forEach((number) => {
    document.body.innerHTML += `<div>${number}</div>`;
});

/*2*/

numbers.forEach((number) => {
  document.body.innerHTML += `<div>${Math.pow(number, 2)}</div>`;
});

/*3*/

numbers.forEach((number) =>{
    if (number < 0){
        document.body.innerHTML += `<div>${number}</div>`;
    }

});
/*4*/

numbers.forEach((number)=>{
    const absolute = number < 0 ? -number : number;
    document.body.innerHTML += `<div>${absolute}</div>`;
});





/*5*/

numbers.forEach((number)=>{
    if(number % 2 === 0){
    document.body.innerHTML += `<div>${number}</div>`;
}
});


/* opravená verze 6*/

numbers.forEach((num) => {
    const absoluteThree = Math.abs(num);

    if(absoluteThree % 3 === 0){
        document.body.innerHTML += `<div>${absoluteThree}je dělitelný 3</div>`;
    }
    
})


/* 7 opravená verze*/

numbers.forEach((num) => {
    const difference = Math.abs(num-5);
    document.body.innerHTML += `<div>Číslo ${num} je od čísla 5 vzdálené ${difference} čísel.</div>`;
});

/* 8 opravená verze*/

numbers.forEach((num) => {
    const difference = Math.abs(num-5);
    const differenceExp = Math.pow(difference, 2);
    document.body.innerHTML += `<div>Druhá mocnina vzdálenosti je ${differenceExp} </div>`;
});

/*9* tady jsem musela podvádět. Tady úplně nechápu syntax, jakým způsobem se zapisuje arrow funkce, snažila jsem se to vpratat do {} :)*/

const minus = numbers.filter(number => 
    number < 0).length;
    document.body.innerHTML += `<div>Záporních čísel je${minus}</div>`;
    
;



/*10* tady jsem musela podvádět :)*/

const sumTotal = numbers.reduce((num1, num2,) =>{
    const sumResult = num1 + num2;
    return sumResult;
}, 0);

document.body.innerHTML += `<div>${sumTotal}</div>`


/*11*/
const average = numbers.reduce((num1, num2) => 
   num1 + num2, 0);

const averageResult = average / numbers.length;

document.body.innerHTML += `<div> Průměr všech čísel je${averageResult}</div>`


 
    
/*12*/

const plus = numbers.filter((number) => number > 0).reduce((num1, num2) => 
    num1 + num2, 0);

document.body.innerHTML += `<div> Součet všech kladných čísel je${plus}</div>`






    






