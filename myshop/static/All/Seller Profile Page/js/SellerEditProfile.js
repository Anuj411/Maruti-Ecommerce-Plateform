function request(){
    document.getElementById("time").style.visibility="visible";
    var time = 24 * 60 *60,
    display = document.querySelector('#time');
  startTimer(time, display,function() { alert('done'); });
    document.getElementById("updateRequest").style.visibility="hidden";
}

function startTimer(duration, display,alrt) {
  var timer = duration,hours,
    minutes, seconds;

  var myInterval = setInterval(function() {
    hours = parseInt((timer /3600)%24, 10)
    minutes = parseInt((timer / 60)%60, 10)
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours +":"+ minutes +":"+ seconds;

    if (--timer < 0) {
      timer = duration;
      
      if(alrt){
        document.getElementById("businnesbtn").style.visibility = "visible";
        document.getElementById("time").style.visibility = "hidden";
        document.getElementById("gst").readOnly=false;
        document.getElementById("acNo").readOnly=false;
        document.getElementById("acName").readOnly=false;
        document.getElementById("ifsc").readOnly=false;
      }

      // clear the interal
      clearInterval(myInterval);
    }
  }, 1000);
}


function personalEdit(){
    document.getElementById("imgdiv").style.visibility='visible';
  // document.getElementById("Fname").removeAttr(readOnly);
    // document.getElementById("editId").readOnly=false;
    document.getElementById("Fname").readOnly=false;
    document.getElementById("Lname").readOnly=false;
    document.getElementById("email").readOnly=false;
    document.getElementById("phone").readOnly=false;
    document.getElementById("personalbtn").style.visibility ='visible';
}

function personalSave(){
  document.getElementById("imgdiv").style.visibility='hidden';
    // document.getElementById("editId").readOnly=true;
    document.getElementById("Fname").readOnly=true;
    document.getElementById("Lname").readOnly=true;
    document.getElementById("email").readOnly=true;
    document.getElementById("phone").readOnly=true;
    document.getElementById("personalbtn").style.visibility ='hidden';
}

function businessSave(){
    document.getElementById("gst").readOnly=true;
    document.getElementById("acNo").readOnly=true;
    document.getElementById("acName").readOnly=true;
    document.getElementById("ifsc").readOnly=true;
    document.getElementById("businnesbtn").style.visibility = "hidden";
}

function hide(){
    // document.write("hello");
    document.getElementById("edit").style.visibility = 'hidden';
}

function show(){
    // document.write("hello");
    document.getElementById("edit").style.visibility = 'visible';
}