// ====================== Function For Edit Quantity Of Product ===========================
function editQty() {
  document.getElementById('qty').disabled = false;
  document.getElementById('qty').setAttribute("contenteditable", "true");
  document.getElementById("qty").focus();
}


// ===================================================================================

// ========================== Payment Methods Events ====================================
function PaymentViaPaytm() {
  if (document.getElementById('paytmBtn').checked) {
    document.getElementById('paytmDiv').style.display = 'block';
    document.getElementById("mobNum").focus();
    document.getElementById('mobNum').value = null;
    document.getElementById('cCardDiv').style.display = 'none';
    document.getElementById('cDetails').value = null;
    document.getElementById('ccvv').value = null;
    document.getElementById('dCardDiv').style.display = 'none';
    document.getElementById('dDetails').value = null;
    document.getElementById('dcvv').value = null;
  }
  else if (document.getElementById('codBtn').checked) {
    document.getElementById('paytmDiv').style.display = 'none';
    document.getElementById('otpDiv').style.display = 'none';
    document.getElementById('mobNum').value = null;
    document.getElementById('cCardDiv').style.display = 'none';
    document.getElementById('cDetails').value = null;
    document.getElementById('ccvv').value = null;
    document.getElementById('dCardDiv').style.display = 'none';
    document.getElementById('dDetails').value = null;
    document.getElementById('dcvv').value = null;
  }
  else {
    document.getElementById('paytmDiv').style.display = 'none';
  }
}
// ====================================================================================

// =================================== Number Validation ==============================================
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
// ===================================================================================

// =================================== OTP Portion ===================================
function isEntered() {
  var mNum = document.getElementById("mobNum").value;
  var x = mNum.charAt(0);

  if (x == "9" || x == "8" || x == "7" || x == "6" && mNum.length == 10) {
    document.getElementById('otpDiv').style.display = 'block';
    return true;
  }

  else {
    alert("You Are Entered Something Wrong!!");
    document.getElementById('otpDiv').style.display = 'none';
    return false;
  }
}


// =============================== Credit Card==================================

function PaymentViaCCard() {
  if (document.getElementById('cCardBtn').checked) {
    document.getElementById('cCardDiv').style.display = 'block';
    document.getElementById("cDetails").focus();
    document.getElementById('paytmDiv').style.display = 'none';
    document.getElementById('otpDiv').style.display = 'none';
    document.getElementById('mobNum').value = null;
    document.getElementById('cDetails').value = null;
    document.getElementById('ccvv').value = null;
    document.getElementById('dCardDiv').style.display = 'none';
    document.getElementById('dDetails').value = null;
    document.getElementById('dcvv').value = null;
  }
}

// ==============================================================================

// =============================== Debit Card==================================

function PaymentViaDCard() {
  if (document.getElementById('dCardBtn').checked) {
    document.getElementById('dCardDiv').style.display = 'block';
    document.getElementById("dDetails").focus();
    document.getElementById('paytmDiv').style.display = 'none';
    document.getElementById('otpDiv').style.display = 'none';
    document.getElementById('mobNum').value = null;
    document.getElementById('dDetails').value = null;
    document.getElementById('dcvv').value = null;
    document.getElementById('cCardDiv').style.display = 'none';
    document.getElementById('cDetails').value = null;
    document.getElementById('ccvv').value = null;
  }
}

// ==============================================================================


// ============================= Edit Customer Name ==============================

function editAdd() {
  document.getElementById('pincode').disabled = false;
  document.getElementById('pincode').setAttribute("contenteditable", "true");
  document.getElementById("pincode").focus();

  document.getElementById('flat').disabled = false;
  document.getElementById('flat').setAttribute("contenteditable", "true");

  document.getElementById('area').disabled = false;
  document.getElementById('area').setAttribute("contenteditable", "true");

  document.getElementById('landmark').disabled = false;
  document.getElementById('landmark').setAttribute("contenteditable", "true");

  document.getElementById('city').disabled = false;
  document.getElementById('city').setAttribute("contenteditable", "true");

  document.getElementById('state').disabled = false;
  document.getElementById('state').setAttribute("contenteditable", "true");

}

// =======================Edit Delivery Address ==============================================

function editName() {
  document.getElementById('cusName').disabled = false;
  document.getElementById('cusName').setAttribute("contenteditable", "true");
  document.getElementById("cusName").focus();
  // document.getElementById("chngBtn").style.display = 'none';

  document.getElementById('cusMob').disabled = false;
  document.getElementById('cusMob').setAttribute("contenteditable", "true");
  // document.getElementById('cusMob').style.display = 'none';
}


// =================================== Mobile Number Validation ===================================

function isEnteredMob() {
  var mNum = document.getElementById("cusMob").value;
  var x = mNum.charAt(0);

  if (x == "9" || x == "8" || x == "7" || x == "6" && mNum.length == 10) {
    return true;
  }


  else if (mNum == "") {
    return false;
  }
  else {
    alert("You Are Entered Something Wrong!!");
    return false;
  }
  // document.getElementById("cusMob").value = ""


}
//==================================================================================== 


// ========================== TRY & BUY Payment Methods Events ====================================
function PaymentViatPaytm() {
  if (document.getElementById('tpaytmBtn').checked) {
    document.getElementById('tpaytmDiv').style.display = 'block';
    document.getElementById("tmobNum").focus();
    document.getElementById('tmobNum').value = null;
    document.getElementById('tcCardDiv').style.display = 'none';
    document.getElementById('tcDetails').value = null;
    document.getElementById('tccvv').value = null;
    document.getElementById('tdCardDiv').style.display = 'none';
    document.getElementById('tdDetails').value = null;
    document.getElementById('tdcvv').value = null;
  }
  else if (document.getElementById('tcodBtn').checked) {
    document.getElementById('tpaytmDiv').style.display = 'none';
    document.getElementById('totpDiv').style.display = 'none';
    document.getElementById('tmobNum').value = null;
    document.getElementById('tcCardDiv').style.display = 'none';
    document.getElementById('tcDetails').value = null;
    document.getElementById('tccvv').value = null;
    document.getElementById('tdCardDiv').style.display = 'none';
    document.getElementById('tdDetails').value = null;
    document.getElementById('tdcvv').value = null;
  }
  else {
    document.getElementById('tpaytmDiv').style.display = 'none';
  }
}
// ====================================================================================

// =============================== TRY & BUY Credit Card==================================

function PaymentViatCCard() {
  if (document.getElementById('tcCardBtn').checked) {
    document.getElementById('tcCardDiv').style.display = 'block';
    document.getElementById("tcDetails").focus();
    document.getElementById('tpaytmDiv').style.display = 'none';
    document.getElementById('totpDiv').style.display = 'none';
    document.getElementById('tmobNum').value = null;
    document.getElementById('tcDetails').value = null;
    document.getElementById('tccvv').value = null;
    document.getElementById('tdCardDiv').style.display = 'none';
    document.getElementById('tdDetails').value = null;
    document.getElementById('tdcvv').value = null;
  }
}

// ==============================================================================

// =============================== TRY & BUY Debit Card==================================

function PaymentViatDCard() {
  if (document.getElementById('tdCardBtn').checked) {
    document.getElementById('tdCardDiv').style.display = 'block';
    document.getElementById("tdDetails").focus();
    document.getElementById('tpaytmDiv').style.display = 'none';
    document.getElementById('totpDiv').style.display = 'none';
    document.getElementById('tmobNum').value = null;
    document.getElementById('tdDetails').value = null;
    document.getElementById('tdcvv').value = null;
    document.getElementById('tcCardDiv').style.display = 'none';
    document.getElementById('tcDetails').value = null;
    document.getElementById('tccvv').value = null;
  }
}

// ==============================================================================