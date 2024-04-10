var input = document.getElementById('email');
var error = document.getElementById('error');

function email() {
    var inputvalue = input.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(inputvalue === ""){
        input.classList.add('error');
        error.classList.remove('disable');
    }else if (!emailPattern.test(inputvalue)) {
        input.classList.add('error');
        error.classList.remove('disable');
    }else{
        input.classList.remove('error');
        error.classList.add('disable');
    }
    
}