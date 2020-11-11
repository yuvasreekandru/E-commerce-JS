                          
let addCartButtons = document.getElementsByClassName('add-cart');

for(let i=0; i< addCartButtons.length; i++){
  addCartButtons[i].addEventListener('click',addToCartClicked)

}
let quantityInputs = document.getElementsByClassName('quantity');
for(let i=0; i<quantityInputs.length; i++){
   quantityInputs[i].addEventListener('change',quantityChanged)

}
// let quantityInput = document.getElementsByClassName('quantity');
// for(let i=0; i<quantityInput.length; i++){
//     quantityInput[i].addEventListener('change',calculateTotal)
 
//  }
let buyBtn = document.getElementsByClassName('buybtn');
buyBtn[0].addEventListener('click', buybtnClicked)

// function calculateTotal(){
//     console.log(quantityInput[i].value)
// }
function buybtnClicked(){
    alert('Thank You for Purchase')
    let productItems = document.getElementsByClassName('product')[0]
    while(productItems.hasChildNodes()){
        productItems.removeChild(productItems.firstChild)
    }
    updateCartTotal()
   
}

function addToCartClicked(event){
let button = event.target;
let selectedItem = button.parentElement;
let title = selectedItem.getElementsByClassName('title')[0].innerText;
let price = selectedItem.getElementsByClassName('price')[0].innerText;
let img = selectedItem.getElementsByClassName('img-fluid')[0].src;
addItemToCart(img, title, price);
updateCartTotal()

}
function addItemToCart(img, title, price){
let productRow = document.createElement('div');
productRow.classList.add('product-row');
let productItems = document.getElementsByClassName('product')[0]
let productItemNames = productItems.getElementsByClassName('name')
for(i=0; i<productItemNames.length; i++){
    if(productItemNames[i].innerText == title){
    alert('This item is already added to the cart')
    return
    }
}

let productRowContents =`<div class="product-details">
                           <img src="${img}" class="img" >
                           <p class="name">${title}</p>
                           <p class="p-price">${price}</p>
                           <input class="quantity" type="number" value="1">
                           <button class="removebtn" onclick="removeCartItem(event)">Remove</button>
                         </div>`;

productRow.innerHTML = productRowContents;
productItems.append(productRow)
productRow.getElementsByClassName('quantity')[0].addEventListener('change',quantityChanged)

}

function removeCartItem(event){
let removeButton = event.target;
removeButton.parentElement.remove();
updateCartTotal()

}
function quantityChanged(event){
    let input =event.target;
       if(isNaN(input.value) || input.value <= 0){
           input.value = 1
    
    }
    updateCartTotal()
}
function updateCartTotal(){
 let product = document.getElementsByClassName('product')[0]
 
 let productItems = product.getElementsByClassName('product-details')
let total = 0
 for(let i=0; i<productItems.length; i++){
let productItem = productItems[i];
let priceElement = productItem.getElementsByClassName('p-price')[0];
let quantityElement = productItem.getElementsByClassName('quantity')[0];
let price = parseFloat(priceElement.innerText.replace('$',''))
let quantity = quantityElement.value;
total = total + (price * quantity);

}
total = Math.round(total * 100)/100;
document.getElementsByClassName('total-amount')[0].innerText = '$'+ total

}



