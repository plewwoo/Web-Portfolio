var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);
showDivs3(slideIndex);
showDivs4(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function plusDivs2(n) {
    showDivs2(slideIndex += n);
}
function plusDivs3(n) {
    showDivs3(slideIndex += n);
}
function plusDivs4(n) {
    showDivs4(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("work-box");
    if (n > x.length) {slideIndex = 1} //กรณีที่กด next ที่รูปสุดท้ายจะโชว์รูป 1
    if (n < 1) {slideIndex = x.length} //กรณีที่กด prev ที่รูปแรกจะโชว์รูปสุดท้าย
    for (i = 0; i < x.length; i++) { //ปิดรูป
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; //โชว์รูป
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("work-box1");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("work-box2");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showDivs4(n) {
    var i;
    var x = document.getElementsByClassName("work-box3");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}