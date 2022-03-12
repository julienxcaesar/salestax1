"use strict";
//declarions
const $ = selector => document.querySelector(selector);
const errMsg1 = sum => `${sum} must be a value greater than 0 and less than 10000.`;
const errMsg2 = sum => `${sum} must be a value greater than 0 and less than 12.`;

//focus and select function
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
//starting point
window.onload = function() {
    document.getElementById("subtotal").focus();
  };


// main function get values from user
function processEntries() {
    const sub_total = parseFloat($("#subtotal").value);
    const tax_rate = parseFloat($("#tax_rate").value);

// validate user entries
    if (isNaN(sub_total)) {
        alert(errMsg1("Subtotal: Not a Number, "));
        focusAndSelect("#subtotal");
    }
    else if (sub_total <= 0 || sub_total > 10000) {
        alert(errMsg1("Subtotal: "));
        focusAndSelect("#subtotal");
    }
    else if (isNaN(tax_rate)) {
        alert(errMsg2("Tax rate: Not a number "));
        focusAndSelect("#tax_rate");
    }
    else if (tax_rate < 0 || tax_rate > 12) {
        alert(errMsg2("Tax rate: "));
        focusAndSelect("#tax_rate");
    }
    else {
        const sales_tax = sub_total * (tax_rate / 100);
        const total = sales_tax + sub_total;
        $("#sales_tax").value = (sales_tax).toFixed(2);
        $("#total").value = (total).toFixed(2);
    }

} //clear functions
const clear_sub = () => {
    $("#subtotal").value = "";
    $("#subtotal").focus();
}
const clear_tax = () => {
    $("#tax_rate").value = "";
    $("#total").focus();
}
const clear_all = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    //calculate function
    $("#calculate").addEventListener("click", processEntries);
    $("#subtotal").focus();
   
    //clear function
    $("#clear").addEventListener("click", clear_all);
    $("#subtotal").addEventListener("dblclick", clear_sub);
    $("#tax_rate").addEventListener("dblclick", clear_tax);
});