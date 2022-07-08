var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function plusDivs2(n) {
    showDivs2(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("project-box2");
    if (n > x.length) {slideIndex = 1} //กรณีที่กด next ที่รูปสุดท้ายจะโชว์รูป 1
    if (n < 1) {slideIndex = x.length} //กรณีที่กด prev ที่รูปแรกจะโชว์รูปสุดท้าย
    for (i = 0; i < x.length; i++) { //ปิดรูป
        x[i].style.display = "none";    
    }
    x[slideIndex-1].style.display = "block"; //โชว์รูป
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("project-box3");
    if (n > x.length) {slideIndex = 1} //กรณีที่กด next ที่รูปสุดท้ายจะโชว์รูป 1
    if (n < 1) {slideIndex = x.length} //กรณีที่กด prev ที่รูปแรกจะโชว์รูปสุดท้าย
    for (i = 0; i < x.length; i++) { //ปิดรูป
        x[i].style.display = "none";    
    }
    x[slideIndex-1].style.display = "block"; //โชว์รูป
}