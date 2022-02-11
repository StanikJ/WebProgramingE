export class Offer{
    constructor(){
        this.offers=[];
        this.container=null;
    }

    addProduct(pro){
        this.offers.push(pro);
    }

    create(host){
        if(!host)
        throw new Error("Host undefined!");

        const tabela = document.createElement("table");
        this.container=tabela;
        host.appendChild(tabela);

        this.createHeader(tabela);
        this.offers.forEach(el=>{
            el.createProduct(tabela);
        })
    }

    createHeader(host){

        const red=  document.createElement("tr");
        host.appendChild(red);

        let e= document.createElement("th");
        e.innerHTML="Type";
        red.appendChild(e);

        
        e= document.createElement("th");
        e.innerHTML="Price";
        red.appendChild(e);

        e= document.createElement("th");
        e.innerHTML="Price(€)";
        red.appendChild(e);

        e= document.createElement("th");
        e.innerHTML="How many";
        red.appendChild(e);

        e= document.createElement("th");
        red.appendChild(e);

        e= document.createElement("th");
        e.innerHTML="Final price";
        red.appendChild(e);

    }
}