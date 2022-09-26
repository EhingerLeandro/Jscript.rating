const ratingContainer = document.querySelector(".rating");
let currentValue =0;
const limit = 5;

const html = Array.from(Array(limit)).map((item, i)=>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join('');

document.querySelectorAll(".item").forEach((ite)=>{
    ite.addEventListener("mouseover", (e)=>{
        const pos = ite.getAttribute("data-pos");

        document.querySelectorAll('.item').forEach(it=>{
           if(it.classList.contains ('item-full')){
              it.classList.remove('item-full');
           }
        });
        
        for(let i=0; i<= pos; i++){
            const square = document.querySelector(`.item-${i}`);
            if(!square.classList.contains("item-full")){
                square.classList.add('item-full');
            }
        }
    })
});

