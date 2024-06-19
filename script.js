const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const navs=document.querySelectorAll('#navbar');
const close=document.getElementById("close");

const second=navs[1];


// console.log(nav);


if (bar){
    bar.addEventListener('click', ()=> {
        while(second.firstChild){
            nav.appendChild(second.firstChild);
        }
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}


/*var main_i=document.getElementById("main-img");
var shopimg=document.querySelectorAll(".pro");
console.log(shopimg);

function addClickListeners(elements) {
    elements.forEach(element => {
        element.addEventListener('click', function() {
            const temp=element.querySelector('img');
            console.log(temp.src);
            console.log(main_img);
            main_img.src=temp.src;
            window.location.href='sproduct.html';
            
            // Perform any other actions you want here
        });
    });
}

// Add click event listeners to the array of elements
addClickListeners(shopimg);*/
