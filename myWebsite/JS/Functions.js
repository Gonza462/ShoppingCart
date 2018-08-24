
$(document).ready(function(){
    //get arrays, update totals
    var arrQuantity = $(document).find(".dropdown");
    var arrPrices = $(document).find(".prices");
    updateTotals(arrQuantity,arrPrices);

    /*************************************************************************************
     Updates the number selected on the dropdown menu
     Then updates totals
     *************************************************************************************/
    $(".itemNum").click(function() {
            //update the quantity
            var value = this; //#quantity selected
            var cur = $(this);
            var parent = cur[0].parentElement;
            cur = $(parent.previousElementSibling);
            cur[0].innerText = value.innerText;

            //update totals again if quantity was changed
            var arrQuantity = $(document).find(".dropdown");
            var arrPrices = $(document).find(".prices");
            updateTotals(arrQuantity,arrPrices);
    });
    /*************************************************************************************
     Traverses the DOM and removes current element clicked
     *************************************************************************************/
    $(".remove").click(function(){
        var cur = $(this);
        var parent = cur[0].parentElement;
        cur = $(parent);
        var parent1 = cur[0].parentElement;
        cur = $(parent1);
        var parent2 = cur[0].parentElement;
        cur = $(parent2);
        var parent3 = cur[0].parentElement;
        cur = $(parent3);
        var parent4 = cur[0].parentElement;
        cur = $(parent4);
        var parent5 = cur[0].parentElement;
        cur = $(parent5);
        var parent6 = cur[0].parentElement;
        cur = $(parent6);
        var parent7 = cur[0].parentElement;
        cur = $(parent7);

        $(cur[0]).fadeOut("normal", function () {
            $(cur[0]).remove();
            //get new arrays after removing and update totals
            var arrQuantity = $(document).find(".dropdown");
            var arrPrices = $(document).find(".prices");
            updateTotals(arrQuantity, arrPrices);;
        });
    });
});
/*************************************************************************************
   A Setter method that takes in two arrays to update the totals displayed on the screen

    @param arrQuantity array: holds all current items in the cart
    @param arrPrices array:   holds all prices of current items in the cart
 *************************************************************************************/
function updateTotals(arrQuantity, arrPrices){
    //shipping is set to default value of 50
    var subtotal = 0;
    var shipping = 0;

    var numitems = document.getElementById("headText-1"); //header text "Your Cart has x items"
    var sub = document.getElementById("sub-checkout-text"); //subtotal amount
    var subship = document.getElementById("sub-shipping"); // shipping text
    var allTotal = document.getElementById("sub-total"); // total text
    var sub2 = document.getElementById("cart-sum-text-2"); // cart summary total text

    //if no items then display a message
    if(arrQuantity.length <= 0 && arrPrices.length <=  0){
        numitems.innerHTML = "Your cart is empty!"
        subship.innerHTML = "Shipping to US: $" + shipping;
    }else {
        shipping = 50;
        for (var i = 0; i < arrPrices.length; i++) {
            //iterates through the arrays and gets the subtotal by multiplying ' price * quantity '
            // the first index is the price of the first item and same goes with quantity....so the prices do MATCH with its corresponding item.
            subtotal += parseFloat(arrQuantity[i].innerText) * parseFloat(arrPrices[i].innerText);
        }
        numitems.innerText = arrQuantity.length > 1 ? "Your cart has " + arrQuantity.length + " items" : "Your cart has " + arrQuantity.length + " item";

    }   //updates totals
        subship.innerHTML = "Shipping to US: $" + shipping;
        sub2.innerHTML = "Total: $" + (shipping + subtotal);
        sub.innerHTML = "Subtotal: $" + subtotal;
        allTotal.innerHTML = "Total: $" + (shipping + subtotal);
}