import {foodItem} from './foodItem.js'


function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var italian=  document.getElementById('italian');
    var southIndian=  document.getElementById('southIndian');
    var special= document.getElementById('special');

    

    const biryaniData= foodItem.filter((item)=>item.category=='biryani');
    const chickenData= foodItem.filter((item)=>item.category=='chicken');
    const PaneerData= foodItem.filter((item)=>item.category=='paneer');
    const vegetableData= foodItem.filter((item)=>item.category=='vegetable');
    const italianData= foodItem.filter((item)=>item.category=='italian');
    const southData= foodItem.filter((item)=>item.category=='southIndian');
    const specialData= foodItem.filter((item)=>item.category=='special');


    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card')

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats);

        biryani.appendChild(itemCard);
        
    })

    chickenData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card')


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : RS ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats);

        chicken.appendChild(itemCard);
        
    })

    PaneerData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card')


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : RS ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;


        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats);

        paneer.appendChild(itemCard);
        
    })

    vegetableData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card')


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats);

        vegetable.appendChild(itemCard);
        
    })

    italianData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card')

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats);

        italian.appendChild(itemCard);
        
    })

    southData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card')


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats); 

        southIndian.appendChild(itemCard);
        
    })



    specialData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','item-card1')


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        var cats= document.createElement('button');
        cats.setAttribute('class', 'but  add-to-cart');
        cats.setAttribute('id', 'item.id');
        cats.innerText='Add to Cart' ;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(cats);

        special.appendChild(itemCard);
        
    }) 

}

displayItems();

/*const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(vegData); */

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

var cartData= [];

function addToCart(){
    console.log(this.parentElement.firstElementChild.nextSibling);
    var itemToAdd= this.parentElement.firstElementChild.nextSibling.innerText ;

    var itemObj= foodItem.find(element=>element.name==itemToAdd);
    console.log(itemObj);

    var index= cartData.indexOf(itemObj);
    if(index === -1){
        document.getElementById(itemObj.id)/*.classList.add('toggle-heart')*/;
        cartData= [...cartData,itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert(" Already Added ! Please check to cart.");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
   
    totalAmount();
    cartItems(); 
}

function cartItems(){
    var tableBody=  document.getElementById('tbody');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })

    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log (itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

/*var flag= false; */

var currPrice= 0; 
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id)/*.classList.remove('toggle-heart')*/;
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
    
        if(cartData.length < 1 && flag){
            document.getElementById('food-item').classList.toggle('food-item');
            document.getElementById('category-list').classList.toggle('food-item');
           
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
        
            alert("Currently no item in cart!");
            console.log(flag)
        
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('cart-plus1').addEventListener('click',cartToggle);


var flag= false; 
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-item').classList.toggle('food-item');
        document.getElementById('category-list').classList.toggle('food-item');
      
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag);
    }
    else{
        alert("Currently no item in cart!");
    }
}

document.getElementById('add-address').addEventListener('click',addAddress);


function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        document.getElementById('add-address').innerText= ' Your Address';
        alert("Address not added");
    }
}

document.getElementById('my-address').addEventListener('click',myAddress);

function myAddress(){
    alert( "Food Grab, Block Street, Delhi ");
}

document.getElementById('my-help').addEventListener('click',myHelp);

function myHelp(){
    alert( "For any more detail, Please Contact us Mob : 7068XXXXXX" );
}

document.getElementById('my-about').addEventListener('click',myAbout);

function myAbout(){
    alert( "Food Grab is Estab. in 2010 And it is run by Food Techno ltd."  );
}

document.getElementById('my-services').addEventListener('click',myServices);

function myServices(){
    alert( "WE Provide both Online and Ofline sevices." );
}

document.getElementById('my-feedback').addEventListener('click',myFeedback);

function myFeedback(){
   prompt('Please Enter you Feedback');
}




const wrapper= document.querySelector('.wrapper');
 const btnPopup= document.querySelector('.btnlogin-popup');
const iconClose= document.querySelector('.icon-close');

 btnPopup.addEventListener('click', (e)=> {
    wrapper.classList.add('activep');
}); 


 iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('activep');
}); 


const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');

});

const readMoreBtn1 = document.querySelector('.read-more-btn1');
const text1 = document.querySelector('.text1');

readMoreBtn1.addEventListener('click',(e)=>{
  text1.classList.toggle('show-more1');

});

