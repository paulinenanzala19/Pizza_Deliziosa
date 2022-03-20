function Pizza(size,crust,number,toppings){
    this.size=size;
    this.crust=crust;
    this.number=number;
    this.toppings=toppings;
   
}
 
Pizza.prototype.getTotalPrice=function(){
    let sizePrice;
    if(this.size==="large"){
        sizePrice=1200
    }else if(this.size==="medium"){
        sizePrice=1000
    }else{
        sizePrice=800
    }

   let crustPrice;
   if(this.crust==="crispy"){
       crustPrice=500
   } else if(this.crust==="stuffed"){
       crustPrice=400
   }else{
       crustPrice=300
   }
   let total=(sizePrice + crustPrice)*this.number
    
   return total
};




 
$("button#checkout").click(function(e){
    e.preventDefault()
    let userSize=$("#select option:selected").val()
    let userCrust=$("#crust option:selected").val()
    let userNo=$(".pizza").val()
    let userToppings=$("input.toppings").val()

    var pizza1=new Pizza(userSize,userCrust,userNo,userToppings)

    if(userNo===""){
        alert("please fill this field")
    }
    else{
        $(".result").append("your order is "+ userSize + " : " + pizza1.getTotalPrice())
    }
    // console.log(pizza1.getTotalPrice())
    // $(".result").append("your order is "+ userSize + " : " + pizza1.getTotalPrice())

    $("button#delivery").show()
    
})
$(".delivery").hide()

$("button#delivery").click(function(){
    $(".delivery").show()
   
})

 $("#btn").click(function(){
     let userName=$("input#name").val()
     let userNumber=$("input#number").val()
     let userLocation=$("input#location").val()
     
     alert(`Dear ${userName}, ${userNumber} your order will be delivered at ${userLocation}`)
 })