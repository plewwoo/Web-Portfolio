window.onload = pageLoad;

function pageLoad(){
	let form = document.getElementById('myForm');
    form.onsubmit = CheckPassword;
}

function CheckPassword(){
    let a = document.getElementById('password').value;
    let b = document.getElementById('re-password').value;

    if(a != b || a == null || b == null){
        alert('Invalid Password')
        return false;
    }

    else{
        alert('Success')
    }
}