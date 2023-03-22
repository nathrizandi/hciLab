const form = document.getElementById('login-form');
const emailInput1 = document.getElementById('email1');
const passwordInput1 = document.getElementById('password1');

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();

    if(isFormValid() == true){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-field1');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error1')){
            result = false;

        }
    });
    return result;
}

const setError = (element) =>{
    const inputControl = element.parentElement;
   
    inputControl.classList.add('error1');
    inputControl.classList.remove('success1');
 
}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    
    inputControl.classList.add('success1');
    inputControl.classList.remove('error1');
 
}

const validateInputs = () =>{
    const emailValue1 = emailInput1.value.trim();
    const passwordValue1 = passwordInput1.value.trim();
    

    var at = emailValue1.indexOf("@");
    var dot = emailValue1.indexOf(".");

    if(emailValue1 === ''){
        setError(emailInput1);
    }else if(at<1||dot<at+2||dot+2 >=emailValue1.length){
        setError(emailInput1);
    }else if(emailValue1.includes("gmail",0) == false){
        setError(emailInput1);
    }else{
        setSuccess(emailInput1);
    }

    if(passwordValue1 === ''){
        setError(passwordInput1);
    }else if(passwordValue1.length <8){
        setError(passwordInput1);
    }else if(passwordValue1.length >15){
        setError(passwordInput1);
    }else{
        setSuccess(passwordInput1);
    }

};