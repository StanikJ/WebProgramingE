export class Product{

    constructor(type,priceFor, price, count){
        this.type = type;
        this.priceFor=priceFor;
        this.price=price;
        this.count=count;
        this.productContainer =null;
    }

    finalPrice(){
        return this.price*this.count;
    }

    createProduct(host){
        const red= document.createElement("tr");
        host.appendChild(red);

        this.productContainer = red;
        let el=document.createElement("td");
        el.innerHTML=this.type;
        red.appendChild(el);

        el = document.createElement("td");
        el.innerHTML=this.priceFor;
        red.appendChild(el);

        el = document.createElement("td");
        el.innerHTML = this.price;
        red.appendChild(el);

        el = document.createElement("td");
        el.innerHTML = this.count;
        el.className="count";
        red.appendChild(el);

        el = document.createElement("td");
        red.appendChild(el);

        let btnn = document.createElement("button");
        btnn.innerHTML="+";
        btnn.onclick = (ev)=>{
            this.plusCount("+");
        }
        el.appendChild(btnn);


        btnn = document.createElement("button");
        btnn.innerHTML="-";
        btnn.onclick = (ev)=>{
            this.plusCount("-");
        }
        el.appendChild(btnn);


        el = document.createElement("td");
        el.innerHTML = this.finalPrice();
        el.className ="finalPrice";
        red.appendChild(el);
    }

    plusCount(sign){

        console.log(sign);
        if(sign==="+") {
            this.count++;
        }
        else if(sign=="-" && this.count==0){
            this.count=0;
        }
        else
            this.count--;

        let field = this.productContainer.querySelector(".count");
        field.innerHTML=this.count;

        field = this.productContainer.querySelector(".finalPrice");
        field.innerHTML=this.finalPrice();

    }

}