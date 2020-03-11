let PIZZA = document.querySelector(".pizza");
let SAUCE = document.querySelector(".sauce");
let CHEESE = document.querySelector(".cheese");
let cau = document.querySelector("#cau");
let who = document.querySelector("#who");
let tra = document.querySelector("#tra");
let cur = document.querySelector("#cur");
let cre = document.querySelector("#cre");
let mar = document.querySelector("#mar");
let moz = document.querySelector("#moz");
let ame = document.querySelector("#ame");
let pro = document.querySelector("#pro");
let top1 = document.querySelector("#ing1");
let top2 = document.querySelector("#ing2");
let top3 = document.querySelector("#ing3");
let top4 = document.querySelector("#ing4");
let pd = document.querySelector("#price-display");
let pf = document.querySelector("#pizzaForm");

let toppings = null;


let menuForm = document.querySelector("#form1");
menuForm.addEventListener("change", (e)=> {
    e.preventDefault();
    if(cau.checked == true) {
        console.log("cauliflower");
        toppings= "cauliflower";
        PIZZA.style.backgroundColor = "cornsilk";
    } else if (who.checked == true) {
        console.log("whole wheat");
        toppings = toppings + " ,whole wheat";
        PIZZA.style.backgroundColor = "darkgoldenrod";
    } else if (tra.checked == true) {
        console.log("traditional");
        toppings = toppings + " ,traditional";
        PIZZA.style.backgroundColor = "wheat";
    }
});

let menuForm2 = document.querySelector("#form2");
menuForm2.addEventListener("change", (e)=> {
    e.preventDefault();
    if(cau.checked == false && who.checked == false && tra.checked == false) {
        alert("must start with dough");
        cur.checked = false;
        cre.checked = false;
        mar.checked = false;

    } else if (cau.checked == true || who.checked == true || tra.checked == true) {
        if(cur.checked == true) {
            console.log("curry");
            toppings = toppings + " ,curry";
            SAUCE.style.visibility = "visible";
            SAUCE.style.backgroundColor = "orange";
        } if (cre.checked == true) {
            console.log("cream");
            toppings = toppings + " , cream";
            SAUCE.style.visibility = "visible";
            SAUCE.style.backgroundColor = "oldlace";
        } if (mar.checked == true) {
            console.log("marinara");
            toppings = toppings + " ,marinara";
            SAUCE.style.visibility = "visible";
            SAUCE.style.backgroundColor = "tomato";
        }
    }
});


let menuForm3 = document.querySelector("#form3");
menuForm3.addEventListener("change", (e)=> {
    e.preventDefault();
    if(cau.checked == false && who.checked == false && tra.checked == false
        && cur.checked == false && cre.checked == false && mar.checked == false){
        alert("you must check dough and sauce first");
        // reset to unchecked radio
        moz.checked = false;
        ame.checked = false;
        pro.checked = false;
    } else if (cur.checked == true || cre.checked == true || mar.checked == true) {
        if(moz.checked == true) {
            console.log("mozza");
            toppings = toppings + " ,mozzarella";
            CHEESE.style.visibility = "visible";
            CHEESE.style.backgroundColor = "lightyellow";
        } else if (ame.checked == true) {
            console.log("american");
            toppings = toppings + " ,american";
            CHEESE.style.visibility = "visible";
            CHEESE.style.backgroundColor = "yellow";
        } else if (pro.checked == true) {
            console.log("provolone");
            toppings = toppings + " ,provolone";
            CHEESE.style.visibility = "visible";
            CHEESE.style.backgroundColor = "bisque";
        }
    }
});

function priceChanger() {
    let counter = document.querySelectorAll('input[type="checkbox"]:checked').length;

    if(counter == 1) {
        pd.innerHTML = "Price: $5.00";
    } else if (counter == 2) {
        pd.innerHTML = "Price: $5.00";
    } else if (counter == 3){
        pd.innerHTML = "Price: $5.50";
    } else if (counter == 4){
        pd.innerHTML = "Price: $6.00";
    } else {
        console.log("testing priceChanger");
    }

}

let menuForm4 = document.querySelector("#form4");
menuForm4.addEventListener("change", (e)=> {
    e.preventDefault();
    if(cau.checked == false && who.checked == false && tra.checked == false
        && cur.checked == false && cre.checked == false && mar.checked == false
        && moz.checked == false && ame.checked == false && pro.checked == false){
        console.log("test");
        alert("Dough, sauce, cheese, and then toppings.");
        spi.checked = false;
        top1.style.visibility = "hidden";
        tom.checked = false;
        top2.style.visibility = "hidden";
        bac.checked = false;
        top3.style.visibility = "hidden";
        mus.checked = false;
        top4.style.visibility = "hidden";
    }
    priceChanger();
});

spi.addEventListener("change", (e) => {
    if (spi.checked == true) {
        console.log("tomatoes");
        toppings = toppings + " ,tomatoes";
        top1.style.visibility = "visible";
        top1.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/spinach.png";
        // priceChanger();
    } else {
        console.log("no spinach");
        top1.style.visibility = "hidden";
    }
});

tom.addEventListener("change", (e) => {
    if (tom.checked == true) {
        console.log("mushrooms");
        toppings = toppings + " ,mushrooms";
        top2.style.visibility = "visible";
        top2.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/tomatoes.png";
        // priceChanger();
    } else {
        console.log("no tomatoes");
        top2.style.visibility = "hidden";
    }
});

bac.addEventListener("change", (e) => {
    if (bac.checked == true) {
        console.log("spinach");
        toppings = toppings + " ,spinach";
        top3.style.visibility = "visible";
        top3.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/bacon.png";
        // priceChanger();
    } else {
        console.log("no spinach");
        top3.style.visibility = "hidden";
    }
});

mus.addEventListener("change", (e) => {
    if (mus.checked == true) {
        console.log("bacon");
        toppings = toppings + " ,bacon";
        top4.style.visibility = "visible";
        top4.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/mushroom.png";
        // priceChanger();
    } else {
        console.log("no bacon");
        top4.style.visibility = "hidden";
    }
});

pf.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("form test");
    let selected = new Array();
    let chks = document.getElementsByTagName("INPUT");
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }
    selected.push(pd.innerHTML);
    selected.map(a => console.log(a.toString()));
    // const selected = "pizza test";
    console.log(selected);
    sub();

});

// AJAX ADDED BELOW //

function sub() {

    $.ajax({
        type: "POST",
        url: "/addPizza",
        data: {
            name: "Matt",
            toppings: toppings,
        },
        success:function(result){
            console.log(result);
            window.location.href = "/";
        }
    });
}


// let PIZZA = document.querySelector(".pizza");
// let SAUCE = document.querySelector(".sauce");
// let CHEESE = document.querySelector(".cheese");
// let cau = document.querySelector("#cau");
// let who = document.querySelector("#who");
// let tra = document.querySelector("#tra");
// let cur = document.querySelector("#cur");
// let cre = document.querySelector("#cre");
// let mar = document.querySelector("#mar");
// let moz = document.querySelector("#moz");
// let ame = document.querySelector("#ame");
// let pro = document.querySelector("#pro");
// let top1 = document.querySelector("#ing1");
// let top2 = document.querySelector("#ing2");
// let top3 = document.querySelector("#ing3");
// let top4 = document.querySelector("#ing4");
// let pd = document.querySelector("#price-display");
// let pf = document.querySelector("#pizzaForm");
//
// let menuForm = document.querySelector("#form1");
// menuForm.addEventListener("change", (e)=> {
//     e.preventDefault();
//     if(cau.checked == true) {
//         console.log("cauliflower");
//         PIZZA.style.backgroundColor = "cornsilk";
//     } else if (who.checked == true) {
//         console.log("whole wheat");
//         PIZZA.style.backgroundColor = "darkgoldenrod";
//     } else if (tra.checked == true) {
//         console.log("traditional");
//         PIZZA.style.backgroundColor = "wheat";
//     }
// });
//
// let menuForm2 = document.querySelector("#form2");
// menuForm2.addEventListener("change", (e)=> {
//     e.preventDefault();
//     if(cau.checked == false && who.checked == false && tra.checked == false) {
//         alert("must start with dough");
//         cur.checked = false;
//         cre.checked = false;
//         mar.checked = false;
//
//     } else if (cau.checked == true || who.checked == true || tra.checked == true) {
//         if(cur.checked == true) {
//             console.log("curry");
//             SAUCE.style.visibility = "visible";
//             SAUCE.style.backgroundColor = "orange";
//         } if (cre.checked == true) {
//             console.log("cream");
//             SAUCE.style.visibility = "visible";
//             SAUCE.style.backgroundColor = "oldlace";
//         } if (mar.checked == true) {
//             console.log("marinara");
//             SAUCE.style.visibility = "visible";
//             SAUCE.style.backgroundColor = "tomato";
//         }
//     }
// });
//
//
// let menuForm3 = document.querySelector("#form3");
// menuForm3.addEventListener("change", (e)=> {
//     e.preventDefault();
//     if(cau.checked == false && who.checked == false && tra.checked == false
//         && cur.checked == false && cre.checked == false && mar.checked == false){
//         alert("you must check dough and sauce first");
//         // reset to unchecked radio
//         moz.checked = false;
//         ame.checked = false;
//         pro.checked = false;
//     } else if (cur.checked == true || cre.checked == true || mar.checked == true) {
//         if(moz.checked == true) {
//             console.log("mozza");
//             CHEESE.style.visibility = "visible";
//             CHEESE.style.backgroundColor = "lightyellow";
//         } else if (ame.checked == true) {
//             console.log("american");
//             CHEESE.style.visibility = "visible";
//             CHEESE.style.backgroundColor = "yellow";
//         } else if (pro.checked == true) {
//             console.log("provolone");
//             CHEESE.style.visibility = "visible";
//             CHEESE.style.backgroundColor = "bisque";
//         }
//     }
// });
//
// function priceChanger() {
//     let counter = document.querySelectorAll('input[type="checkbox"]:checked').length;
//
//     if(counter == 1) {
//         pd.innerHTML = "Price: $5.00";
//     } else if (counter == 2) {
//         pd.innerHTML = "Price: $5.00";
//     } else if (counter == 3){
//         pd.innerHTML = "Price: $5.50";
//     } else if (counter == 4){
//         pd.innerHTML = "Price: $6.00";
//     } else {
//         console.log("testing priceChanger");
//     }
//
// }
//
// let menuForm4 = document.querySelector("#form4");
// menuForm4.addEventListener("change", (e)=> {
//     e.preventDefault();
//     if(cau.checked == false && who.checked == false && tra.checked == false
//         && cur.checked == false && cre.checked == false && mar.checked == false
//         && moz.checked == false && ame.checked == false && pro.checked == false){
//         console.log("test");
//         alert("Dough, sauce, cheese, and then toppings.");
//         spi.checked = false;
//         top1.style.visibility = "hidden";
//         tom.checked = false;
//         top2.style.visibility = "hidden";
//         bac.checked = false;
//         top3.style.visibility = "hidden";
//         mus.checked = false;
//         top4.style.visibility = "hidden";
//     }
//     priceChanger();
// });
//
// spi.addEventListener("change", (e) => {
//     if (spi.checked == true) {
//         console.log("tomatoes");
//         top1.style.visibility = "visible";
//         top1.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/spinach.png";
//         // priceChanger();
//     } else {
//         console.log("no spinach");
//         top1.style.visibility = "hidden";
//     }
// });
//
// tom.addEventListener("change", (e) => {
//     if (tom.checked == true) {
//         console.log("mushrooms");
//         top2.style.visibility = "visible";
//         top2.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/tomatoes.png";
//         // priceChanger();
//     } else {
//         console.log("no tomatoes");
//         top2.style.visibility = "hidden";
//     }
// });
//
// bac.addEventListener("change", (e) => {
//     if (bac.checked == true) {
//         console.log("spinach");
//         top3.style.visibility = "visible";
//         top3.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/bacon.png";
//         // priceChanger();
//     } else {
//         console.log("no bacon");
//         top3.style.visibility = "hidden";
//     }
// });
//
// mus.addEventListener("change", (e) => {
//     if (mus.checked == true) {
//         console.log("bacon");
//         top4.style.visibility = "visible";
//         top4.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/mushroom.png";
//         // priceChanger();
//     } else {
//         console.log("no mushrooms");
//         top4.style.visibility = "hidden";
//     }
// });
//
// pf.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     console.log("form test");
//     let selected = new Array();
//     let chks = document.getElementsByTagName("INPUT");
//     for (let i = 0; i < chks.length; i++) {
//         if (chks[i].checked) {
//             selected.push(chks[i].value);
//         }
//     }
//     selected.push(pd.innerHTML);
//     console.log(selected);
// });





