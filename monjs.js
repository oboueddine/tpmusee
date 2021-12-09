var nbTicket=3;

function maFonction(){
var ageAdulte = 15;
var ageEnfant = 8;
var tarifAdulte = 12;
var tarifEnfant = 5;

var ticketPrice = '';


if(nbTicket>0){
    var reponse = document.getElementById("age").value;

    if(reponse >= ageAdulte ){

        //ticketPrice= `le tarif et de : ${tarifAdulte} €`;

        ticketPrice= 'le tarif et de : '+tarifAdulte+' €';


    }else if(reponse < ageAdulte && reponse >= ageEnfant ){

        ticketPrice= `le tarif et de : ${tarifEnfant} €`;

    }else{
        ticketPrice= 'gratos';
    }

    document.getElementById("msg").innerHTML+="<br>"+ticketPrice;
    nbTicket--;//decremente nbticket
    document.getElementById("msg2").innerHTML=nbTicket;
}else{
    document.getElementById("msg").innerHTML+="<br>ticket épuisés!!"
//alert("ticket épuisés!!");
}
}