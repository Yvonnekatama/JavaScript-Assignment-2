var fruit= {
    name:"Orange",
    price:30,
    quantity:2,
    total:function(price,quantity){
     cost=price*quantity
     return this.total=cost
    } 
}
fruit.total(30,2)
console.log(fruit.quantity+" " + fruit.name + " for KES "+ cost.toFixed(2))

/*var pen={ //object
    price:25,
    color:"Black",
    type:"Bic",
    properties:function(){ //method
     return " Yvonne bought a " + this.type + " "+ this.color + "pen" + "worth" + this.price + "Ksh"
    }//function
}
pen.properties()*/

/*let phone={//object
    brand:"oppo",
    color:"siver blue",
    camera:"17mpx",
    storage:"132GB",
    About:function(){//method
        return this.brand + " " + this.color + " " + this.camera + " " + this.storage
    }//function
}
console .log(phone.About())*/