
//only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {


    //removes the cart-items in the cart list  using for loop
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }


    //used to change the quantity inputs
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    
   //function and event listener to open and close the popup box 
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      //clicking the cart-icon to open the pop-up box
      document.getElementById("positionbtn3").addEventListener('click',openForm)


     //clicking the close-button to close the form
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }

      document.getElementById("cancel").addEventListener('click',closeForm)


   
}



//used to zoom in and zoom out the font-size in the page
function changeFontSize(target) {
    var demo = document.getElementById("demo");
   var computedStyle = window.getComputedStyle //computed style gives the default font-size in the computer
       ? getComputedStyle(demo) // Standards
       : demo.currentStyle;     // Old IE
   var fontSize;

   if (computedStyle) { 
     fontSize = parseFloat(computedStyle && computedStyle.fontSize);//changing it to float so doesn't go into recurring or number with many dp

     if (target == document.getElementById("positionbtn1")) {
       fontSize += 5;
     } else if (target == document.getElementById("positionbtn2")) {
       fontSize -= 5;
     }
     demo.style.fontSize = fontSize + "px";//changing font-size accordingly to the given size in the function 
   }

   }



//function called by eventlistener to remove cart
function removeCartItem(event) {
    var buttonClicked = event.target//saving the button clicked into a variable
    //removes the div element consisting  the button so the item in the div gets removed
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()//updates the cart total once a item removed
}


// changing the quantity input function
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

var counts = 0;
// this function adds the item to the cart;
//function used to keep the count  for clicking the cart button to display in  cart icon counter
function clickaddtocart(clicked){
    alert("one item added to the cart");
    var counter=document.getElementById("cart-counter");
    counts=counts+1;
    counter.innerHTML=counts;
    displaycart(clicked);   
}

//enters information according to the id of the button clicked into the div element
 function  displaycart(clicked){

    switch(clicked){
    // double quotes around the case numbers as IDs reperesented in string in html document
        case "1":
            
           var title='leather chair';
           var price="$500";
           
           addItemToCart(title, price)
            updateCartTotal()
            break;


        case "2":
            var title='Beats Studio3 Wireless';
           var price="$349.95";
           addItemToCart(title, price)
            updateCartTotal()
            break;

        case "3":
            var title='Samsung 190cm 4K Ultra HD Smart LED LCD TV';
            var price="$1,361";
            addItemToCart(title, price)
            updateCartTotal()
             break;

        case "4":
            var title='Spiderman Hoodie';
            var price="$58.99";
            addItemToCart(title, price)
            updateCartTotal()
            break;
            
        case "5":
            var title='Harrypotter purse';
            var price="$49.99";
            addItemToCart(title, price)
            updateCartTotal()
             break;
             
        case "6":
            var title='minion stuart toy';
            var price="$33";
            addItemToCart(title, price)
            updateCartTotal()
            break;
            
        case "7":
            var title='1971 ultra HD';
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;
            
        case "8":
            var title='joker Ultra HD';
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

        case "9":
            var title="Tenet ultra hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

        case "10":
            var title="gemini hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

        case "11":
            var title="wonder woman hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break; 

        case "12":
            var title="jumanji 3 ultra  hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

        case "13":
            var title="Emma ultra hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

        case "14":
            var title="Get out ultra hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

        case "15":
            var title="Bigil ultra hd";
            var price="$5";
            addItemToCart(title, price)
            updateCartTotal()
            break;

    }
} 

// adds the cart-title item  and the price to the cart  
function addItemToCart(title, price) {
    var cartRow = document.createElement('div')//creating a DOM elemnt using div
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]//parent element for item information
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')//identifying the item title 

    //for loop checking if the cartbutton is already clicked of specified item
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }

    //assigning a variable to the code of div in javascript
    var cartRowContents = `
        <div class="cart-item cart-column">
            
            <span id="cart-titleitem" class="cart-item-title">${title}</span>
        </div>
        <span id="cart-itemprice" class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1" max="5">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    //placing the variable inside cartRow div    
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

  
//updates and calculates the totalprice of items in the cart
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    //loop to find the price and quantity of each product to calculate product
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        sessionStorage.setItem("priceeachcart",priceElement);
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        sessionStorage.setItem("quantityeachcart",quantityElement);
        //replacing the dollar sign with space so number is taken to calculate the price
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value//getting the value of quantity 
        // finding the total price
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100//rounding up so calculates to a less decimal place number 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    var totalpricecart=document.getElementsByClassName('cart-total-price')[0].innerText
    //storing in sessionstorage to use in checkout page
    //sessionStorage is used as it only stores data for a few minutes and also temporary for the demo
    sessionStorage.setItem("pricecart",totalpricecart);
    var cartitemdisplay= document.querySelector('#cartform');
   sessionStorage.setItem("displaycart",cartitemdisplay.innerHTML);


}







    

    