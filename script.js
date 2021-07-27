 $(document).ready(function(){
 
  $('#inputname').keyup(function(){
    namevalidation();
  });

  $('#inputemail').keyup(function(){
    emailValidation();
  })

  $('#inputmobailnumber').keyup(function(){
    mobileValidation();
})

  $('#inputtext').keyup(function(){
  messageValidation();
})







})






  // this is my function


function namevalidation(){
  
  var name=$('#inputname').val();
  var letters=/^[-a-zA-Z-()]+(\s+[-a-zA-z-()]+)*$/;
  if(name==""){
    $('#namepara').html("filed is required")
    return false;
  }
  else if(name.match(letters)){
    $('#namepara').html("")
    return true;
  }
  
  else{
    $('#namepara').html("Don't use Space at last letter")
    return false;
  }

}

function emailValidation(){
  var email=$('#inputemail').val();
  var letters= /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if(email==""){
      $('#emailpara').html("Filed is required")
      return false;
  }else if(email==" "){
      $('#emailpara').html("Don't use Space at first letter");
      return false;
  }
  else if(email.match(letters)){
      $('#emailpara').html("")
      return true;
  }else{
      $('#emailpara').html("Enter valid E-mail")
      return false;
  }
}

function mobileValidation(){
  var mobile=$('#inputmobailnumber').val();
  var letters=/^\d{10}$/;
  if(mobile==""){
      $('#mobilepara').html("Filed is required")
      return false;
  }else if(mobile.match(letters)){
      $('#mobilepara').html("")
      return true;
  }else{
      $('#mobilepara').html("Enter valid mobile number")
      return false;
  }

}

function messageValidation(){
 
  var message=$('#inputtext').val();
  if(message==""){
      $('#messagepara').html("Filed is required")
      return false;
  }else if(message==" "){
      $('#messagepara').html("Don't use Space at first letter")
      return false;

  }else if(message.length<=15){
      $('#messagepara').html("Enter minimum 15 character")
      return false;
  }else if(message.length>15){
      $('#messagepara').html("")
      return true;
  }else{
      $('#messagepara').html("")
      return true;
  }
}
$('.navbar-collapse').click(function(){
  $(".navbar-collapse").hide('hide');
});
$('.navbar-toggler').click(function(){
  $(".navbar-collapse").show('hide');
});