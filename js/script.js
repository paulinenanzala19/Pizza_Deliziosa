function Pizza(type,size,crust,number,toppings){
    this.type=type
    this.size=size;
    this.crust=crust;
    this.number=number;
    this.toppings=toppings;
   
}
 
Pizza.prototype.getTotalPrice=function(){
    let sizePrice;
    if(this.size=="0"){
        sizePrice=0;
    }else if(this.size=="large"){
        sizePrice=1200;
    }else if(this.size=="medium"){
        sizePrice=1000;
    }else if(this.size=="small"){
        sizePrice=800;
    }else{
        console.log("error")
    };

   let crustPrice;
   if(this.crust=="crispy"){
       crustPrice=500
   } else if(this.crust=="stuffed"){
       crustPrice=400
   }else{
       crustPrice=300
   }

   let userToppings=[]

   $.each($("input [name='toppings']:checked"),function(){
       userToppings.push($(this).val());
       
   });
   console.log(userToppings.join(","));

   let toppingsPrice= userToppings.length*100;
   console.log(toppingsPrice)

   let total=(sizePrice + crustPrice + toppingsPrice)*this.number
    
   return total
};




 
$("button#checkout").click(function(e){
    e.preventDefault()
    let userType=$("#type option:selected").val()
    let userSize=$("#select option:selected").val()
    let userCrust=$("#crust option:selected").val()
    let userNo=$(".pizza").val()
    let userToppings=[]

    $.each($("input [name='toppings']:checked"),function(){
        userToppings.push($(this).val());
    });

    var pizza1=new Pizza(userType,userSize,userCrust,userNo,userToppings)

    if(userNo===""){
        alert("please fill this field")
    }
    else{
        $(".result").append("your order is "+ userType + "," + userSize +"," + userCrust + " : " + pizza1.getTotalPrice())
    }
    console.log(pizza1.getTotalPrice())
    // $(".result").append("your order is "+ userSize + " : " + pizza1.getTotalPrice())

    $("button#delivery").show()
   
    
})
$(".delivery").hide()

$("button#delivery").click(function(){
    $(".delivery").show()
    $("p#desc").show()
   
})

 $("#btn").click(function(){
     let userName=$("input#name").val()
     let userNumber=$("input#number").val()
     let userLocation=$("input#location").val()
     
     alert(`Dear ${userName}, ${userNumber} your order will be delivered at ${userLocation}`)
 })