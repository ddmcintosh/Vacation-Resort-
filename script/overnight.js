"use strict";

window.onload = function() 
{
   //total button 
        const totalBtn = document.getElementById("totalBtn");
        totalBtn.onclick =totalCost;
        let targetDiv = document.getElementById(totalBox);
        if(targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
        }

    
};

// definiing function of button  and number of days 
function totalCost()
{
    let numDaysField = document.getElementById("numDaysField");
    let nights = numDaysField.value;

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     //room options

    let master = document.getElementById("masterBungalow");
    let medTierBungalow = document.getElementById("medtierBungalow");
    let standard = document.getElementById("standard");



    // do a roomCost under each room to set to 0
    let roomCost = 0;

    if (master.checked) {
        roomCost = 210;
    }
    else if (medTierBungalow.checked) {
        roomCost = 150;
    }
    else if (standard.checked) {
        roomCost = 150;
    }

    // original room cost 
    let total = numDaysField * roomCost;
    let origRoomCost = document.getElementById("origRoomCost");
    origRoomCost.innerHTML = " The original room cost: $ " + total;

    //discount 
    let noDiscount = document.getElementById("noDiscount");
    let seniorDiscount = document.getElementById("seniorDiscount");
    let miltaryDiscount = document.getElementById("militaryDiscount");

    let discount = 0 
    if (noDiscount.checked) {
        discount = 0;
    }
    else if (seniorDiscount.checked) {
        discount = (0.10 * total) 
        ;
    }
   else if (miltaryDiscount.checked) {
        discount = 0.20;
   }
   let finalDiscount = document.getElementById("dis");
   finalDiscount.innerHTML = " The discount: $" + discount;

   //discounted room cost 
   let discountedRoom = total - discount;
   let disRoomCost = document.getElementById("disRoomCost");
   disRoomCost.innerHTML = " The discounted room cost " + discountedRoom.toFixed(2);

   let tax = .12 * discountedRoom;
   let tax1 = document.getElementById("tax");
   tax1.innerHTML = " The tax: " + tax.toFixed(2);

   //total cost 
   let completeTotal = discountedRoom + tax;
   let newTotal = document.getElementById("total");
   newTotal.innerHTML = " The total cost of your stay at Deâvion Resort is " + completeTotal.toFixed(2);

   //hide/show total 
   let targetDiv = document.getElementById("totalBox");
   if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
   }

   return totalCost();

}


