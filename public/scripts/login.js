function validateForm() {
    var a = document.forms["Form"]["emailInput"].value;
    var b = document.forms["Form"]["passwordInput"].value;
    //var c = document.forms["Form"]["answer_c"].value;
    //var d = document.forms["Form"]["answer_d"].value;
    if ((a == null || a == "") && (b == null || b == "")) {
      alert("Please Fill In All Required Fields");
      return false;
    }
  }