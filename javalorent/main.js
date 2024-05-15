const btn = document.querySelectorAll('.product-items .buy-now')

btn.forEach(function(a,indext){

   a.addEventListener("click",function(event){
           var btnItem= event.target
           var product = btnItem.parentElement
           var product = btnItem.closest(".product-items"); 
        var productImg = product.querySelector("img").src;
        console.log(productImg)
        var productName = product.querySelector(".product-infor .product-cat").innerText;
        console.log(productName)
        var prodcutPrice = product.querySelector(".product-price").innerText
        console.log(prodcutPrice)
        addcart(prodcutPrice,productName,productImg)
   });
});   
function addcart(prodcutPrice,productName,productImg){
        var addtr= document.createElement("itemcart");
        //Bước 2  làm cho giỏ hàng không bị chùng
   var carItem = document.querySelectorAll("itemcart");
    for(var i=0;i<carItem.length;i++){
    var prodcutTa= document.querySelectorAll(".namecart span")
    if(prodcutTa[i].innerHTML == productName){
    alert("Sản phẩm của bạn đã có trong giỏ hàng")
     return;
               }
    }
//Cái này là đầu tiên
        var trcontent = '<div class="itemcart"><div class="imgcart"><img src="'+productImg+'" alt=""></div><div class="namecart"><span>'+productName+'</span></div><div class="pricecart">'+prodcutPrice+'</div><div class="quantity"> <input style="width:30px ;outline: none;" type="number" value="1" min="0"><span class="deleteCarthtml"  style="margin-left:6px;cursor: pointer;">Xoá</span></div></div></div>'
        addtr.innerHTML=trcontent;
        var cartable= document.querySelector(".listcart")
        cartable.append(addtr)
        cartotal();


}

//<li><div class="product-items"><div class="product-top"><a href="" class="product-thumb"><img src="/img/pl4.png" alt=""></a><!-- mua ngay --><div class="product-infor"><a href="#" class="product-cat">Trousers</a><a href="" class="product-title">Quần Polo Nam</a><div class="product-price">399.000đ</div> </div> </div></li>'
//<div class="itemcart"><div class="imgcart"><img src="img/pl1.png" alt=""></div><div class="namecart">Tên</div><div class="pricecart">310.000đ</div><div class="quantity"><span class="minus"><</span><span>1</span><span class="plus">></span></div></div></div>


//---------------------------------TotalPrice--------------------------------------------------
function cartotal(){

   var carItem = document.querySelectorAll("itemcart");
   var totalC= 0
   deleteCart();
   //console.log(carItem);
  for(var i=0;i<carItem.length;i++){
   var inputValue = carItem[i].querySelector("input").value;
//   console.log(inputValue);
   var priceproduct = carItem[i].querySelector(".pricecart").innerText;
       var numericPrice = parseFloat(priceproduct.replace(/[^\d.]/g, ''));

//   console.log(numericPrice);
    var tongcong1 = inputValue * numericPrice*1000;

//   console.log(tongcong2);
   totalC=(totalC+tongcong1);
//      console.log(totalC);
//Cái này dùng để đôi .  ví dụ 320000 thành 320.000
//    var tongcong2= tongcong1.toLocaleString('de-DE')
//totalD=totalC.toLocaleString('de-DE')
  }
  var tongtienhienthi= document.querySelector(".price-total span")
//doi hien thi
  tongtienhienthi.innerHTML=totalC.toLocaleString('de-DE');
inputchangge();
  //console.log(tongtienhienthi)


//---------------------------------------delete cart-----------------------------------------------
function deleteCart(){
   var carItem = document.querySelectorAll("itemcart");

    for(var i=0;i<carItem.length;i++){
    var prodcutT= document.querySelectorAll(".quantity span")

    prodcutT[i].addEventListener("click", function(event) {
    var cartdelete= event.target; //xac dinh phan tử
    var cartitemR = cartdelete.parentElement.parentElement.parentElement;
    console.log(cartitemR);
    cartitemR.remove()
    cartotal()
    //console.log(cartitemR)

    });

      }

    }
}
function inputchangge(){
 var carItem = document.querySelectorAll("itemcart");

    for(var i=0;i<carItem.length;i++){
    var invalue= carItem[i].querySelector("input")
    invalue.addEventListener("change", function(event) {
        cartotal();
    });




      }

    }

























































