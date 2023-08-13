function Increment(price,item,btn){
  var count = document.getElementById(btn);
 
  if(count.value >=5 ){
    count.value=5;
    alert("Only 5 product allow");
  }else{
    count.value++ ;
    var price = document.getElementById(price);
    var newPrice = parseInt(price.innerHTML);

    var item = document.getElementById(item);
    var NewItems = parseInt(item.innerHTML);
    
    var result = newPrice+NewItems ;
    item.innerHTML =result;

    // for sub total 
   
    var subTotal = document.getElementById('subTotal');
    var NewsubTotal = parseInt(subTotal.innerHTML);
   var MySubtotal =  newPrice+NewsubTotal;
   document.getElementById('subTotal').innerHTML =MySubtotal;

   /// My Total 
   var delivery = document.getElementById("delivery");
   var newDelivery = parseInt(delivery.innerHTML);
  var MyTotal =  MySubtotal + newDelivery ;
  document.getElementById("AvgTotal").innerHTML =MyTotal;
  }

}

function Decrement(price,item,btn){
    var count = document.getElementById(btn);
 
  if(count.value ==0 ){
    count.value=0;
    alert("Only 1 product allow");
  }else{
    count.value-- ;

    var item = document.getElementById(item);
    var NewItems = parseInt(item.innerHTML);
   
    var price = document.getElementById(price);
    var myprice = parseInt(price.innerHTML);

    var multi =   NewItems - myprice;
    item.innerHTML = multi;


    var subTotal = document.getElementById('subTotal');
    var NewsubTotal = parseInt(subTotal.innerHTML);
   var MySubtotal =  NewsubTotal-myprice;
   document.getElementById('subTotal').innerHTML =MySubtotal;


     /// My Total 
     var delivery = document.getElementById("delivery");
     var newDelivery = parseInt(delivery.innerHTML);
    var MyTotal =  MySubtotal - newDelivery ;
    document.getElementById("AvgTotal").innerHTML =MyTotal;


    if(MySubtotal==0){
        document.getElementById("AvgTotal").innerHTML=0;
    }

  }
}


//Image zoom 
var Zoom = {
    width:400,
    height:300,
    zoomWidth: 500,
    offset: {vertical: 0, horizontal: 40},
    scale:1.5
}
var imgL = document.getElementsByClassName("card-img").length;
console.log(imgL)
for(var i=0;i<=imgL;i++){
    new ImageZoom(document.getElementsByClassName("card-img")[i],Zoom);
}

