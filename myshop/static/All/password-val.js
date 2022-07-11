


function matchPassword() {
  var pw1 = document.getElementById("pass").value;
  var pw2 = document.getElementById("re_pass").value;


  if (pw1 != pw2) {
    alert("Re-type password is not same");
    return false;
  }
  else {

    return true;
  }
}
