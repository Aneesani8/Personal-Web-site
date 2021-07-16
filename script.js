function validation1(){
    
    var name=document.getElementById("inputname").value
    var namepara=document.getElementById("namepara");
    var letters = /^[A-Za-z\s]*$/;

    if(name==""){
        namepara.innerHTML="Filed is Required"
    }
    else if(name.match(letters)){
        namepara.innerHTML=""
        return true;
    }
    else{
        namepara.innerHTML="Use only Character"
        return false;
    }   
}
function validation2(){
    var email=document.getElementById("inputemail").value
    var emailpara=document.getElementById("emailpara");
    var letters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if(email==""){
        emailpara.innerHTML="Fieled is Required"
    }
    else if(email.match(letters)){
        emailpara.innerHTML=""
        return true;
    }
    else{
        emailpara.innerHTML="Enter a valid E-mail"
        return false;
    }   
}
function validation3(){
    var number=document.getElementById("inputmobailnumber").value
    var numberpara=document.getElementById("numberpara");
    var letters =  /^\d{10}$/;


    if(number==""){
        numberpara.innerHTML="Fieled is Required"
    }
    else if(number.match(letters)){
        numberpara.innerHTML=""
        return true;
    }
    else{
        numberpara.innerHTML="Enter a valid mobile no"
        return false;
    }   
}
function validation4(){
    var text=document.getElementById("inputtext").value
    var textpara=document.getElementById("textpara");
    

    if(text==""){
        textpara.innerHTML="Field is Required"
    }
    else if(text.length<30){
        textpara.innerHTML="Enter minimum 30 character"
        return false;
    }
    else{
        textpara.innerHTML=""
        return true;
    }   
}
