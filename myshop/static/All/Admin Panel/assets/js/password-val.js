

  
  function matchPassword() {  
    var pw1 = document.getElementById("pass").value;  
    var pw2 = document.getElementById("confirmpass").value;
    
    
    if(pw1 != pw2)  
    {   
      document.getElementById("validpass").innerHTML = "Passwords doesn't match";
      return false;
    }
    else
    {
      document.getElementById("validpass").innerHTML = "";
      return true;
    }
  }
  